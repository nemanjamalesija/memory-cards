import React from 'react';
import { singleCard } from '../types/types';

const SingleCard = (props: singleCard) => {
  const { id, name, image, checked } = props;
  return (
    <article>
      <header>
        <img src={image} alt="name" />
      </header>
      <h3 className="heading-single-card">{name}</h3>
    </article>
  );
};

export default SingleCard;
