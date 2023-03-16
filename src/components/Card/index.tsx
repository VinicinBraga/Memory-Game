import { useState } from 'react';
import './styles.css'

export interface CardProps {
  id: string;
  flipped?: boolean;
  cardContent: string;
}

function Card({ flipped: initialFlipped, cardContent, id}: CardProps) {
  const [flipped, setFlipped] = useState(initialFlipped);
  const cardContentClassNames = `card__content ${flipped ? 'card__content--flipped' : ''}`;

  const handleCardClick = (id: string) => {
      setFlipped(!flipped)
  }

  return (
    <div className="card" onClick={() => handleCardClick(id)}>
      <div className={cardContentClassNames}>
        <div className="card__face card__face--front">?</div>
        <div className="card__face card__face--back">{cardContent}</div>
      </div>
    </div>
  )
}

export default Card