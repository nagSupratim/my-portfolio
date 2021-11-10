import React from 'react';
import classes from './CardTemplate.module.css';

const CardTemplate = (props) => {
  return (
    <div className={`${classes.card} ${props.className}`}>{props.children}</div>
  );
};

export default CardTemplate;
