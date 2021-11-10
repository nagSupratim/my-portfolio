import React from 'react';
import classes from './PeoplesCard.module.css';
const PeoplesCard = ({ data }) => {
  return (
    <div
      className={`${classes.people} d-flex flex-column justify-content-center align-items-center my-5`}
    >
      <img src={data.prof} alt={data.user} />
      <a href={data.linkedin} target="_blank" rel="noreferrer" className="mt-2">
        <h4>{data.user}</h4>
      </a>
      <h6>{data.org}</h6>
      <section className="mt-3 px-5">
        <p>{data.rec}</p>
      </section>
    </div>
  );
};

export default PeoplesCard;
