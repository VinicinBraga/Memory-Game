import './styles.css'

export interface CardProps {
  flipped?: boolean;
}

export function Card({ flipped = false }: CardProps) {
  const cardContentClassNames = ['card__content'];
  flipped && cardContentClassNames.push('card__content--flipped');

  return (
    <div className="card">
      <div className={cardContentClassNames.join(' ')}>
        <div className="card__face card__face--front">?</div>
        <div className="card__face card__face--back">X</div>
      </div>
    </div>
  );
}