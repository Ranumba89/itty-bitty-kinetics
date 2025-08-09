import React from "react";
import "./css/WeAreHere.css";
import "./css/ServicesPage.css";
import Bambi from "../Images/Edit2.jpg";
import occAssistant from "../Images/occAssistant.png";
import buildingBlock from "../Images/building-up-tower 1.png";
import WeAreHere from "./ServicesComponents/WeAreHere";
import PersonalStory from "./PersonalStory";
import RoundedRec from "./RoundedRec";
import "./css/AboutUs.css";
import Star from "./Star";
import { CheckeredCircle } from "./CheckeredCircle";
import { useMediaQuery } from "@mantine/hooks";
import checkIcon from "../Images/Group 17.png";
import { motion } from "framer-motion";
import ClientResources from "./ClientResources";

const AboutUs = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const ourStoryPoints = [
    "Culturally responsive care that honors your family’s background, values, and experiences — because therapy should reflect the world your child lives in.",
    "Accessible and insurance-based services, with ongoing efforts to expand funding opportunities for underserved communities.",
    "Playful, movement-based, child-led therapy that taps into your child’s strengths and promotes joy, learning, and real-world progress.",
    "Advocacy for equity and inclusion, through active participation in local, state, and national initiatives to ensure that every child has access to the support they deserve.",
  ];
  const ourApproachPoints = [
    "Building oral motor strength for safe chewing and swallowing.",
    "Increasing food variety and acceptance through gradual exposure and play.",
    "Addressing sensory sensitivities to help children tolerate different textures, temperatures, and flavors.",
    "Supporting postural control & self-feeding skills for independent and confident eating.",
    "Empowering parents & caregivers with strategies to make mealtime more enjoyable for the whole family.",
  ];

  const missionVisionPhilosphy = [
    {
      approach: "Mission",
      content:
        "At Itty Bitty Kinetics Therapy Group Inc., we are committed to fostering motor readiness and promoting healthy development in children through personalized, compassionate pediatric therapy services. Our approach empowers children with the skills they need to thrive, both in therapy sessions and in everyday life.",
    },
    {
      approach: "Vision",
      content:
        "Our vision is to be the leading provider of pediatric therapy services, known for delivering exceptional care through innovative, evidence-based practices. We aim to make a lasting impact on the lives of children and families by creating an inclusive and supportive environment where children with developmental delays can grow and reach their full potential. need to thrive, both in therapy sessions and in everyday life.",
    },
    {
      approach: "Philosophy",
      content:
        "At Itty Bitty Kinetics Therapy Group Inc., we believe every family deserves access to resources that support their child's optimal development, regardless of background or demographics. We provide occupational therapy services to children with developmental delays in the areas of physical, cognitive, social, and emotional development. Our goal is to assess and identify developmental delays and provide evidence-based intervention to children who are at risk or showing signs of delay. Through our therapy programs, we aim to improve children's engagement in meaningful activities, including play, daily living skills, rest, sleep, social participation, pre-academic skills, motor skills, sensory processing, self-regulation, and social-emotional development.Meet the team",
    },
  ];
  return (
    <>
      {isMobile ? (
        <div
          className="aboutUs-mobile-container"
          id="about-us-mobile-container"
          // style={{ backgroundColor: "red" }}
        >
          {/* <div
            style={{
              position: "absolute",
              width: "130%",
              height: "870px",
              left: "-90px",
              top: "0",
              backgroundColor: "green",
              // borderRadius: " 0px",
              // background:
              //   "linear-gradient(99.65deg,rgba(46, 161, 255, 0.19) -0.59%, rgba(255, 168, 216, 0.47) 92%)",
              // // rotate: "5deg",
            }}
          /> */}
          <div className="aboutUs-img-container">
            <img src={Bambi} alt="Bambi the OT" className="about-us-img" />
          </div>
          <div className="introduction-container">
            <div className="founder-header" id="meet-the-founder">
              Meet The Founder
            </div>
            <div className="founder-name">Bambi Olujumu, OTR/L</div>
            <div className="founder-title">
              Founder CEO & Pediatric Occupational Therapist
            </div>
            <div className="founder-introduction-container">
              <p>
                Hi there, I’m Bambi Olujumu, OTR/L, the heart behind Itty Bitty
                Kinetics Therapy Group! I’m a paediatric occupational therapist
                with a passion for helping little ones move, play, and discover
                their full potential. With a Bachelor of Science in Kinesiology
                from California State University, Northridge, and a Master of
                Science in Occupational Therapy from the University of St.
                Augustine for Health Sciences – Miami, I’ve dedicated my career
                to supporting children and families on their journey to
                independence and confidence.
              </p>
              <p>
                From tiny hands mastering their first grasp to adventurous
                toddlers conquering new motor skills, I believe movement is
                medicine and that kids learn best through play, exploration, and
                meaningful activities in their natural environments. My
                experience spans school-based therapy, early intervention, home
                health, outpatient hands, inpatient rehab, and community-based
                programs, giving me a well-rounded perspective on what kids need
                to thrive across different settings.
              </p>
            </div>
          </div>

          <div className="diagonal-clip" />
          <div className="occ-section">
            <img
              src={occAssistant}
              alt="occ-assistant"
              className="occ-assistant-image"
            />
            <div className="our-story-title">Our Story</div>
            <div className="our-story-content">
              <p>
                At Itty Bitty Kinetics, we believe that every child is
                wonderfully unique — and their therapy should be too. That’s why
                we don’t believe in a one-size-fits-all approach. Whether it’s
                strengthening little hands through messy play, building
                confidence with movement-based activities, or mastering everyday
                routines for greater independence, our care is designed to meet
                your child where they are — and help them thrive. We’re not just
                here to support your child — we’re here to support your whole
                family. We equip parents with the tools, coaching, and real-life
                strategies they need to feel confident supporting progress at
                home, at school, and everywhere in between.
              </p>
              <h3>Here’s what sets us apart:</h3>
              {ourStoryPoints.map((points, index) => {
                return (
                  <li className="story-point" key={index}>
                    <img className="check-icon" src={checkIcon} alt="Check" />
                    <div>{points}</div>
                  </li>
                );
              })}

              <div className="our-story-footer">
                We believe movement is medicine — and that every child deserves
                the chance to grow, explore, and reach their full potential in a
                safe, inclusive environment. At Itty Bitty Kinetics, we’re not
                just providing therapy. We’re building futures — with every
                little movement.
              </div>
            </div>
            <div
              className="mission-vision-philosophy-container"
              id="mission-vision"
            >
              <div className="mvp-background-shape" />
              <motion.div
                className="mission-vision-philosophy-box"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <div className="mission-vision-philosophy-header">
                  Mission, Vision and Philosophy
                </div>
                <div className="mission-vision-philosophy-content">
                  <div className="mission-vision-philosophy-mission">
                    {missionVisionPhilosphy.map((item, index) => {
                      return (
                        <div>
                          <div key={index} className="mvp-header">
                            {item.approach}
                          </div>
                          <p> {item.content}</p>
                        </div>
                      );
                    })}
                    {/* <div className="mission-header">Mission</div>
                    At Itty Bitty Kinetics Therapy Group Inc., we are committed
                    to fostering motor readiness and promoting healthy
                    development in children through personalized, compassionate
                    pediatric therapy services. Our approach empowers children
                    with the skills they need to thrive, both in therapy
                    sessions and in everyday life. */}
                  </div>
                </div>
              </motion.div>
            </div>
            <ClientResources />

            {/* <img
              style={{ margin: "64px 0 34px 0" }}
              src={buildingBlock}
              alt="occ-assistant"
              className="occ-assistant-image"
            /> */}
            {/* <div className="our-story-title" id="our-approach">
              Our Approach
            </div> */}
            {/* <div className="our-story-content" style={{ marginBottom: "25px" }}>
              <p>
                We use a child-led, play-based, and sensory-integrated approach
                to create positive and stress-free mealtime experiences. Our
                therapy focuses on:
              </p>

              {ourApproachPoints.map((point, index) => (
                <li className="story-point" key={index}>
                  <img className="check-icon" src={checkIcon} alt="Check" />
                  <div>{point}</div>
                </li>
              ))}

              <div className="our-story-footer">
                Every child is unique, and our personalized feeding therapy
                sessions are designed to meet their individual needs. If your
                child struggles with eating, we're here to help them build
                confidence and joy around food! Contact us today to schedule a
                consultation and take the first step toward happier, healthier
                mealtimes!
              </div>
            </div> */}
          </div>
        </div>
      ) : (
        <div
          style={{
            position: "relative",
            overflowX: "hidden",
            overflowY: "hidden",
            paddingTop: "100px",
          }}
        >
          <GridOccSection
            relative
            style={{
              visibility: "hidden",
            }}
            ourStoryPoints={ourStoryPoints}
            ourApproachPoints={ourApproachPoints}
            missionVisionPhilosphy={missionVisionPhilosphy}
          />
          <GridOccSection
            relative
            style={{
              position: "absolute",
              top: 100,
            }}
            ourStoryPoints={ourStoryPoints}
            ourApproachPoints={ourApproachPoints}
            missionVisionPhilosphy={missionVisionPhilosphy}
          />
          {/* <div className="policies-section" id="policies">
            <h2 className="section-title">Our Policies</h2>
            <ul className="policy-list">
              <li>
                <strong>Cancellation Policy:</strong> Please notify us at least
                24 hours in advance to avoid a cancellation fee.
              </li>
              <li>
                <strong>Privacy & Confidentiality:</strong> We comply with HIPAA
                standards to protect client information.
              </li>
              <li>
                <strong>Insurance:</strong> We accept United Health insurance.
                Please contact us for verification.
              </li>
              <li>
                <strong>Attendance:</strong> Consistent attendance is critical
                to your child’s progress. Repeated no-shows may result in loss
                of a scheduled slot.
              </li>
            </ul>
          </div> */}

          <ClientResources />
        </div>
      )}
    </>
  );
};

export default AboutUs;

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

const GridOccSection = ({
  relative,
  style,
  ourStoryPoints,
  ourApproachPoints,
  missionVisionPhilosphy,
}) => (
  <div style={style}>
    <RoundedRec
      style={{
        position: "absolute",
        top: 0,
        right: "0px",
      }}
    />
    <div
      className="content-container"
      style={{
        position: relative ? "relative" : "absolute",
        maxWidth: "100vw",
      }}
    >
      <div className="left-content">
        <div className="founder-header">Meet The Founder</div>
        <div className="founder-name">Bambi Olujumu, OTR/L</div>
        <div className="founder-title">
          Founder CEO & Pediatric Occupational Therapist
        </div>
        <div className="founder-description">
          <p>
            Hi there, I’m Bambi Olujumu, OTR/L, the heart behind Itty Bitty
            Kinetics Therapy Group! I’m a paediatric occupational therapist with
            a passion for helping little ones move, play, and discover their
            full potential. With a Bachelor of Science in Kinesiology from
            California State University, Northridge, and a Master of Science in
            Occupational Therapy from the University of St. Augustine for Health
            Sciences – Miami, I’ve dedicated my career to supporting children
            and families on their journey to independence and confidence.
          </p>
          <p>
            From tiny hands mastering their first grasp to adventurous toddlers
            conquering new motor skills, I believe movement is medicine and that
            kids learn best through play, exploration, and meaningful activities
            in their natural environments. My experience spans school-based
            therapy, early intervention, home health, outpatient hands,
            inpatient rehab, and community-based programs, giving me a
            well-rounded perspective on what kids need to thrive across
            different settings.
          </p>
          <p>
            At Itty Bitty Kinetics, we ditch the one-size-fits-all approach and
            embrace each child’s uniqueness. Therapy should be fun, engaging,
            and functional—whether that means strengthening little fingers with
            messy play, improving coordination through obstacle courses, or
            boosting independence with everyday routines. And because progress
            happens beyond the clinic, I’m dedicated to empowering parents with
            the tools and support they need to help their child succeed at home,
            in school, and everywhere in between.
          </p>

          <p>
            When I’m not busy chasing after milestones with my kiddos at work,
            you can find me traveling, playing golf or tennis, soaking up the
            sun at the beach, getting lost in a good book, or spending quality
            time with loved ones. Let’s move, play, and grow together—because
            every child deserves to feel strong, confident, and capable in their
            own unique way!
          </p>
        </div>
      </div>
      <div className="right-content">
        <img src={Bambi} alt="Bambi the OT" className="about-us-img" />
      </div>

      {/* <div className="diagonal-clip" /> */}
      <div className="grid-occ-section">
        <div className="occ-section">
          <img
            src={occAssistant}
            alt="occ-assistant"
            className="occ-assistant-image"
          />
          <div style={{ maxWidth: "505px" }}>
            <div className="our-story-title">Our Story</div>
            <div className="our-story-content">
              <p>
                At Itty Bitty Kinetics, we believe that every child is
                wonderfully unique — and their therapy should be too. That’s why
                we don’t believe in a one-size-fits-all approach. Whether it’s
                strengthening little hands through messy play, building
                confidence with movement-based activities, or mastering everyday
                routines for greater independence, our care is designed to meet
                your child where they are — and help them thrive. We’re not just
                here to support your child — we’re here to support your whole
                family. We equip parents with the tools, coaching, and real-life
                strategies they need to feel confident supporting progress at
                home, at school, and everywhere in between.
              </p>
              <h3>Here’s what sets us apart:</h3>
              {ourStoryPoints.map((points, index) => {
                return (
                  <li className="story-point" key={index}>
                    <img className="check-icon" src={checkIcon} alt="Check" />
                    <div>{points}</div>
                  </li>
                );
              })}

              <div className="our-story-footer">
                We believe movement is medicine — and that every child deserves
                the chance to grow, explore, and reach their full potential in a
                safe, inclusive environment. At Itty Bitty Kinetics, we’re not
                just providing therapy. We’re building futures — with every
                little movement.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mission-vision-philosophy-container" id="mission-vision">
        <div className="mvp-background-shape" />
        <motion.div
          className="mission-vision-philosophy-box"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="mission-vision-philosophy-content">
            <div className="mission-vision-philosophy-header">
              Mission, Vision and Philosophy
            </div>
            <div className="mission-vision-philosophy-mission">
              {missionVisionPhilosphy.map((item, index) => {
                return (
                  <>
                    <div key={index} className="mvp-header">
                      {item.approach}
                    </div>
                    <p> {item.content}</p>
                  </>
                );
              })}
              {/* <div className="mission-header">Mission</div>
                    At Itty Bitty Kinetics Therapy Group Inc., we are committed
                    to fostering motor readiness and promoting healthy
                    development in children through personalized, compassionate
                    pediatric therapy services. Our approach empowers children
                    with the skills they need to thrive, both in therapy
                    sessions and in everyday life. */}
            </div>
          </div>
        </motion.div>
      </div>
      {/* Our Approach */}
      {/* <div className="grid-occ-section">
        <div className="occ-section">
          <div style={{ maxWidth: "505px" }}>
            <div className="our-story-title">Our Approach</div>
            <div className="our-story-content">
              <p>
                We use a child-led, play-based, and sensory-integrated approach
                to create positive and stress-free mealtime experiences. Our
                therapy focuses on:
              </p>
              {ourApproachPoints.map((points, index) => {
                return (
                  <li className="story-point" key={index}>
                    <img className="check-icon" src={checkIcon} alt="Check" />
                    <div>{points}</div>
                  </li>
                );
              })}

              <div className="our-story-footer">
                Every child is unique, and our personalized feeding therapy
                sessions are designed to meet their individual needs. If your
                child struggles with eating, we're here to help them build
                confidence and joy around food! Contact us today to schedule a
                consultation and take the first step toward happier, healthier
                mealtimes!
              </div>
            </div>
          </div>
          <img
            src={buildingBlock}
            alt="occ-assistant"
            className="occ-assistant-image"
          />
        </div>
      </div> */}
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
