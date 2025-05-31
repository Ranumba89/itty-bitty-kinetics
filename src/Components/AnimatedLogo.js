import React from "react";
import { motion } from "framer-motion";
import Logo2 from "../Images/itty bitty logo 9.png";
import { useNavigate } from "react-router-dom";

const AnimatedLogo = () => {
  
 const navigate = useNavigate();
  return (
    <motion.img
      src={Logo2}
      alt="itty logo"
      className="header-logo"
      animate={{ y: [0, -10, 0] }} // Moves up and down
      transition={{
        duration: 1, 
        repeat: Infinity, // Repeats forever
        repeatType: "reverse", // Moves back and forth smoothly
        ease: "easeInOut"
      }}
      onClick={() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
        navigate("/");
      }}
      style={{
        cursor: "pointer",
        width: "100px", // Adjust the size as needed
        height: "auto",
      }}
    />
  );
};

export default AnimatedLogo;
