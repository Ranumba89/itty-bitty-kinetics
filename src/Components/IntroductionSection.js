import React, { useEffect, useState } from "react";
import "./css/IntroductionSection.css";
import { IoPlayCircleOutline } from "react-icons/io5";
import babyHoldingA from "../Images/kidWithA.png";
import babyCoins from "../Images/girlHoldingCoin.png";
import babyPlaying from "../Images/kidPlaying.png";
import teachingBaby from "../Images/kidLearning.png";
import feedingBaby from "../Images/babyFed.png";
import { motion } from "framer-motion";
import Swirly from "./Swirly";
import RunningKids from "../RunningKids";
import backgroundIMG from "../Images/Group 182.png";
import Star from "./Star";
import Circle from "./Circle";
import { useMediaQuery } from "@mantine/hooks";
import { useNavigate } from "react-router-dom";
const IntroductionSection = () => {
  const babies = [
    babyHoldingA,
    babyCoins,
    babyPlaying,
    teachingBaby,
    feedingBaby,
  ];
  const isMobile = useMediaQuery("(max-width: 768px)");
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);
  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // Start fade-out effect

      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % babies.length);
        setFade(true); // Start fade-in effect
      }, 500); // Time for fade-out before changing image
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);
  return (
    <motion.div
    initial={{ scale: 0.8, opacity: 0, y: 10 }}
    animate={{ scale: 1, opacity: 1, y: 0 }}
    transition={{
      duration: 0.6, 
      ease: "easeOut",
    }}
    >
      <div className="intro-container">
        <div className="left-grid">
          <div className="slogan">
            Building better <br />
            tomorrows with <br /> every little movement
          </div>

          <div className="intro-goal"></div>
          <div className="intro-buttons">
            <div className="book-consult-btn " onClick={() => {
              navigate("/consultation");
              
            }}>
              Build with us now
            </div>
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
        <div className="right-grid">
          <div className="right-grid-circle1">
            <div className="right-grid-circle2" />
          </div>
          <div className="transparent-cover"></div>
          {!isMobile && (
            <div className="img-container">
              <img
                src={babies[currentIndex]}
                alt="babies-slide-show"
                className="slide-img"
                style={{
                  opacity: fade ? 1 : 0, // Fade effect
                  transform: fade ? "translateX(0)" : "translateX(-20px)", // Slide effect
                  transition:
                    "opacity 0.5s ease-in-out, transform 0.5s ease-in-out",
                }}
              />
            </div>
          )}
        </div>
        {isMobile ? (
          <>
            {/* <div style={{ position: "absolute", top: "170px", right: "0px" }}> */}
            {/* </div> */}

            <Swirly color={"gradient"} top={170} left={40} size={60} />
            <Swirly color={"green"} top={170} right={0} size={40} />

            <Swirly top={300} right={225} />
            <Star
              size={25}
              top={5}
              right={20}
              startColor={"#FFA8D8"}
              stopColor={"#A0CEF3"}
              gradientName={"pinkSection"}
            />
            <Star fill={false} top={5} left={50} size={20} />
            <Circle
              gradientName={"blueCircle"}
              startColor={"#6CA6D5"}
              stopColor={"#93FFC3"}
              top={10}
              size={20}
            />
            <Circle
              gradientName={"pinkcircle"}
              startColor={"#FFA8D8"}
              stopColor={"#A0CEF3"}
              bottom={0}
              // left={170}
              size={30}
            />
          </>
        ) : (
          <>
            <Swirly color={"green"} top={-20} left={520} />
            <Swirly color={"gradient"} right={-115} bottom={60} />
            <Swirly left={406} top={230} />
            <Star
              size={25}
              top={40}
              right={-10}
              startColor={"#FFA8D8"}
              stopColor={"#A0CEF3"}
              gradientName={"pinkSection"}
            />
            <Star
              fill={false}
              size={25}
              top={-50}
              right={400}
              startColor={"#FFA8D8"}
              stopColor={"#A0CEF3"}
              gradientName={"pinkSection"}
            />
            <Circle
              gradientName={"pinkcircle"}
              startColor={"#FFA8D8"}
              stopColor={"#A0CEF3"}
              top={20}
              right={410}
            />
            <Circle
              gradientName={"blueCircle"}
              startColor={"#6CA6D5"}
              stopColor={"#93FFC3"}
              top={250}
              right={510}
            />
          </>
        )}

        <RunningKids />
      </div>
    </motion.div>
  );
};

export default IntroductionSection;
