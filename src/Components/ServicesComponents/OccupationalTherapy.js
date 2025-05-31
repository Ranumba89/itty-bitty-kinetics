import React from "react";
import "../css/OccupationalTherapy.css";
import { IoPlaySharp } from "react-icons/io5";
import AnOTPic from "../../Images/Mask group.png";
import middlePic from "../../Images/juliaAloha.png";
import FatherSon from "../../Images/black-father-hugging-little-son 1.png";
import { motion } from "framer-motion";
import TherapySkeleton from "./TherapySkeleton";

const OccupationalTherapy = () => {
  const signs = [
    "Poor fine motor skills, such as difficulty with tasks like grasping, writing, or using utensils",
    "Immature gross motor skills, such as trouble with balance, running, or jumping",
    "Decreased motor control, affecting movement or coordination",
    "Decreased eye-hand coordination, making tasks like catching a ball or completing puzzles challenging",
    "Overly sensitive to sensory input, reacting strongly to lights, sounds, textures, or certain environments",
    "Under-responsive to sensory input, showing little reaction to pain, temperature, or other stimuli",
    "Difficulty sitting still, paying attention, or managing behavior",
    "Emotional reactivity or trouble calming themselves",
    "Struggles with transitions or adjusting to changes in routine or environment",
    "Limited play skills or poor social development",
    "Difficulty with self-care tasks like eating, dressing, or brushing teeth",
    "Trouble with certain sensory experiences, such as reacting to the feel of clothing, haircuts, or bath",
  ];

  const middleSectionPTags = [
    <p>
      At Itty Bitty Kinetics Therapy Group Inc., our Occupational Therapy (OT)
      for children ages 0-3 focuses on helping your child develop the
      foundational skills needed for daily living. OT plays a critical role in
      supporting early development by working on essential skills such as motor
      coordination, sensory regulation, and independence in self-care tasks. For
      children with developmental delays, Autism Spectrum Disorder (ASD), Down
      Syndrome, or Sensory Processing Disorder (SPD), our therapists create
      personalized treatment plans to enhance fine motor skills, promote
      engagement in play, and assist with tasks like feeding, dressing, and
      grooming.
    </p>,
    <p>
      Our OT team also addresses sensory sensitivities in children with SPD,
      providing strategies to help them manage sensory input and integrate it in
      a way that promotes self-regulation. For children with feeding challenges,
      OT plays a key role in supporting the development of oral motor skills and
      improving feeding abilities, especially when sensory processing issues are
      involved. We work on improving the child’s ability to tolerate different
      textures, tastes, and temperatures, making mealtime a more comfortable and
      successful experience. In addition, we assess the need for specialized
      equipment, such as wheelchairs, splints, or communication aids, to support
      your child’s mobility and communication needs, ensuring they have the
      tools to engage in everyday activities.
    </p>,
    <p>
      Through engaging, play-based interventions, our goal is to increase your
      child's confidence, independence, and overall development, helping them
      reach important milestones in a supportive, nurturing environment.
    </p>,
  ];
  const headerWords = {
    firstWord: "Occupational",
    secondWord: "Therapy (OT)",
  };
  const headerParagrph = (
    <p>
      At Itty Bitty Kinetics Therapy Group Inc., we understand that parents
      often worry about their child’s ability to engage in everyday activities
      such as dressing, feeding, and playing with peers. Children with
      developmental delays, sensory processing issues, or motor coordination
      challenges may struggle to develop self-regulation and independence, and
      our therapies are designed to support them in overcoming these challenges.
    </p>
  );
  const therapyData = {
    therapyName: "Occupational",
    headerImg: AnOTPic,
    headerImgAlt: "OT teaching",
    middleImg: middlePic,
    middleImgAlt: "Julia chilling",
    therapySignsImg: FatherSon,
    therapyImgAlt: "Black father and kid",
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
      {/* <div className="occupational-therapy-container">
        <div className="occupational-therapy-intro-container">
          <div className="occupational-therapy-leftside">
            <div className="occupational-therapy-header">
              {headerWords.firstWord} <br /> {headerWords.secondWord}
            </div>
            {headerParagrph}
            <BookNowBtn />
          </div>
          <div className="occupational-therapy-rightside">
            <div className="occupational-therapy-background"></div>
            <img
              src={therapyData.headerImg}
              alt={therapyData.headerImgAlt}
              className="OT-pic"
            />
          </div>
        </div>
      

        <div className="occupational-therapy-middle-container">
          <div className="occupational-therapy-middle-leftside">
            <img src={therapyData.middleImg} alt={therapyData.middleImgAlt} />
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
            <div className="occupational-therapy-signs-background"></div>
            <img
              src={therapyData.therapySignsImg}
              alt={therapyData.therapyImgAlt}
              className="rightside-pic"
            />
          </div>
        </div>
        <BookNow />
      </div> */}
      <TherapySkeleton
        middleSectionPTags={middleSectionPTags}
        headerWords={headerWords}
        signs={signs}
        headerParagrph = {headerParagrph}
        therapyData = {therapyData}
        
      />
    </motion.div>
  );
};

export default OccupationalTherapy;
