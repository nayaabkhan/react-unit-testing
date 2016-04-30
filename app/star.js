import React from 'react';

const Star = ({ isActive }) => {
  const classNames = ['star'];
  const activeClass = 'star--is-active';

  if (isActive) {
    classNames.push(activeClass);
  }

  return <span className={classNames.join(' ')}>★</span>;
};

export default Star;
