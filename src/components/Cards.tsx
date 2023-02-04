import { useState } from 'react';
import { initialState } from '../constants/data';
import SingleCard from './SingleCard';

const Cards = () => {
  const [cards, setCards] = useState(initialState);

  return (
    <div>
      <main>
        {cards.map((card) => {
          return <SingleCard key={card.id} {...card} />;
        })}
      </main>
    </div>
  );
};

export default Cards;
