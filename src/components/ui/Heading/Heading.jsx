import React from 'react';
import classes from './Heading.module.css';

const Heading = (props) => {
  return (
    <h2 className={`${classes.heading} ${props.className}`}>
      {props.children}
    </h2>
  );
};

export default Heading;
