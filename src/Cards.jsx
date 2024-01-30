import React, { useState } from "react";
import "./Cards.css";

const Cards = () => {
  const initialCards = [1, 2, 3, 4, 5];

  const [currentArray, setCurrentArray] = useState(initialCards);

  const shuffleCards = () => {
    const shuffledArray = [...currentArray];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    setCurrentArray(shuffledArray);
  };

  return (
    <div className="cardContainer">
      {currentArray.map((card, index) => (
        <div
          key={index}
          className={`cardBasic card${index + 1}`}
          onClick={shuffleCards}
        >
          {card}
        </div>
      ))}
    </div>
  );
};

export default Cards;
