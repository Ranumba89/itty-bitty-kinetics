import React, { useState, useEffect, useRef } from "react";

const brandColors = ["#A8D8FF", "#A8FFCF", "#FFA8D8", "#FFCFA8"]; // Brand colors

const EyeCoordinationGame = () => {
  const containerRef = useRef(null);
  const [dotPosition, setDotPosition] = useState(50);
  const [score, setScore] = useState(0);
  const [velocity, setVelocity] = useState(3); // Starting speed
  const [direction, setDirection] = useState(1); // 1 = right, -1 = left
  const [dotColor, setDotColor] = useState("#FFA8D8"); // Default dot color
  const requestRef = useRef(null);

  useEffect(() => {
    const moveDot = () => {
      if (!containerRef.current) return; // Stop movement if container doesn't exist

      setDotPosition((prevX) => {
        const containerWidth = containerRef.current.offsetWidth;
        let newX = prevX + velocity * direction;

        // Bounce Off Left & Right Walls
        if (newX <= 0) {
          newX = 0;
          setDirection(1); // Move right
        }
        if (newX >= containerWidth - 30) {
          newX = containerWidth - 30;
          setDirection(-1); // Move left
        }

        return newX;
      });

      requestRef.current = requestAnimationFrame(moveDot);
    };

    requestRef.current = requestAnimationFrame(moveDot);
    return () => cancelAnimationFrame(requestRef.current);
  }, [velocity, direction]);

  const handleDotClick = () => {
    setScore((prevScore) => prevScore + 1); // Increase score
    setDirection((prevDirection) => prevDirection * -1); // Reverse direction
    setVelocity((prevVelocity) => prevVelocity + 0.5); // Gradually increase speed
    setDotColor(brandColors[Math.floor(Math.random() * brandColors.length)]); // Change dot color randomly
  };

  return (
    <div style={styles.wrapper}>
      <h2 style={styles.title}>Eye Coordination Game</h2>
      <div ref={containerRef} style={styles.container}>
        <div
          onClick={handleDotClick}
          style={{
            ...styles.dot,
            backgroundColor: dotColor, // Dynamic dot color
            left: `${dotPosition}px`,
          }}
        ></div>
      </div>
      <p style={styles.score}>Score: {score}</p>
    </div>
  );
};

const styles = {
  wrapper: {
    textAlign: "center",
    marginTop: "10px",
    marginBottom: "250px",
  },
  container: {
    width: "500px",
    height: "100px",
    background: "#A8D8FF", // Brand color background
    borderRadius: "20px",
    margin: "auto",
    position: "relative",
    overflow: "hidden",
    border: "3px solid #000000", // Black outline for better visibility
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "4px 4px 10px rgba(0, 0, 0, 0.2)", // Soft shadow effect
  },
  title: {
    fontSize: "24px",
    fontWeight: "bold",
    color: "#000000", // Black text for contrast
    marginBottom: "10px",
  },
  score: {
    fontSize: "18px",
    fontWeight: "bold",
    color: "#000000",
    marginTop: "10px",
  },
  dot: {
    position: "absolute",
    width: "30px",
    height: "30px",
    borderRadius: "50%",
    cursor: "pointer",
    transition: "background-color 0.2s ease-in-out", // Smooth color transition
  },
};

export default EyeCoordinationGame;
