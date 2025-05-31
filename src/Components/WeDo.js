import React from "react";
import Bambi from "../Images/bamiPNG.png";
import PTPic from "../Images/medium-shot-smiley-kid-mother-removebg-preview 1.png";
import kidReview from "../Images/kid-doing-occupational-therapy-session-removebg-preview 1.png";
import { IoPlaySharp } from "react-icons/io5";
import { motion } from "framer-motion";
import { useMediaQuery } from "@mantine/hooks";
import { useNavigate } from "react-router-dom";
import LearnMoreButton from "./LearnMoreButton";

const WeDo = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const navigate = useNavigate();

  return (
    <>
      {isMobile ? (
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="we-do-container">
            <div
              className="we-do-occupational-therapy"
              id="servicesSections"
              style={{
                display: "grid",
                gridTemplateColumns: "1fr auto",
                maxWidth: "100vw",
                margin: "0 auto",
                padding: "19px 15px",
              }}
            >
              <div
              // className="we-do-left"
              >
                <div className="occ-header">OCCUPATIONAL THERAPY</div>
                <LearnMoreButton to={"/occupational-therapy"} />
              </div>
              {/* <div className="we-do-rght"> */}
              <img
                src={Bambi}
                alt="Bambi the OT"
                style={{
                  width: "100%",
                  height: "auto",
                }}
                //  className="bambi-img"
              />
              {/* </div> */}
            </div>
            {/* <div className="we-do-physical-therapy">
              <div className="PT-pic-container">
                <img src={PTPic} alt="Phyiscal Therapy" className="Pt-img" />
              </div>
              <div>
                <p className="PT">
                  Physical <br /> Therapy
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
            </div> */}
          </div>
        </motion.div>
      ) : (
        <>
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
              <div className="we-do-top-container" id="servicesSections">
                <div className="we-do-left">
                  <div className="occ-header">OCCUPATIONAL THERAPY</div>
                  <p className="occ-content"></p>
                  <LearnMoreButton to={"/occupational-therapy"} />
                </div>
                <div className="we-do-rght">
                  <img src={Bambi} alt="Bambi the OT" className="bambi-img" />
                </div>
              </div>
              {/* Other Services */}
              {/* <div className="we-do-bottom-container">
                <div className="bottom-left">
                  <p className="PT">
                    Physical <br /> Therapy{" "}
                  </p>
                  <div className="PT-pic-container">
                    <img
                      src={PTPic}
                      alt="Phyiscal Therapy"
                      className="Pt-img"
                    />
                  </div>
                  <div className="learn-more">
                    Learn More
                    <IoPlaySharp
                      style={{
                        marginTop: 1,
                      }}
                    />
                  </div>
                </div>
                <div className="bottom-right">
                  <img
                    src={kidReview}
                    alt="Phyiscal Therapy"
                    className="St-img"
                  />
                  <div className="st-section">
                    <p className="ST-header">
                      Speech
                      <br /> Therapy
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
                </div>
              </div> */}
          </motion.div>
        </>
      )}
    </>
  );
};

export default WeDo;
