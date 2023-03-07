import React from 'react';

interface Props {
score: number;
}

function ScoreBoard({ score }: Props) {
return <div className="score">Score: {score}</div>;
}

export default ScoreBoard;