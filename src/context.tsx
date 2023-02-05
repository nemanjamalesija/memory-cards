import React, { useContext, useState, useEffect } from 'react';

import { initialState } from './constants/data';
import './index.css';

//////////////context
const AppContext = React.createContext(initialState);

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, setState] = useState(initialState);

  const changeStatusHandler = (id: number) => {
    const newCards = state.cards.map((card) => {
      if (card.id === id) {
        if (card.checked === false) {
          setState((prev) => {
            return { ...prev, currentScore: state.currentScore + 1 };
          });
        }
        if (card.checked === true) {
          setState((prev) => {
            return { ...prev, modalOpen: true };
          });
        }
        return { ...card, checked: true };
      } else return card;
    });

    const shuffledCards = newCards
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);

    setState((prev) => {
      return { ...prev, cards: shuffledCards };
    });
  };

  const winnerChecker = () => {
    const isWinner = state.cards.every((card) => card.checked === true);
    if (isWinner)
      setState((prev) => {
        return { ...prev, modalOpen: false };
      });

    setState((prev) => {
      let newHighScore = state.highScore;

      if (state.currentScore > state.highScore)
        newHighScore = state.currentScore;

      return { ...prev, highScore: newHighScore };
    });
  };

  useEffect(() => {
    winnerChecker();
  }, [state.cards]);

  return (
    <AppContext.Provider
      value={{
        ...state,
        changeStatusHandler,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
