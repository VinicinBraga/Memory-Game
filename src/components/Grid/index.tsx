import './styles.css'
import { useState } from 'react';
import Card, { CardProps } from "../Card"
import { duplicateRegenerateSortArray } from '../../utils/card-utils';

export interface GridProps{
  cards: CardProps[]
}

function Grid({ cards }: GridProps) {
  const [stateCards, setStateCards] = useState(() => {
    return duplicateRegenerateSortArray(cards);
  });

  const handleClick = (id: string) => {
    const newStateCards = stateCards.map((card) => {
      if (card.id !== id) return card;
      if (card.flipped) return card;
      card.flipped = true
      console.log(card)
      return card
    })
    setStateCards(newStateCards)
  }
  
  return (
    <div className="grid">
      <div className="grid__container">
        {stateCards.map(card => {
          return <Card {...card} key={card.id} handleClick={handleClick} />
        })}
      </div>
    </div>
  )
}

export default Grid