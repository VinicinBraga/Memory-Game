import './Card.css'
import ReactSvg from './src/assets/react.svg';

type CardProps = {
  value: number;
  onClick: () => void;
};

function Card({ value, onClick }: CardProps) {
  return (
    <div className="card" onClick={onClick}>
      <div className="card-front">
        <img src={ReactSvg} alt='image'></img>
      </div>
      <div className="card-back">
        {value}
      </div>
    </div>
  );
}

export default Card;
