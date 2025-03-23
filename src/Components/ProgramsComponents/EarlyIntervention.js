
import React from "react";
// import "../css/PhysicalTherapy.css";
import { IoPlaySharp } from "react-icons/io5";
import PTPic from "../../Images/PTPIC.png";
import JuliaPT from "../../Images/Julia-PT.png";
import BabyCrawling from "../../Images/Baby-Crawling.png";
import { motion } from "framer-motion";
import ProgramSkeleton from "./ProgramSkeleton";
const EarlyIntervention = () => {
    const signs = [
        "Delayed motor milestones, such as not sitting up by 6 months, crawling by 9 months, or walking by 18 months",
        "Poor coordination or trouble with balance",
        "Difficulty transitioning between different surfaces",
        "Difficulty maintaining balance on uneven surfaces",
        "Difficulty with tasks like rolling, sitting, standing, or walking",
        "Muscle weakness or low muscle tone",
        "Trouble with gross motor activities like jumping, running, or climbing",
        "Limited ability to explore or engage in physical play",
        "Difficulty maintaining posture or supporting their own body weight",
        "Hypotonia-low muscle tone",
        "Hypertonia-high muscle tone",
      ];
    
      const middleSectionPTags = [
        <p>
          Parents may also be concerned about their child’s ability to keep up with
          peers or achieve the motor skills necessary for independence. Our Physical
          Therapy (PT) team for children ages 0-3 focuses on improving your child’s
          gross motor skills, strength, and coordination. PT helps children achieve
          key physical milestones, such as sitting, crawling, standing, and walking,
          while also improving balance and body awareness. For children with
          developmental delays, Cerebral Palsy (CP), Down Syndrome, or other motor
          coordination challenges, our physical therapists use targeted
          interventions to enhance mobility, muscle strength, and coordination
        </p>,
        <p>
          We provide individualized, play-based therapy sessions that engage your
          child while promoting physical growth and functional movement. Whether
          your child is working on strength, flexibility, or motor planning, our
          therapists create a tailored plan to help them reach age-appropriate
          milestones. Through structured activities and exercises, we focus on
          improving your child’s physical abilities, empowering them to become more
          independent and confident in their movements. Our goal is to help your
          child build a solid foundation for physical development that will support
          their overall well-being and long-term success.
        </p>,
      ];
    
      const headerParagrph = (
        <p className="occupational-therapy-content">
        Comming soon...
        </p>
      );
      const therapyData = {
        therapyName: "Early Intervention",
        // therapyShort: "(PT)",
        headerImg: PTPic,
        headerImgAlt: "OT teaching",
        middleImg: JuliaPT,
        middleImgAlt: "Julia chilling",
        therapySignsImg: BabyCrawling,
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
          <ProgramSkeleton
            middleSectionPTags={middleSectionPTags}
            signs={signs}
            headerParagrph={headerParagrph}
            therapyData={therapyData}
          />
        </motion.div>
      );
}

export default EarlyIntervention;