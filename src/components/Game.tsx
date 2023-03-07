import { useState } from 'react';
import Card from './Card';
import { shuffleArray } from '../utils/shuffleArray';
import './Game.css'

const NUM_CARDS = 20;

function Game() {
  const [cards, setCards] = useState(() => {
    const numbers = Array.from({ length: NUM_CARDS / 2 }, (_, i) => i + 1);
    const values = [...numbers, ...numbers];
    return shuffleArray(values);
  });

  const [selectedCards, setSelectedCards] = useState<number[]>([]);
  const [score, setScore] = useState(0);

  const handleCardClick = (index: number) => {
    if (selectedCards.includes(index)) {
      return;
    }
  
    const newSelectedCards = [...selectedCards, index];
    setSelectedCards(newSelectedCards);
  
    if (newSelectedCards.length === 2) {
      const [firstIndex, secondIndex] = newSelectedCards;
      const [firstCard, secondCard] = [cards[firstIndex], cards[secondIndex]];
  
      if (firstCard === secondCard) {
        setScore(score + 1);
        setCards(cards.map((card, i) => i === firstIndex || i === secondIndex ? -1 : card));
        setSelectedCards([]);
      } else {
        setTimeout(() => {
          setCards(cards.map((card, i) => i === firstIndex || i === secondIndex ? -1 : card));
          setSelectedCards([]);
        }, 1000);
      }
    }
  };
  

  return (
    <div className="game">
      <div className="score">Score: {score}</div>
      <div className="board">
        {cards.map((value, index) => (
          <Card key={index} value={value} onClick={() => handleCardClick(index)} />
        ))}
      </div>
      <button className="reset-button" onClick={() => window.location.reload()}>Restart Game</button>
    </div>
  );
}

export default Game;

