import { useGlobalContext } from '../context';

const Modal = () => {
  const { currentScore, resetGameHandler } = useGlobalContext();
  return (
    <div className="modal">
      <h3 className="you-win-p">Game over!</h3>
      <p className="your-score">Your score: {currentScore} </p>
      <button className="btn" onClick={resetGameHandler}>
        Play again?
      </button>
    </div>
  );
};

export default Modal;
