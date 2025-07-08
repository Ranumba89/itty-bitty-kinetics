import TherapySkeleton from "./TherapySkeleton";
import { motion } from "framer-motion";
import PTPic from "../../Images/earlyFeeding Background Removed.png";
import JuliaPT from "../../Images/middlePic2.png";
import BabyCrawling from "../../Images/Baby-Crawling.png";
const FeedingTherapy = () => {
  const signs = [
    "Building oral motor strength for safe chewing and swallowing.",
    "Increasing food variety and acceptance through gradual exposure and play.",
    "Addressing sensory sensitivities to help children tolerate different textures, temperatures, and flavors.",
    "Supporting postural control & self-feeding skills for independent and confident eating.",
    "Empowering parents & caregivers with strategies to make mealtime more enjoyable for the whole family.",
  ];

  const middleSectionPTags = [
    <p>
      Every child is unique, and our personalized feeding therapy sessions are
      designed to meet their individual needs. If your child struggles with
      eating, we're here to help them build confidence and joy around food!
      Contact us today to schedule a consultation and take the first step toward
      happier, healthier mealtimes!
      <br />
      <br />
      We work closely with families to reduce mealtime stress, improve
      nutrition, and encourage positive food experiences. Whether your child
      avoids entire food groups, has difficulty chewing, or becomes anxious at
      meals, our experienced therapists are here to help. Contact us today to
      schedule a consultation and take the first step toward happier, healthier
      mealtimes!
      <br /> 
      <br />
      <p>
        Feeding therapy isn’t just about getting kids to eat more — it’s about
        creating a safe, encouraging space where they can explore new foods,
        textures, and routines at their own pace. We support children with
        conditions like autism, Down syndrome, prematurity, sensory processing
        disorder, and picky eating tendencies — always working in partnership
        with families.
        <br />
        <br />
      </p>
      <p>
        Our sessions may include fun play-based activities to strengthen oral
        muscles, strategies to reduce gagging or food refusal, posture and
        positioning adjustments, and parent education for carryover at home.
        Because progress is most powerful when it continues outside the clinic,
        we empower caregivers with the tools and confidence to support their
        child's feeding journey daily.
      </p>
    </p>,
  ];

  const headerParagrph = (
    <p className="occupational-therapy-content">
      Mealtime should be a time of nourishment and connection, but for many
      children, it can become a frustrating and stressful experience. At Itty
      Bitty Kinetics Therapy Group, we specialize in feeding therapy to support
      children who experience feeding difficulties, picky eating, sensory
      sensitivities, and oral motor challenges that impact their ability to eat
      and enjoy food.
    </p>
  );
  const therapyData = {
    therapyName: "Feeding",
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
      <TherapySkeleton
        middleSectionPTags={middleSectionPTags}
        signs={signs}
        headerParagrph={headerParagrph}
        therapyData={therapyData}
      />
    </motion.div>
  );
};
export default FeedingTherapy;
