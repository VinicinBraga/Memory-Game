import React, { useState } from 'react';
import './Card.css';

interface CardProps {
  num: number;
}

const Card: React.FC<CardProps> = ({ num }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [showFront, setShowFront] = useState(true);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
    setShowFront(!showFront);
  };

  const frontClass = showFront ? 'card-front' : 'card-front card-hidden';
  const backClass = showFront ? 'card-back card-hidden' : 'card-back';

  const flippedClass = isFlipped ? 'card-flipped' : '';

  return (
    <div className={`card ${flippedClass}`} onClick={handleClick}>
      <div className={frontClass}>
        <img src="https://picsum.photos/200/300" alt="card-back" />
      </div>
      <div className={backClass}>
         <h1>{num}</h1>
      </div>
    </div>
  );
};

export default Card;

