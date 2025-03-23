import React, { useState, useEffect } from "react";
import "./css/WelcomeItty.css";
import defaultImage from "../Images/Property 1=Default.png";
import variant2 from "../Images/Property 1=Variant2.png";
import variant3 from "../Images/Property 1=Variant3.png";
import animPic from "../Images/animation one.png";
import Star from "./Star";
import { useMediaQuery } from "@mantine/hooks";
const WelcomeItty = () => {
  const images = [defaultImage, variant2, variant3];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const isMobile = useMediaQuery("(max-width: 768px)");
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000); // Change image every 2 seconds
    return () => clearInterval(interval); // Clean up the interval
  }, [images.length]);

  return (
    <>
      {isMobile ? (
        <div className="welcome-section">
          <div style={{ minHeight: "300px" }}>
            <img
              src={images[currentImageIndex]}
              alt="Welcome Animation"
              className="welcome-animation"
            />
          </div>

          <div
            // className="welcome-content"
            style={{
              padding: "20px 26px",
              backgroundColor: "#93ffc3",
              borderRadius: "26px",
              position: "relative",
            }}
          >
            <Star color={"blue"} top={-60} right={20} zIndex={-1} size={100} />
            <div className="welcome-header">
              Welcome to Itty Bitty Kinetics <br /> Therapy Group !
            </div>
            <div className="welcome-content">

            We specialize in Early Start Occupational Therapy, Physical Therapy,
            and Speech Therapy services, offering personalized care both
            in-home, virtual and at our clinic. Our goal is to support children
            on their developmental journey, fostering growth, independence, and
            success.
            </div>
          </div>

          {/* <div className="welcome-left"></div>
          <div className="welcome-container">
            <div className="welcome-right">
              <div className="welcome-header">
                Welcome to Itty Bitty Kinetics <br /> Therapy Group !
              </div>
              <div className="welcome-content">
                We specialize in Early Start Occupational Therapy, Physical
                Therapy, and Speech Therapy services, offering personalized care
                both in-home, virtual and at our clinic. Our goal is to support
                children on their developmental journey, fostering growth,
                independence, and success.
              </div>
            </div>
          </div> */}
        </div>
      ) : (
        <div className="welcome-container">
          <Star color={"blue"} top={-80} right={40} zIndex={-1} />
          <div className="welcome-left">
            <img
              src={images[currentImageIndex]}
              alt="Welcome Animation"
              className="welcome-animation"
            />
          </div>
          <div className="welcome-right">
            <div className="welcome-header">
              Welcome to Itty Bitty Kinetics Therapy Group !
            </div>
            <div className="welcome-content">
              We specialize in Early Start Occupational Therapy, Physical
              Therapy, and Speech Therapy services, offering personalized care
              both in-home, virtual and at our clinic. Our goal is to support
              children on their developmental journey, fostering growth,
              independence, and success.
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default WelcomeItty;
