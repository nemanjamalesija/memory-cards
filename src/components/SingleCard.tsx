import { useGlobalContext } from '../context';
import { singleCard } from '../types/types';

const SingleCard = (props: singleCard) => {
  const { id, name, image } = props;
  const { changeStatusHandler } = useGlobalContext();
  return (
    <article className='single-card' onClick={() => changeStatusHandler(id)}>
      <header className="image-container">
        <img className='single-card-image' src={image} alt="name" />
      </header>
      <h3 className="heading-single-card">{name}</h3>
    </article>
  );
};

export default SingleCard;
