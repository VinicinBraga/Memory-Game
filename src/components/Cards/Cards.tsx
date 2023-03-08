import Card from './Card/Card';
import './Cards.css'

const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const Cards: React.FC = () => {
  return (
    <div className='cards-container'>
      {numbers.map((num: number) => (
        <Card num={num} key={num} />
      ))}
    </div>
  );
};

export default Cards;
