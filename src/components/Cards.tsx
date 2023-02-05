import SingleCard from './SingleCard';
import { useGlobalContext } from '../context';

const Cards = () => {
  const { cards } = useGlobalContext();
  return (
    <main className='cards-main'>
      {cards.map((card) => {
        return <SingleCard key={card.id} {...card} />;
      })}
    </main>
  );
};

export default Cards;
