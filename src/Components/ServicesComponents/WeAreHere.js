import React from "react";
import "../css/WeAreHere.css";
import { IoPlaySharp } from "react-icons/io5";
import HelpPic from "../../Images/juliaAloha.png"
const WeAreHere = () => {
  return (
    <div className="we-are-here-container">
      <div className="help-you-leftside">
        <div className="help-you-header">
          We are here <br />
          to help You!
        </div>
        <div className="help-you-content">
          At Itty Bitty Kinetics Therapy Group Inc., we understand the unique
          challenges parents face when caring for children with Developmental
          Delays, Autism Spectrum Disorder (ASD), Cerebral Palsy (CP), Down
          Syndrome, Sensory Processing Disorder (SPD), and feeding difficulties.
          Our team of experienced therapists is dedicated to addressing these
          concerns with personalized, evidence-based therapies to support your
          child’s development and well-being. 
            <br/>At Itty Bitty Kinetics Therapy
          Group Inc., we offer comprehensive Occupational, Speech, and Physical
          Therapy services for children ages 0-3, tailored to support their
          developmental needs. We provide flexible payment options, including
          packages for cash-based clients, insurance coverage, and partnerships
          with the State of California’s Early Start Program. Our goal is to
          ensure every child receives the care they need to thrive, no matter
          their financial situation or coverage options.
        </div>
        <div className="help-you-book-free">Book free consultation now <IoPlaySharp
                      style={{
                        marginTop: 1,
                      }}
                    /></div>
      </div>
      <div className="help-you-rightSide">
                      <img src={HelpPic} alt="Julia chilling" className="help-you-pic"/>
      </div>
    </div>
  );
};

export default WeAreHere;
