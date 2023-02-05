import React from 'react';
import { useGlobalContext } from '../context';
import { singleCard } from '../types/types';

const SingleCard = (props: singleCard) => {
  const { id, name, image, checked } = props;
  const { changeStatusHandler } = useGlobalContext();
  return (
    <article onClick={() => changeStatusHandler(id)}>
      <header className="image-container">
        <img src={image} alt="name" />
      </header>
      <h3 className="heading-single-card">{name}</h3>
    </article>
  );
};

export default SingleCard;
