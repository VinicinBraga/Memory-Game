import React, { useState } from 'react';
import './Card.css';

interface CardProps {
  setNumerosArray: React.Dispatch<React.SetStateAction<number[]>>;
  numerosArray: number[];
  num: number;
}

const Card: React.FC<CardProps> = ({ num, setNumerosArray, numerosArray }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [showFront, setShowFront] = useState(true);
  const [numero, setNumero] = useState<number>(num);
  const frontClass = showFront ? 'card-front' : 'card-front card-hidden card-show';
  const backClass = showFront ? 'card-back card-hidden card-show' : 'card-back';

  let flippedClass = isFlipped ? 'card-flipped' : '';
  
  const handleClick = () => {
    setIsFlipped(!isFlipped);
    setShowFront(!showFront);
    setNumero(num)
    setNumerosArray([...numerosArray, numero]);
  };

 

  return (
    <div className={`card ${flippedClass} `} onClick={handleClick}>
      <div className={frontClass}>
        <div className='card-img'></div>
      </div>
      <div className={backClass}>
         <h1>{num}</h1>
      </div>
    </div>
  );
};

export default Card;

