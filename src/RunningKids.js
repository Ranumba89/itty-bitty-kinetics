import React, { useEffect, useState } from "react";
import "./Components/css/RunningKids.css";
import runningGif from "./Images/Kids running.gif"; // Ensure correct path

const RunningKids = () => {
    const [showGif, setShowGif] = useState(true);
  
    useEffect(() => {
      // Hide the GIF after it runs across the screen
      setTimeout(() => {
        setShowGif(false);
      }, 4000); // Adjust based on how long the GIF takes to move across
    }, []);
  
    return (
      showGif && <img src={runningGif} alt="Running Kids" className="running-gif" />
    );
  };
  
  export default RunningKids;