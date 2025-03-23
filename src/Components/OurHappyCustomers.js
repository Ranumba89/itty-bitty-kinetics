import React from "react";
import "./css/OurHappyCustomers.css";
import julia from "../Images/pexels-julia-kuzenkov-442028-2852044 1.png";
import Joshua from "../Images/kidStaring.png";
import Ben from "../Images/kidToung.png";
import Star from "./Star";
import Circle from "./Circle";
import rightArrow from "../Images/arrowRight.png";
import leftArrow from "../Images/arrowLeft.png";
const cardMap = [
  {
    starStartColor: "#FFA8D8",
    starStopColor: "#A0CEF3",
    starGradientName: "pinkStar",
    circleStartColor: "#6CA6D5",
    circleStopColor: "#93FFC3",
    circlGradientName: "pinkcircle",
    picture: julia,
  },
  {
    starStartColor: "#000000",
    starStopColor: "#A0CEF3",
    starGradientName: "blackStar",
    circleStartColor: "#6CA6D5",
    circleStopColor: "#93FFC3",
    circlGradientName: "blueCircle",
    bg: "#FFCFA8",
    picture: Joshua,
  },
  {
    starStartColor: "#000000",
    starStopColor: "#A0CEF3",
    starGradientName: "pinkStar",
    circleStartColor: "#6CA6D5",
    circleStopColor: "#93FFC3",
    circlGradientName: "pinkcircl",
    bg: " #0B05009E",
    picture: Ben,
  },
];
const OurHappyCustomers = () => {
  return (
    <div className="happy-customers-container">
      <div className="customers-header">Our Happy Customers</div>
      <div className="arrow-container"></div>
      <div className="customers-container">
        <div className="customer-cards">
          {cardMap.map((card) => (
            <div
              className="cc"
              style={{
                background: card.bg,
              }}
            >
              <img src={card.picture} alt="first-review" className="img-1" />
              <div className="cc-quote">
                Itty Bitty Kinetics is the best helped my daughter find her true
                self
              </div>
              <div className="cc-name">Ella John</div>
              <Star
                bottom={-40}
                left={200}
                startColor={card.starStartColor}
                stopColor={card.starStopColor}
                gradientName={card.starGradientName}
              />
              <Circle
                top={-20}
                left={-20}
                startColor={card.circleStartColor}
                stopColor={card.circleStopColor}
                gradientName={card.circlGradientName}
                
              />
            </div>
          ))}
        </div>
        <div className="arrow-container">
          <img src={leftArrow} alt="Left Arrow" className="arrow left-arrow" />
          <img
            src={rightArrow}
            alt="Right Arrow"
            className="arrow right-arrow"
          />
        </div>
      </div>
    </div>
  );
};

export default OurHappyCustomers;
