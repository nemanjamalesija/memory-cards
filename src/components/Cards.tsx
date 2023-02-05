import { useEffect, useState } from 'react';
import { initialState } from '../constants/data';
import SingleCard from './SingleCard';

const Cards = () => {
  const [cards, setCards] = useState(initialState);
  const [modalOpen, setModalOpen] = useState(false);

  const changeStatusHandler = (id: number) => {
    const newCards = cards.map((card) => {
      if (card.id === id) {
        return { ...card, checked: true };
      } else return card;
    });

    const shuffledCards = newCards
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);

    setCards(shuffledCards);
  };

  return (
    <main>
      {cards.map((card) => {
        return (
          <SingleCard
            key={card.id}
            {...card}
            changeStatusHandler={changeStatusHandler}
          />
        );
      })}
    </main>
  );
};

export default Cards;
