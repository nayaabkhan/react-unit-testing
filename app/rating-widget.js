import React from 'react';
import Star from './star';

const RatingWidget = ({ size, rating }) => {
  var starItems = [];
  for (let i = 0; i < size; i++) {
    starItems.push(
      <li key={i} className="star-item">
        <Star isActive={i < rating}/>
      </li>
    );
  }

  return (
    <ul className="rating-widget">{starItems}</ul>
  );
};

export default RatingWidget;
