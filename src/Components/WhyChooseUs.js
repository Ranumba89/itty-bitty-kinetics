import React, { useEffect, useState } from "react";
import "./css/WhyChooseUs.css";
import backgroundImage from "../Images/7146445 1.png";
import family from "../Images/Family.png";
import sunrise from "../Images/Sunrise.png";
import customerExperience from "../Images/Customer Experience.png";
import homeTherapy from "../Images/Door Handle.png";
import treatmentPlan from "../Images/Phone.png";
import holisticApproach from "../Images/Dartboard.png";
import provenResults from "../Images/Result.png";
import TrustCard from "./TrustCard";
import { useMediaQuery } from "@mantine/hooks";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";

const WhyChooseUs = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalColor, setModalColor] = useState("");
  const [flipMobileCard, setFlipMobileCard] = useState();
  const [stateInterval, setStateInterval] = useState();

  const isMobile = useMediaQuery("(max-width: 768px)");
  const [currentIndex, setCurrentIndex] = useState(0);
  const trustCardsArray = [
    {
      img: family,
      alt: "Family",
      title: "Family-Centered Care",
      content:
        "We believe in partnering with families to ensure that therapy is not just about the child's progress, but also about empowering parents and caregivers. We take the time to understand your family's unique needs and integrate therapy into your child's everyday routines for the best possible outcomes.",
    },
    {
      img: provenResults,
      alt: "Proven Results",
      title: "Proven Results and Family Satisfaction",
      content:
        "  Our approach is grounded in evidence-based practices, ensuring your child receives the highest standard of care. We are committed to measurable outcomes that improve your child’s quality of life.",
    },
    {
      img: customerExperience,
      alt: "Customer Experience",
      title: "Experienced and Compassionate Therapists",
      content:
        " Our team consists of highly trained professionals who are passionate about helping children thrive. We use evidence-based practices tailored to each child’s unique challenges, providing therapeutic interventions that promote growth in a safe, supportive environment.",
    },
    {
      img: homeTherapy,
      alt: "Home Therapy",
      title: "Home, Virtual and Clinic-Based Therapy",
      content:
        "We offer flexible therapy options in-home, virtual and at our state-of-the-art clinic. By offering therapy in the comfort of your home, we can assess and support your child in their natural environment.",
    },
    {
      img: treatmentPlan,
      alt: "Treatment Plan",
      title: "Customized Treatment Plans",
      content:
        " Every child is different. We create individualized therapy plans tailored to your child’s needs and goals, ensuring a personalized approach to help them succeed at their own pace.",
    },
    {
      img: holisticApproach,
      alt: "Holistic Approach",
      title: "Holistic Approach to Development",
      content:
        "We focus on enhancing your child’s overall development, including self-regulation, play skills, independence, and success in everyday tasks. We take a whole-child approach to ensure both immediate and long-term growth.",
    },
  ];
  // Open Modal with Selected Card Data
  const handleOpenModal = (card) => {
    setSelectedCard(card);
    setIsModalOpen(true);
  };

  // Close Modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const nextCard = () => {
    setFlipMobileCard(false);
    setCurrentIndex((prevIndex) =>
      prevIndex === trustCardsArray.length - 1 ? 0 : prevIndex + 1
    );
    setStateInterval();
  };

  // Function to go to the previous card
  const prevCard = () => {
    setFlipMobileCard(false);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? trustCardsArray.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextCard();
    }, 10000);

    return () => clearInterval(interval); // Cleanup interval when component unmounts
  }, []);

  return (
    <>
      {isMobile ? (
        <div
          className="why-choose-us-container"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          <div className="why-choose-us-header">
            <h2>Why Choose Us?</h2>
            <p>
              At Itty Bitty Kinetics Therapy Group Inc., we are committed to
              providing high-quality, family-centered care that supports your
              child’s development. Our Early Start Program offers Occupational,
              Physical, and Speech Therapy to help children develop essential
              skills for greater independence, self-regulation, and success. We
              collaborate closely with families to ensure therapy is integrated
              into everyday routines, empowering both children and caregivers.
              Our team of experienced professionals provides evidence-based,
              personalized interventions, offering flexible therapy options both
              in-home and at our clinic. Each child receives an individualized
              treatment plan tailored to their unique needs and goals, with a
              focus on promoting long-term growth. We take a holistic approach,
              addressing play skills, independence, and overall development to
              support both immediate and future success. Our proven results and
              dedication to measurable progress ensure that your child will
              thrive and reach their full potential.
            </p>
          </div>
          <div className="why-trust-us">
            <p>
              At Itty Bitty Kinetics Therapy Group Inc., we are dedicated to
              providing personalized, high-quality care for your child’s
              developmental needs.&nbsp;
              <b
                style={{
                  fontSize: "15px",
                }}
              >
                Here's why families trust us.
              </b>
            </p>
            {/* <h3 className="trust-us-header">Here's why families trust us</h3> */}
            <div
            // className="trust-cards"
            >
              <div className="trust-card-carousel">
                {/* Left Button */}
                <button className="carousel-btn left" onClick={prevCard}>
                  <IoChevronBack size={24} />
                </button>

                {/* Display Single Card */}
                <TrustCard
                  card={trustCardsArray[currentIndex]}
                  newCardFlippedState={flipMobileCard}
                  setNewCardFlippedState={setFlipMobileCard}
                />

                {/* Right Button */}
                <button className="carousel-btn right" onClick={nextCard}>
                  <IoChevronForward size={24} />
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div
          className="why-choose-us-container"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          <div className="why-choose-us-header">
            <h2>Why Choose Us?</h2>
            <p>
              At Itty Bitty Kinetics Therapy Group Inc., we are committed to
              providing high-quality, family-centered care that supports your
              child’s development. Our Early Start Program offers Occupational,
              Physical, and Speech Therapy to help children develop essential
              skills for greater independence, self-regulation, and success. We
              collaborate closely with families to ensure therapy is integrated
              into everyday routines, empowering both children and caregivers.
              Our team of experienced professionals provides evidence-based,
              personalized interventions, offering flexible therapy options both
              in-home and at our clinic. Each child receives an individualized
              treatment plan tailored to their unique needs and goals, with a
              focus on promoting long-term growth. We take a holistic approach,
              addressing play skills, independence, and overall development to
              support both immediate and future success. Our proven results and
              dedication to measurable progress ensure that your child will
              thrive and reach their full potential.
            </p>
            <p>
              At Itty Bitty Kinetics Therapy Group Inc., we are dedicated to
              providing personalized, high-quality care for your child’s
              developmental needs.
            </p>
            {/* <button className="learn-more-btn">Learn More</button> */}
          </div>

          <div className="why-trust-us">
            
            <h3 className="trust-us-header">Here's why families trust us</h3>
            <div className="trust-cards">
              {trustCardsArray.map((card, index) => (
                <TrustCard
                  index={index}
                  card={card}
                  // handleOpenModal={handleOpenModal}
                />
              ))}
            </div>
          </div>
          {/* Modal Component */}
          {isModalOpen && (
            <div className="modal-overlay" onClick={handleCloseModal}>
              <div
                className="modal-content"
                onClick={(e) => e.stopPropagation()}
              >
                <button className="close-btn" onClick={handleCloseModal}>
                  ✖
                </button>
                <h2>{selectedCard?.title}</h2>
                <p>{selectedCard?.content}</p>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default WhyChooseUs;
