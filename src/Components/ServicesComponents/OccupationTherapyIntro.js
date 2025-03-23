import React from "react";
import "../css/OccupationTherapyIntro.css";
import OTPic from "../../Images/boy-doing-occupational-therapy-session-with-psychologist 1.png";
const OccupationTherapyIntro = () => {
  return (
    <div className="OT-container">
      <div className="OT-leftside">
        <img src={OTPic} alt="OT teaching" className="OT-pic" />
      </div>
      <div className="OT-rightside">
        <div className="OT-header">Occupational Therapy (OT)</div>
        <div className="OT-content">
          At Itty Bitty Kinetics Therapy Group Inc., we understand that parents
          often worry about their child’s ability to engage in everyday
          activities such as dressing, feeding, and playing with peers. Children
          with developmental delays, sensory processing issues, or motor
          coordination challenges may struggle to develop self-regulation and
          independence, and our therapies are designed to support them in
          overcoming these challenges.
          <br/> At Itty Bitty Kinetics Therapy Group
          Inc., our Occupational Therapy (OT) for children ages 0-3 focuses on
          helping your child develop the foundational skills needed for daily
          living. OT plays a critical role in supporting early development by
          working on essential skills such as motor coordination, sensory
          regulation, and independence in self-care tasks. For children with
          developmental delays, Autism Spectrum Disorder (ASD), Down Syndrome,
          or Sensory Processing Disorder (SPD), our therapists create
          personalized treatment plans to enhance fine motor skills, promote
          engagement in play, and assist with tasks like feeding, dressing, and
          grooming.
        </div>
      </div>
    </div>
  );
};

export default OccupationTherapyIntro;
