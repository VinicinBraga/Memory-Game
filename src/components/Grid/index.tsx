import { useState } from 'react';
import Card, { CardProps } from "../Card"
import './styles.css'
import { duplicateRegenerateSortArray } from '../../utils/card-utils';

export interface GridProps{
  cards: CardProps[]
}

function Grid({ cards }: GridProps) {
  const [stateCards, setStateCards] = useState(() => {
    return duplicateRegenerateSortArray(cards);
  });
  
  return (
    <div className="grid">
      <div className="grid__container">
        {stateCards.map(card => {
          return <Card {...card} key={card.id} />
        })}
      </div>
    </div>
  )
}

export default Grid