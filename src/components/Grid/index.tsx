import './styles.css'
import { useState, useRef } from 'react';
import Card, { CardProps } from "../Card"
import { duplicateRegenerateSortArray } from '../../utils/card-utils';


export interface GridProps{
  cards: CardProps[]
}

function Grid({ cards }: GridProps) {
  const [stateCards, setStateCards] = useState(() => {
    return duplicateRegenerateSortArray(cards);
  });

  const first = useRef<CardProps | null>(null);
  const second = useRef<CardProps | null>(null);
  const unflip = useRef(false)
  const [matches, setmatches] = useState(0)
  const [moves, setmoves] = useState(0)

  const handleClick = (id: string) => {
    const newStateCards = stateCards.map((card) => {
      if (card.id !== id) return card;
      if (card.flipped) return card;
      
      if (unflip.current && first.current && second.current) {
        first.current.flipped = false;
        second.current.flipped = false;
        first.current = null;
        second.current = null;
        unflip.current = false
      }

      card.flipped = true
      

      if (first.current === null) {
        first.current = card;
      } else if (second.current === null) {
        second.current = card
      }

      if (first.current && second.current) {
        if (first.current.cardContent === second.current.cardContent) {
          first.current = null;
          second.current = null;
        } else {
          unflip.current = true
        }
      }

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