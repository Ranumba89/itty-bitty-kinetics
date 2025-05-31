import React from "react";
import "./css/WeDo.css";

import { IoPlaySharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
export const LearnMoreButton = ({ to }) => {
  const navigate = useNavigate();
  return (
    <div
      className="learn-more"
      onClick={() => {
        navigate(to);
      }}
    >
      <div> Learn More</div>
      <IoPlaySharp
        style={{
          marginTop: 1,
        }}
      />
    </div>
  );
};
export default LearnMoreButton;
