import React from 'react';
import Card from './Card';

type Props = {
  cards: string[];
  onCardClick: (index: number) => void;
};

type State = {
  flipped: boolean[];
};

class Board extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      flipped: new Array(props.cards.length).fill(false),
    };
  }

  handleClick(index: number) {
    const { flipped } = this.state;
    const { onCardClick } = this.props;

    flipped[index] = true;
    this.setState({ flipped });

    onCardClick(index);
  }

  render() {
    const { cards } = this.props;
    const { flipped } = this.state;

    return (
      <div className="board">
        {cards.map((value, index) => (
          <Card
            key={index}
            value={flipped[index] ? value : ''}
            index={index}
            onClick={(i: number) => this.handleClick(i)}
          />
        ))}
      </div>
    );
  }
}

export default Board;
