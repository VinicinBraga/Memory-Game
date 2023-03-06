import React, { useState } from 'react';
import './App.css';
import Board from './components/Board';

const cards = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L'];

function App() {
  const [selectedCards, setSelectedCards] = useState<number[]>([]);

  function handleCardClick(index: number) {
    setSelectedCards((prevSelectedCards) => [...prevSelectedCards, index]);
  }

  return (
    <div className="App">
      <h1>Memory Game</h1>
      <Board cards={cards} onCardClick={handleCardClick} />
    </div>
  );
}

export default App;