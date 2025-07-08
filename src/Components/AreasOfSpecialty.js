import React from "react";
import childImage from "../Images/Group 157@2x (1).png";
import checkIcon from "../Images/Group 17.png"; // Replace with the path to your checkmark icon
import "./css/AreasOfSpecialty.css"; // Include your CSS file
import { useMediaQuery } from "@mantine/hooks";

const AreasOfSpecialty = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");

  const specialties = [
    "Pediatric Feeding Disorder",
    "Avoidant/Restrictive Food Intake Disorder (ARFID)",
    "Developmental Delays",
    "Early Start: Children 0-3 years of age",
    "Sensory Processing Disorder",
    "School Readiness Skills",
    "Fine Motor Skills",
    "Gross Motor Skills",
    "Self-Care Skills",
  ];
  return (
    <>
      {isMobile ? (
        <div className="aop-container">
          <div className="aop-right">
            <img
              src={childImage}
              alt="Child giving thumbs up"
              className="child-image"
            />
          </div>
          <div className="aop-left">
            <h3 className="aop-title">Areas of Specialty</h3>
            <ul className="specialties-list">
              {specialties.map((specialty, index) => (
                <li key={index} className="specialty-item">
                  <img src={checkIcon} alt="Check" className="check-icon" />
                  {specialty}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : (
        <div className="aop-container">
          <div className="aop-left">
            <h3 className="aop-title">Areas of Specialty</h3>
            <ul className="specialties-list">
              {specialties.map((specialty, index) => (
                <li key={index} className="specialty-item">
                  <img src={checkIcon} alt="Check" className="check-icon" />
                  {specialty}
                </li>
              ))}
            </ul>
          </div>
          <div className="aop-right">
            <img
              src={childImage}
              alt="Child giving thumbs up"
              className="child-image"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default AreasOfSpecialty;
