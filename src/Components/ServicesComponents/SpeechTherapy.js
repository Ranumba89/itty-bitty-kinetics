import React from "react";
// import "../css/PhysicalTherapy.css";
import { IoPlaySharp } from "react-icons/io5";
import SpeechKid from "../../Images/SpeechKid.png";
import middleBaby from "../../Images/middleBaby.png";
import PinchedCheeks from "../../Images/PinchedCheeks.png";
import { motion } from "framer-motion";
import TherapySkeleton from "./TherapySkeleton";

const SpeechTherapy = () => {
  const signs = [
    "Limited or delayed speech development, such as not saying simple words by 12-18 months",
    "Difficulty understanding simple instructions or following directions",
    "Trouble with pronunciation or making clear sounds",
    "Limited use of gestures or facial expressions to communicate needs",
    "Difficulty expressing emotions or needs verbally",
    "Challenges with feeding, such as difficulty chewing, swallowing, or eating certain textures",
    "Trouble engaging in simple social interactions or playing with peers",
  ];

  const middleSectionPTags = [
    <p>
      For children with feeding challenges, parents may worry about oral motor
      difficulties such as chewing and swallowing, or the child’s limited food
      preferences due to sensory sensitivities. Additionally, parents may be
      concerned about their child’s ability to engage in social interactions and
      develop age-appropriate communication skills.
    </p>,
    <p>
      Our Speech Therapy (SLP) team for children ages 0-3 focuses on developing
      critical communication skills for your child’s early years. The Speech
      Therapists work on improving both verbal and non-verbal communication,
      helping children express themselves, understand language, and develop
      social interaction skills. For children with speech delays, Autism
      Spectrum Disorder (ASD), Sensory Processing Disorder (SPD), or feeding
      difficulties, our therapists provide targeted interventions to address
      oral motor skills, enhance speech clarity, and support proper feeding
      techniques, such as chewing and swallowing.
    </p>,
    <p>
      We use play-based therapy to engage your child in fun activities that
      promote language development and communication. For children with feeding
      challenges, we focus on building oral motor strength and coordination to
      improve feeding abilities. Additionally, our speech therapists work with
      children to improve social communication, helping them navigate
      interactions with peers and caregivers, and supporting their ability to
      communicate effectively in everyday situations. Our goal is to give your
      child the tools they need to express themselves confidently and
      participate fully in their world.
    </p>,
  ];

  const headerParagrph = (
    <p className="occupational-therapy-content">
      At Itty Bitty Kinetics Therapy Group Inc., we understand that parents of
      children with speech delays, feeding difficulties, or social communication
      challenges often worry about their child’s ability to express themselves,
      understand language, and interact with others. Concerns may arise when a
      child struggles with speaking clearly, has difficulty following
      directions, or is unable to communicate their needs effectively.
    </p>
  );
  const therapyData = {
    therapyName: "Speech",
    // therapyShort: "ST",
    headerImg: SpeechKid,
    headerImgAlt: "Speech Kid",
    middleImg: middleBaby,
    middleImgAlt: "infant",
    therapySignsImg: PinchedCheeks,
    therapyImgAlt: "Pinching cheeks baby",
  };

  return (
    <motion.div
      initial={{ rotate: -10, opacity: 0 }}
      animate={{ rotate: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      style={{
        display: "flex",
        justifyContent: "center",
      }}
      // className="page-container"
    >
      <TherapySkeleton
        middleSectionPTags={middleSectionPTags}
        signs={signs}
        headerParagrph={headerParagrph}
        therapyData={therapyData}
      />
    </motion.div>
  );
};

export default SpeechTherapy;
