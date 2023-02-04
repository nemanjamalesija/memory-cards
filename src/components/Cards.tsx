import { useState } from 'react';
import { initialState } from '../constants/data';
import SingleCard from './SingleCard';

const Cards = () => {
  const [cards, setCards] = useState(initialState);

  return (
    <main>
      {cards.map((card) => {
        return <SingleCard key={card.id} {...card} />;
      })}
    </main>
  );
};

export default Cards;
