import React from 'react';
import { useGlobalContext } from '../context';

const Modal = () => {
  const { currentScore } = useGlobalContext();
  return (
    <div className="modal">
      <h3 className="you-win-p">Game over!</h3>
      <p className="your-score">Your score: {currentScore} </p>
    </div>
  );
};

export default Modal;
