import React from 'react';
import './css/WelcomeItty.css';
import animPic from "../Images/animation one.png"
const WelcomeItty = () => {
  return (
    <div className="welcome-container">
      <div className="welcome-left">
        
        <img src={animPic} alt="Graphic" />
      </div>
      <div className="welcome-right">
        <div className="welcome-header">
          Welcome to Itty Bitty Kinetics Therapy Group Inc.!
        </div>
        <div className="welcome-content">
          We specialize in Early Start Occupational Therapy, Physical Therapy,
          and Speech Therapy, offering personalized care both in-home and at
          our clinic. Our goal is to support children in their developmental
          journey, fostering growth, independence, and success.
        </div>
      </div>
    </div>
  );
};

export default WelcomeItty;
