
import './styles.css'

interface CardProps {
  flipped?: boolean
}

function Card({ flipped }: CardProps) {
  
  const cardContentClassNames = ['card__content']
  flipped&& cardContentClassNames.push('card__content--flipped');
  
  return (
    <div className="card">
      <div className={cardContentClassNames.join(' ')}>
        <div className="card__face card__face--front">Front</div>
        <div className="card__face card__face--back">Back</div>
      </div>
    </div>
  )
}

export default Card