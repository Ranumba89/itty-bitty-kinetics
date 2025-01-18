import React from "react";
import "./css/IntroductionSection.css";
import { IoPlayCircleOutline } from "react-icons/io5";
import Swirly from "./Swirly";
const IntroductionSection = () => {
  return (
    <div className="intro-container">
      <div className="left-grid">
        <div className="slogan">
          Building better <br />
          tomorrows with <br /> every little movement
        </div>
        <div className="intro-goal">
          Our goal is to support children in their developmental journey,
          fostering growth, independence, and success
        </div>
        <div className="intro-buttons">
          <div className="book-consult-btn ">Book free consultation now</div>
          <div className="video-btn">
            <p
              style={{
                marginRight: 6,
              }}
            >
              Watch Video
            </p>
            <IoPlayCircleOutline size={24} fill=" #56946A" color="#56946A" />
          </div>
        </div>
      </div>
     <Swirly />
      
    </div>
  );
};

export default IntroductionSection;
