import React from "react";
import { motion } from "framer-motion";
import Logo2 from "../Images/itty bitty logo 9.png";

const AnimatedLogo = () => {
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
    />
  );
};

export default AnimatedLogo;
