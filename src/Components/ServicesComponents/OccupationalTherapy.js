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
  const signsSections = [
  {
    icon: "🧠",
    title: "Sensory sensitivities",
    items: [
      "Overreacts to sounds, textures, lights, or movement",
      "Avoids messy play or refuses to touch certain materials",
      "Seems constantly “on the go” or overly sensitive to change",
    ],
  },
  {
    icon: "🍴",
    title: "Feeding challenges",
    items: [
      "Very selective eater (limited diet, avoids entire food groups)",
      "Difficulty chewing or swallowing, gags easily",
      "Refuses to try new textures or temperatures",
    ],
  },
  {
    icon: "🍀",
    title: "Delays in fine or gross motor skills",
    items: [
      "Trouble holding a spoon, stacking blocks, or using crayons",
      "Difficulty with balance, jumping, or climbing stairs",
    ],
  },
   {
    icon: "🧘‍♀️",
    title: "Trouble with emotional regulation",
    items: [
      "Big meltdowns over small changes",
      "Difficulty calming down without help",
      "Struggles with transitions or routines"
    ],
  },
];

  const focus = [
    "Developing fine and gross motor skills for better coordination and movement",
    "Supporting emotional and sensory regulation to help your child feel safe and focused",
    "Building independence in daily routines like feeding, grooming, and toileting",
    "Encouraging social participation and confidence through play-based therapy",
    "Coaching and empowering parents with tools, strategies, and ongoing support — not just during sessions, but every step of the way",
  ];

  const middleSectionPTags = [
    <p>
      At Itty Bitty Kinetics Therapy Group Inc., we know how overwhelming it can
      be to watch your child struggle with everyday activities like getting
      dressed, mealtimes, or joining in play with peers. If your little one
      faces developmental delays, sensory processing differences, or motor
      coordination challenges, you’re not alone — and we’re here to help. Our
      therapy services are thoughtfully designed to meet your child where they
      are, reduce family stress, and build the skills that lead to confidence,
      independence, and joyful connection. Because your child deserves support
      that’s as unique as they are — and so do you.
    </p>,
    <p>
      At Itty Bitty Kinetics Therapy Group Inc., our pediatric occupational
      therapy services are rooted in one simple belief: every child deserves the
      opportunity to thrive in their daily life — at home, in the clinic, and
      out in the world. Whether your child is navigating developmental delays,
      sensory processing differences, motor coordination challenges, or
      diagnoses such as Autism Spectrum Disorder or Down Syndrome, our job is to
      meet your family with support that makes sense for your everyday reality.
    </p>,
    <p>
      Occupational therapy helps children build the foundational skills they
      need to participate in meaningful daily activities — from getting dressed
      and feeding themselves to playing confidently with peers and managing big
      emotions. Our therapists work across all environments — in-home, in our
      Encino clinic, or out in the community — to make sure your child’s
      progress shows up where it matters most: in real life.
    </p>,
    <p>
      We focus on:
      <ul>
        {focus.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </p>,
    <p>
      Whether your child needs help learning to tolerate new textures at
      mealtimes, managing transitions throughout the day, or improving their
      ability to engage with others, we’re here to guide the process with
      compassion, expertise, and a deep respect for your child’s individuality.
      Because at Itty Bitty Kinetics, we’re not just working on skills — we’re
      helping your family build a foundation for joy, growth, and connection.
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
        headerParagrph={headerParagrph}
        therapyData={therapyData}
      />
    </motion.div>
  );
};

export default OccupationalTherapy;
