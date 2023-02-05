import React from 'react';
import { useGlobalContext } from '../context';

const HighScore = () => {
  const { currentScore, highScore } = useGlobalContext();
  return (
    <section className="section section-high-score">
      <p className="score score-current">Current score: {currentScore}</p>
      <p className="score score-high">High score: {highScore}</p>
    </section>
  );
};

export default HighScore;
