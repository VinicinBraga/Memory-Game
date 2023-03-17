import { useState } from 'react';
import './styles.css'

export interface CardProps {
  id: string;
  flipped?: boolean;
  cardContent: string;
  handleClick?: (id: string) => void;
}

function Card({ flipped = false, cardContent, handleClick, id }: CardProps) {
  const [isflipped, setIsFlipped] = useState(false);
  const cardContentClassNames = `card__content ${flipped ? 'card__content--flipped' : ''}`;

  const handleCardClick = (id: string) => {
    if (handleClick) {
      handleClick(id)
    }
    setIsFlipped(!isflipped)
  }
  
  return (
    <div className="card" onClick={() => handleCardClick(id)}>
      <div className={cardContentClassNames}>
        <div className="card__face card__face--front"></div>
        <div className="card__face card__face--back">{cardContent}</div>
      </div>
    </div>
  )
}

export default Card