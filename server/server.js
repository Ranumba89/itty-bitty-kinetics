const express = require("express");
const bodyParser = require("body-parser");
const { google } = require("googleapis");
const cors = require("cors");
const open = require("open");
const url = require("url");
const app = express();

const PORT = process.env.PORT || 5001;
const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const REDIRECT_URI = process.env.REDIRECT_URI;
const oauth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URI
);

const authorizeUrl = oauth2Client.generateAuthUrl({
  access_type: "offline",
  scope: "https://www.googleapis.com/auth/calendar",
  prompt: "consent",
});
console.log(authorizeUrl);

app.use(bodyParser.json());

app.use(
  // cors({
  //   origin: "http://localhost:3000", // This is your React frontend origin
  // })
  cors()
);

app.get("/", (req, res) => {
  res.send(
    `<a href="${authorizeUrl}" target="_blank">Click here to authorize access</a>`
  );
  res.send(REDIRECT_URI);
});

app.get("/oauth2callback", async (req, res) => {
  res.send("Hello from the GET endpoint!");
  const qs = new url.URL(req.url, "http://localhost:3000").searchParams;
  const code = qs.get("code");
  console.log(`Code is ${code}`);
  const { tokens } = await oauth2Client.getToken(code);
  oauth2Client.setCredentials(tokens);

  console.log(tokens);
});

app.post("/schedule", async (req, res) => {
  const { name, email, preferredDay, selectedTime, additionalInfo } = req.body;
  console.log(req.body);

  const startDateTime = new Date(`${preferredDay} ${selectedTime}`);
  const endDateTime = new Date(startDateTime);
  endDateTime.setMinutes(endDateTime.getMinutes() + 20);

  console.log("Valid Dates: ", startDateTime);

  try {
    const event = {
      summary: `Consultation with ${name}`,
      description: additionalInfo,
      start: {
        dateTime: startDateTime.toISOString().replace(/Z$/, ""),
        timeZone: "America/Los_Angeles",
      },
      end: {
        dateTime: endDateTime.toISOString().replace(/Z$/, ""),
        timeZone: "America/Los_Angeles",
      },
      attendees: [{ email }],
    };

    const calendar = google.calendar({ version: "v3", auth: oauth2Client });
    const insertResponse = await calendar.events.insert({
      calendarId: "primary",
      resource: event,
    });

    console.log("Event created:", insertResponse.data);
    res.status(200).send({
      message: "Event scheduled successfully!",
      event: insertResponse.data,
    });
  } catch (error) {
    console.error("Error scheduling event:", error);
    res.status(500).send("Failed to schedule event. Please try again.");
  }
});

app.get("/events", async (req, res) => {
  try {
    const startTime = "16:00"; // 24-hour format
    const endTime = "19:00"; // 24-hour format
    const { day } = req.query;
    // const timeMin = `${day}T${startTime}:00`;
    // const timeMax = `${day}T${endTime}:00`;
    const timeMin = new Date(`${day}T${startTime}:00-07:00`).toISOString();
    const timeMax = new Date(`${day}T${endTime}:00-07:00`).toISOString();
    // const timeMin = new Date(`${day}T00:00:00Z`).toISOString();
    // const timeMax = new Date(`${day}T23:59:00Z`).toISOString();
    const timeZone = "America/Los_Angeles";

    console.log("Request: ", req.query, timeMin, timeMax);

    const calendar = google.calendar({ version: "v3", auth: oauth2Client });

    const eventListResponse = await calendar.events.list({
      calendarId: "primary",
      timeMin,
      timeMax,
      timeZone,
      singleEvents: true,
      orderBy: "startTime",
    });

    res.status(200).send({
      message: `Events on ${day} between ${startTime} and ${endTime}`,
      events: eventListResponse.data.items,
    });
  } catch (error) {
    console.error("Error fetching events:", error);
    res.status(500).send("Failed to retrieve events");
  }
});

if (process.env.REFRESH_TOKEN) {
  oauth2Client.setCredentials({
    refresh_token: process.env.REFRESH_TOKEN,
  });
  console.log("Refresh token loaded.");
}

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  // open(authorizeUrl, { wait: false }).then((cp) => cp.unref());
});
