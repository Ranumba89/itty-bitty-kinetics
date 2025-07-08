import { useState } from "react";

const ClientResources = () => {
     const slides = [
    {
      title: "Our Policies",
      content: (
        <ul>
          <li><strong>Cancellation Policy:</strong> Notify us 24 hrs in advance to avoid fees.</li>
          <li><strong>Privacy & Confidentiality:</strong> We follow HIPAA guidelines.</li>
          <li><strong>Insurance:</strong> We accept United Health. Contact us for verification.</li>
          <li><strong>Attendance:</strong> Frequent no-shows may result in a released slot.</li>
        </ul>
      ),
    },
    {
      title: "Frequently Asked Questions",
      content: (
        <ul>
          <li><strong>What ages do you serve?</strong> Children ages 0–10.</li>
          <li><strong>Do you offer in-home therapy?</strong> Yes, depending on location and service type.</li>
          <li><strong>What insurance do you accept?</strong> United HealthCare. Call us to confirm eligibility.</li>
          <li><strong>Do you provide parent coaching?</strong> Absolutely! We empower families with tools for success at home.</li>
        </ul>
      ),
    },
  ];
    const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % slides.length);
  const prev = () => setIndex((prev) => (prev - 1 + slides.length) % slides.length);
  return (
   <div className="client-resources-carousel">
      <h2 className="carousel-title">Client Resources</h2>
      <div className="carousel-box">
        <h3>{slides[index].title}</h3>
        <div className="carousel-content">{slides[index].content}</div>
      </div>
      <div className="carousel-nav">
        <button onClick={prev}>←</button>
        <span>{index + 1} / {slides.length}</span>
        <button onClick={next}>→</button>
      </div>
    </div>
  );
};
export default ClientResources;