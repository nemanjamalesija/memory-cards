import React from 'react';
import { useGlobalContext } from '../context';

const HighScore = () => {
  const { currentScore, highScore } = useGlobalContext();
  return (
    <section className="section section-high-score">
      <div className="score score-current">Current score: {currentScore}</div>
      <div className="score score-high">High score: {highScore}</div>
    </section>
  );
};

export default HighScore;
