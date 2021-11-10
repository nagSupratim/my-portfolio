import React from 'react';
import classes from './DetailsCard.module.css';

const DetailsCard = ({ data }) => {
  return (
    <article className={classes.details}>
      <div className="row">
        <div className="col-12 col-lg-8">
          <h4>{data.title}</h4>
          <p>{data.org}</p>
        </div>
        <div className="col-12 col-lg-4">
          <section>
            <span>{data.year}</span>
          </section>
        </div>
      </div>
    </article>
  );
};

export default DetailsCard;
