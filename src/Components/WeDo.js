import React from "react";
import "./css/WeDo.css";
import Bambi from "../Images/bamiPNG.png";
import PTPic from "../Images/medium-shot-smiley-kid-mother-removebg-preview 1.png";
import { IoPlaySharp } from "react-icons/io5";
const WeDo = () => {
  return (
    <>
      <h4>We Do</h4>

      <div className="we-do-container">
        <div className="we-do-left">
          <div className="occ-header">OCCUPATIONAL THERAPY</div>
          <p>
            OT plays a key role in supporting the development of oral motor
            skills and
            <br /> improving feeding abilities, especially when sensory
            processing issues are involved.
          </p>
          <div className="learn-more">
            Learn More
            <IoPlaySharp
              style={{
                marginTop: 1,
              }}
            />
          </div>
        </div>
        <div className="we-do-rght">
          <img src={Bambi} alt="Bambi the OT" className="bambi-img" />
        </div>
      </div>
      <div className="we-do-bottom-container">
        <div className="bottom-left">
          <p className="PT">
            Physical <br /> Therapy{" "}
          </p>
          <img src={PTPic} alt="Phyiscal Therapy" className="Pt-img" />
        </div>
        <div className="bottom-right">Speech Therapy</div>
      </div>
    </>
  );
};

export default WeDo;
