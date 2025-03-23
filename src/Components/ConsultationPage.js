import React, { useState } from "react";
// import "./ConsultationPage.css";
import "../Components/css/consultationPage.css";
import axios from "axios";

const ConsultationPage = () => {
  const [events, setEvents] = useState([]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    preferredDay: "",
    selectedTime: "",
    additionalInfo: "",
  });

  const [successMessage, setSuccessMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState();
  const serverURL =
    "https://itty-consultation-server-784119790009.us-central1.run.app";
  // const serverURL = "http://localhost:5001";

  const handleInputChange = (e) => {
    const { name: key, value } = e.target;
    setFormData({ ...formData, [key]: value });

    if (key === "preferredDay") {
      getEvents(value);
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.preferredDay ||
      !formData.selectedTime
    ) {
      setSuccessMessage("Please fill out all required fields.");

      return;
    }

    setIsLoading(true);
    try {
      const response = await axios.post(serverURL + "/schedule", formData);
      const readableDate = new Date(
        `${formData.preferredDay}T12:00:00`
      ).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
        timeZone: "America/Los_Angeles",
      });
      if (response.status === 200) {
        setSuccessMessage(
          `Your consultation has been scheduled for  ${readableDate} at ${formData.selectedTime}`
        );
        setFormData({
          name: "",
          email: "",
          preferredDay: "",
          selectedTime: "",
          additionalInfo: "",
        });
      }
    } catch (error) {
      console.error("Error scheduling consultation: ", error);
      setSuccessMessage(
        error.response?.data?.message ||
          "Failed to schedule your consultation. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  const getEvents = async (day) => {
    try {
      const response = await axios.get(serverURL + "/events", {
        params: { day },
      });
      setEvents(response.data.events);
      console.log("Fetched events: ", response.data.events);
    } catch (error) {
      console.error("Error fetching events: ", error);
    }
  };

  function generateTimeSlots12HrFormat(
    startHour = 16,
    endHour = 19,
    intervalMinutes = 20
  ) {
    const slots = [];
    let currentMinutes = startHour * 60;

    const endMinutes = endHour * 60;

    while (currentMinutes <= endMinutes) {
      const hour = Math.floor(currentMinutes / 60);
      const minutes = currentMinutes % 60;

      // Convert to 12-hour format
      const hour12 = ((hour + 11) % 12) + 1;
      const ampm = hour >= 12 ? "PM" : "AM";

      const formatted = `${hour12}:${minutes
        .toString()
        .padStart(2, "0")} ${ampm}`;
      slots.push(formatted);

      currentMinutes += intervalMinutes;
    }

    return slots;
  }

  return (
    <div style={{ maxWidth: "600px", margin: "0 auto", padding: "20px" }}>
      <h1>Schedule Your Free Consultation</h1>
      <p>
        Let us help you and your child reach their goals! Fill out the form
        below to book your free consultation.
      </p>
      <p>
        <b> Weekday availability: 4pm-7pm PST</b>
      </p>
      <p>
        <b>Weekends availability: 8am-12pm PST</b>
      </p>
      <form onSubmit={handleFormSubmit}>
        <div style={{ marginBottom: "15px" }}>
          <label>Your Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Enter your name"
            required
            style={{
              width: "100%",
              padding: "10px",
              marginTop: "5px",
              borderRadius: "5px",
              border: "1px solid #ccc",
            }}
          />
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label>Your Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Enter your email address"
            required
            style={{
              width: "100%",
              padding: "10px",
              marginTop: "5px",
              borderRadius: "5px",
              border: "1px solid #ccc",
            }}
          />
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label>Preferred Day</label>
          <input
            type="date"
            name="preferredDay"
            value={formData.preferredDay}
            onChange={handleInputChange}
            required
            style={{
              width: "100%",
              padding: "10px",
              marginTop: "5px",
              borderRadius: "5px",
              border: "1px solid #ccc",
            }}
          />
        </div>
        <div
          style={{
            marginBottom: "15px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {formData.preferredDay && (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "10px",
                marginTop: "5px",
              }}
            >
              {generateTimeSlots12HrFormat(16, 19, 20).map((time, index) => {
                const reserved = events.some((event) => {
                  const eventTime = new Date(
                    event.start.dateTime
                  ).toLocaleTimeString("en-US", {
                    hour: "2-digit",
                    minute: "2-digit",
                    hour12: true,
                  });

                  return "0" + time === eventTime;
                });

                return (
                  <div
                    key={`time-${index}`}
                    className={reserved ? `reserved-item` : "reservation-item"}
                    style={{
                      color: reserved ? "grey" : "black",
                      border: reserved ? "1px solid grey" : "1px solid black ",
                      width: "fit-content",
                      borderRadius: "4px",
                      padding: "8px",
                      cursor: reserved ? "not-allowed" : "pointer",
                      userSelect: reserved ? "none" : "",
                      backgroundColor: selectedIndex === index ? "blue" : "",
                    }}
                    onClick={() => {
                      if (!reserved) {
                        setSelectedIndex(index);
                        setFormData({ ...formData, selectedTime: time });
                        console.log(
                          new Date(`${formData.preferredDay} ${time}`)
                        );
                      
                        

                        // console.log({
                        //   ...formData,
                        //   selectedTime: time,
                        // });
                      }
                    }}
                  >
                    {time}
                  </div>
                );
              })}
            </div>
          )}
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label>Additional Information</label>
          <textarea
            name="additionalInfo"
            value={formData.additionalInfo}
            onChange={handleInputChange}
            placeholder="Share any specific concerns or goals..."
            style={{
              width: "100%",
              padding: "10px",
              marginTop: "5px",
              borderRadius: "5px",
              border: "1px solid #ccc",
              minHeight: "80px",
            }}
          />
        </div>
        <button
          type="submit"
          disabled={isLoading}
          style={{
            backgroundColor: isLoading ? "#ccc" : "#007bff",
            color: "white",
            border: "none",
            padding: "10px 20px",
            borderRadius: "5px",
            cursor: isLoading ? "not-allowed" : "pointer",
          }}
        >
          {isLoading ? "Scheduling..." : "Schedule Consultation"}
        </button>
      </form>
      {successMessage && (
        <div
          style={{
            marginTop: "20px",
            padding: "10px",
            backgroundColor: successMessage.includes("Failed")
              ? "#ffcccc"
              : "#ccffcc",
            borderRadius: "5px",
            border: `1px solid ${
              successMessage.includes("Failed") ? "red" : "green"
            }`,
          }}
        >
          {successMessage}
        </div>
      )}
    </div>
  );
};

export default ConsultationPage;
