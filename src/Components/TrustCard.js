// import React, { useState } from "react";

// const TrustCard = ({ index, card }) => {
//   const [isCardFliped, setIsCardFliped] = useState(false);

//   return (
//     <div className="trust-card" key={index}>
//       {isCardFliped ? (
//         <div>
//           <h4>{card.title}</h4>
//           {card.content}
//         </div>
//       ) : (
//         <>
//           <img src={card.img} alt={card.alt} className="trust-card-icon" />
//           <h4>{card.title}</h4>
//         </>
//       )}
//       <button
//         className="learn-more-btn"
//         onClick={() => {
//           setIsCardFliped((prevState) => !prevState);
//         }}
//       >
//         {isCardFliped ? "Flip Back" : "Learn More"}
//       </button>
//     </div>
//   );
// };
// export default TrustCard;

import React, { useState } from "react";
import "./css/TrustCard.css"; // Ensure you have a separate CSS file for the card flip animations

const TrustCard = ({
  index,
  card,
  newCardFlippedState,
  setNewCardFlippedState,
}) => {
  const [defaultCardFlippedState, setDefaultCardFlippedState] = useState(false);
  const defaultStateCss = defaultCardFlippedState ? "flipped" : "";
  const hasNewStateCss = newCardFlippedState ? "flipped" : "";

  return (
    <div className="trust-card-container">
      <div
        className={`trust-card ${
          newCardFlippedState && newCardFlippedState === true
            ? hasNewStateCss
            : defaultStateCss
        }`}
        key={index}
      >
        {/* Front Side */}
        <div className="trust-card-front">
          <img src={card.img} alt={card.alt} className="trust-card-icon" />
          <h4>{card.title}</h4>
          <button
            className="learn-more-btn"
            onClick={() =>
              setNewCardFlippedState
                ? setNewCardFlippedState(true)
                : setDefaultCardFlippedState(true)
            }
          >
            Learn More
          </button>
        </div>

        {/* Back Side */}
        <div className="trust-card-back">
          <h4>{card.title}</h4>
          <p>{card.content}</p>
          <button
            className="learn-more-btn"
            onClick={() =>
              setNewCardFlippedState
                ? setNewCardFlippedState(false)
                : setDefaultCardFlippedState(false)
            }
          >
            Flip Back
          </button>
        </div>

        <div
          // className="trust-card-back"
          style={{ visibility: "hidden" }}
        >
          <h4>{card.title}</h4>
          <p>{card.content}</p>
          <button
            className="learn-more-btn"
            onClick={() =>
              setNewCardFlippedState
                ? setNewCardFlippedState(false)
                : setDefaultCardFlippedState(false)
            }
          >
            Flip Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default TrustCard;
