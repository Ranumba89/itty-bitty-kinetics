import React from "react";
import BookNowBTN from "../ServicesComponents/BookNowBtn";
import checkIcon from "../../Images/Group 17.png";
import BookNow from "../BookNow";
import { CheckeredCircle } from "../CheckeredCircle";
import Star from "../Star";
import Circle from "../Circle";
import Swirly from "../Swirly";
import "../css/ProgramSkeleton.css";
const ProgramSkeleton = ({
  headerParagrph,
  therapyData,
  middleSectionPTags,
  signs,
}) => {
  return (
    <div className="programs-container">
      <CheckeredCircle
        style={{
          position: "absolute",
          aspectRatio: "1/1",
          height: "75px",
          borderRadius: "100%",
          left: 0,
          top: "25px",
          zIndex: "-1",
        }}
      />

      <Star
        fill={false}
        size={25}
        top={50}
        // right={400}
        left={250}
        startColor={"#FFA8D8"}
        stopColor={"#A0CEF3"}
        gradientName={"pinkSection"}
      />

      <Circle
        gradientName={"blueCircle"}
        startColor={"#6CA6D5"}
        stopColor={"#93FFC3"}
        top={12}
        right={510}
        left={450}
      />
      <Swirly color={"gradient"} top={30} right={0} />

      <div className="programs-intro-container">
        <Star
          size={25}
          bottom={-70}
          left={100}
          startColor={"#61E89E"}
          stopColor={"#A0CEF3"}
          gradientName={"GreenGradient"}
        />
        <div className="programs-leftside">
          <div className="programs-header">
            {therapyData.therapyName} <br />
            Therapy {therapyData.therapyShort}
          </div>
          {headerParagrph}
          <BookNowBTN />
        </div>
        <div className="programs-rightside">
          <div className="programs-background"></div>
          <img
            src={therapyData.headerImg}
            alt={therapyData.headerImgAlt}
            className="OT-pic"
          />

          <Star color={"blue"} top={460} right={200} />
        </div>
      </div>
      {/* middle side  */}

      <div className="programs-middle-container">
        <Star fill={false} top={50} left={80} size={80} />
        <Star color={"white"} bottom={100} left={700} size={80} />
        <Star color={"white"} top={50} right={200} size={80} />
        <div className="programs-middle-leftside">
          <img src={therapyData.middleImg} alt={therapyData.middleImgAlt} />
        </div>
        <div className="progrmas-middle-righside">
          {middleSectionPTags.map((pTags, index) => (
            // <div key={index}>{pTags} </div>
            <React.Fragment key={index}>{pTags}</React.Fragment>
          ))}
        </div>
      </div>
      <div className="programs-signs-container">
        <div className="programs-signs-leftside">
          <div className="programs-leftside-header">
            Signs your child may benefit from {therapyData.therapyName} Therapy
            evaluation
          </div>
          <ul className="signs-list">
            {signs.map((signs, index) => (
              <li key={index} className="specialty-item">
                <img src={checkIcon} alt="Check" className="check-icon" />
                {signs}
              </li>
            ))}
          </ul>
        </div>
        <div className="programs-signs-rightside">
          <div className="programs-signs-background"></div>
          <img
            src={therapyData.therapySignsImg}
            alt={therapyData.therapyImgAlt}
            className="rightside-program-pic"
            style={{
              bottom: therapyData.therapyName === "Speech" ? "0px" : "76px",
            }}
          />
        </div>
        <Swirly color={"green"} top={300} left={570} />
        <Swirly top={-50} left={0} />
      </div>
      <BookNow />
    </div>
  );
};

export default ProgramSkeleton;
