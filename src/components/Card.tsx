import React from 'react';

type Props = {
  value: string;
  index: number;
  onClick: (index: number) => void;
};

const Card: React.FC<Props> = ({ value, index, onClick }) => {
  const handleClick = () => {
    onClick(index);
  };

  return (
    <div className="card" onClick={handleClick}>
      <div className="card-content">{value}</div>
    </div>
  );
};

export default Card;
