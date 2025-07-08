import React from "react";
import BookNowBTN from "./BookNowBtn";
import checkIcon from "../../Images/Group 17.png";
import BookNow from "../BookNow";
import { CheckeredCircle } from "../CheckeredCircle";
import Star from "../Star";
import Circle from "../Circle";
import Swirly from "../Swirly";
import { useMediaQuery } from "@mantine/hooks";
import "../css/TherapySkeleton.css";

const TherapySkeleton = ({
  headerParagrph,
  therapyData,
  middleSectionPTags,
  signs,
}) => {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <>
      {isMobile ? (
        <div>
          <div
            className="therapy-skeleton-mobile-container"
            style={{ display: "flex", flexDirection: "column" }}
          >
            <div className="therapy-skeleton-mobile-header">
              {therapyData.therapyName} <br />
              Therapy {therapyData.therapyShort}
            </div>
            <div
              // className="occupational-therapy-background"
              className="therapy-skeloton-intro-background"
            >
              <img
                src={therapyData.headerImg}
                alt={therapyData.headerImgAlt}
                // className="OT-pic"
                className="therapy-skeloton-intro-pic"
              />
            </div>
            <Star color={"blue"} top={80} right={200} size={50} />
            <div className="therapy-skeloton-intro-paragraph">
              {headerParagrph}
              <BookNowBTN />
            </div>
            <div
              // className="occupational-therapy-middle-leftside"
              className="therapy-skeloton-middle-container"
            >
              <img
                src={therapyData.middleImg}
                alt={therapyData.middleImgAlt}
                className="theraoy-skeloton-middle-pic"
              />
              <div className="therapy-skeloton-middle-content-container">
                <div
                  // className="occupational-therapy-middle-righside"
                  className="therapy-skeloton-middle-content"
                >
                  {middleSectionPTags.map((pTags, index) => (
                    // <div key={index}>{pTags} </div>
                    <React.Fragment key={index}>{pTags}</React.Fragment>
                  ))}
                </div>
              </div>
            </div>
            <div className="therapy-skeloton-bottom-container">
              <div className="therapy-skeloton-bottom-signs-header">
                Signs your child may benefit from {therapyData.therapyName}{" "}
                Therapy evaluation
              </div>
              <ul
                className="signs-list"
                style={{
                  listStyle: "none",
                }}
              >
                {signs.map((signs, index) => (
                  <li key={index} className="therapy-signs-list">
                    <img
                      src={checkIcon}
                      alt="Check"
                      className="therapy-skelaton-signs-icon"
                    />
                    <div className="therapy-skelaton-signs-content">
                      {signs}
                    </div>
                  </li>
                ))}
              </ul>
              <div className="therapy-skelton-bottom-pic-container">
                <div className="therapy-skelaton-bottom-background">
                  <img
                    src={therapyData.therapySignsImg}
                    alt={therapyData.therapyImgAlt}
                    // className="rightside-pic"
                    className="therapy-skelaton-bottom-pic"
                  />
                </div>
              </div>
            </div>
            <BookNow />
          </div>
        </div>
      ) : (
        <div>
          <div className="occupational-therapy-container">
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

            <div className="occupational-therapy-intro-container">
              <Star
                size={25}
                bottom={-70}
                left={100}
                startColor={"#61E89E"}
                stopColor={"#A0CEF3"}
                gradientName={"GreenGradient"}
              />
              <div className="occupational-therapy-leftside">
                <div className="occupational-therapy-header">
                  {therapyData.therapyName} <br />
                  Therapy {therapyData.therapyShort}
                </div>
                <div className="occupational-therapy-content">
                  {headerParagrph}
                  <BookNowBTN />
                </div>
              </div>
              <div className="occupational-therapy-rightside">
                <div className="occupational-therapy-background"></div>
                <img
                  src={therapyData.headerImg}
                  alt={therapyData.headerImgAlt}
                  className="OT-pic"
                />

                <Star color={"blue"} top={460} right={200} />
              </div>
            </div>
            {/* middle side  */}

            <div className="occupational-therapy-middle-container">
              <Star fill={false} top={50} left={80} size={80} />
              <Star color={"white"} bottom={100} left={700} size={80} />
              <Star color={"white"} top={50} right={200} size={80} />
              <div className="occupational-therapy-middle-leftside">
                <img
                  className="occupational-therapy-middle-img"
                  src={therapyData.middleImg}
                  alt={therapyData.middleImgAlt}
                />
              </div>
              <div className="occupational-therapy-middle-righside">
                {middleSectionPTags.map((pTags, index) => (
                  // <div key={index}>{pTags} </div>
                  <React.Fragment key={index}>{pTags}</React.Fragment>
                ))}
              </div>
            </div>
            <div className="occupational-therapy-signs-container">
              <div className="occupational-therapy-signs-leftside">
                <div className="occupational-therapy-leftside-header">
                  Signs your child may benefit from {therapyData.therapyName}{" "}
                  Therapy evaluation
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
              <div className="occupational-therapy-signs-rightside">
                <div className="occupational-therapy-signs-background">
                  <div
                    style={{
                      position: "relative",
                      width: "100%",
                      height: "100%",
                    }}
                  >
                    <img
                      src={therapyData.therapySignsImg}
                      alt={therapyData.therapyImgAlt}
                      className="rightside-pic"
                      style={{
                        bottom:
                          // therapyData.therapyName === "Speech" ? "0px" : "76px",
                          "0px",
                      }}
                    />
                  </div>
                </div>
              </div>
              <Swirly color={"green"} top={300} left={570} />
              <Swirly top={-50} left={0} />
            </div>
            <BookNow />
          </div>
        </div>
      )}
    </>
  );
};

export default TherapySkeleton;

const style = {};
