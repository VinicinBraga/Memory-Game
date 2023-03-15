import { useState } from 'react';
import './styles.css'

interface CardProps {
  id: string;
  flipped: boolean;
  cardContent: number;
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
        <div className="card__face card__face--front">Front</div>
        <div className="card__face card__face--back">{cardContent}</div>
      </div>
    </div>
  )
}

export default Card