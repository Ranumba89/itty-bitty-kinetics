import React from "react";
import "./css/WeAreHere.css";
import "./css/ServicesPage.css";
import Bambi from "../Images/bamiPNG.png";

import WeAreHere from "./ServicesComponents/WeAreHere";
import PersonalStory from "./PersonalStory";
import RoundedRec from "./RoundedRec";
import "./css/AboutUs.css";
import Star from "./Star";
import { CheckeredCircle } from "./CheckeredCircle";
const AboutUs = () => {
  return (
    <div className="aboutUs-container">
      <RoundedRec
        style={{
          position: "absolute",
          top: 0,
          right: "0px",
        }}
      />
      <div className="content-container">
        <div className="left-content">
          <div className="founder-header">Meet The Founder</div>
          <div className="founder-name">Bambi Olujumu, OTR/L</div>
          <div className="founder-title">
            Founder CEO & Pediatric Occupational Therapist
          </div>
          <div className="founder-description">
            <p>
              Hi there, I’m Bambi Olujumu, OTR/L, the heart behind Itty Bitty
              Kinetics Therapy Group! I’m a paediatric occupational therapist
              with a passion for helping little ones move, play, and discover
              their full potential. With a Bachelor of Science in Kinesiology
              from California State University, Northridge, and a Master of
              Science in Occupational Therapy from the University of St.
              Augustine for Health Sciences – Miami, I’ve dedicated my career to
              supporting children and families on their journey to independence
              and confidence.
            </p>
            <p>
              From tiny hands mastering their first grasp to adventurous
              toddlers conquering new motor skills, I believe movement is
              medicine and that kids learn best through play, exploration, and
              meaningful activities in their natural environments. My experience
              spans school-based therapy, early intervention, home health,
              outpatient hands, inpatient rehab, and community-based programs,
              giving me a well-rounded perspective on what kids need to thrive
              across different settings.
            </p>
            <p>
              At Itty Bitty Kinetics, we ditch the one-size-fits-all approach
              and embrace each child’s uniqueness. Therapy should be fun,
              engaging, and functional—whether that means strengthening little
              fingers with messy play, improving coordination through obstacle
              courses, or boosting independence with everyday routines. And
              because progress happens beyond the clinic, I’m dedicated to
              empowering parents with the tools and support they need to help
              their child succeed at home, in school, and everywhere in between.
            </p>

            <p>
              When I’m not busy chasing after milestones with my kiddos at work,
              you can find me traveling, playing golf or tennis, soaking up the
              sun at the beach, getting lost in a good book, or spending quality
              time with loved ones. Let’s move, play, and grow together—because
              every child deserves to feel strong, confident, and capable in
              their own unique way!
            </p>
          </div>
        </div>
        <div className="right-content">
          <img src={Bambi} alt="Bambi the OT" className="about-us-img"/>
        </div>
      </div>
      <RoundedRec
        style={{
          position: "absolute",
          top: "72px",
          right: "240px",
        }}
      />
      <Star fill={false} left={324} />
      <CheckeredCircle
        style={{
          position: "absolute",
          aspectRatio: "1/1",
          height: "75px",
          borderRadius: "100%",
          left: "141px",
          top: "25px",
        }}
      />
      <BlurredOval />
      <div
        style={{
          position: "absolute",
          width: "130%",
          height: "870px",
          top: "448px",
          borderRadius: " 121px",
          background:
            "linear-gradient(99.65deg, rgba(103, 169, 223, 0.09) -0.59%, rgba(255, 168, 216, 0.47) 92%)",
          rotate: "-5deg",
        }}
      />
    </div>
  );
};

const BlurredOval = () => {
  return (
    <div
      style={{
        position: "absolute",
        width: "1091px",
        height: "749px",
        top: "79px",
        left: "160px",
        background:
          "linear-gradient(103.92deg, rgba(103, 169, 223, 0.02) 1.5%, rgba(255, 168, 216, 0.52) 57.79%)",
        borderRadius: "100%",
        filter: "blur(409px)",
      }}
    ></div>
  );
};
export default AboutUs;
