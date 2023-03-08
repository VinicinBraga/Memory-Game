import Card from './Card/Card';
import './Cards.css'

const shuffle = (array: any[]) => {
  let currentIndex = array.length,randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const shuffledNumbers = shuffle(numbers);


const Cards: React.FC = () => {
  return (
    <div className='cards-container'>
      {shuffledNumbers.map((num: number) => (
        <Card num={num} key={num} />
      ))}
    </div>
  );
};

export default Cards;
