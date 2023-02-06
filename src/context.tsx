import React, { useContext, useState, useEffect } from 'react';

import { initialState } from './constants/initialState';
import './index.css';

//////////////context
const AppContext = React.createContext(initialState);

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, setState] = useState(initialState);

  const changeStatusHandler = (id: number) => {
    const newCards = state.cards.map((card) => {
      if (card.id === id) {
        // if card clicked first time, update score + 1
        if (card.checked === false) {
          setState((prev) => {
            return { ...prev, currentScore: state.currentScore + 1 };
          });
        }
        // if clicked second time, end game
        if (card.checked === true) {
          setState((prev) => {
            return { ...prev, modalOpen: true };
          });
        }
        // else update card status to clicked
        return { ...card, checked: true };
      } else return card;
    });

    // shuffle cards
    const shuffledCards = newCards
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);

    setState((prev) => {
      return { ...prev, cards: shuffledCards };
    });
  };

  useEffect(() => {
    const winnerChecker = () => {
      const isWinner = state.cards.every((card) => card.checked === true);
      if (isWinner)
        setState((prev) => {
          return { ...prev, modalOpen: true };
        });

      // update score
      setState((prev) => {
        let newHighScore = state.highScore;

        if (state.currentScore > state.highScore)
          newHighScore = state.currentScore;

        return { ...prev, highScore: newHighScore };
      });
    };

    winnerChecker();
  }, [state.cards, state.currentScore, state.highScore]);

  const resetGameHandler = () => {
    setState((prev) => {
      return {
        ...prev,
        currentScore: 0,
        modalOpen: false,
        cards: initialState.cards,
      };
    });
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        changeStatusHandler,
        resetGameHandler,
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
