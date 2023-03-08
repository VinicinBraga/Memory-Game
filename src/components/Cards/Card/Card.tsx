import './Card.css'
interface CardProps {
  num: number;
}

const Card: React.FC<CardProps> = ({ num }) => {
  return (
    <div className='card'>
      <h1>{num}</h1>
    </div>
  );
};

export default Card;