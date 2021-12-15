import React from 'react';
import CardTemplate from '../../../ui/CardTemplate/CardTemplate';
import classes from './Project.module.css';

const Project = ({ data, src }) => {
  return (
    <div className={`col-4 ${classes.project} mb-3`}>
      <CardTemplate>
        <img src={src} alt="" />
      </CardTemplate>
      <div className={classes.actions}>
        <a href={data.hosturl} target="_blank" rel="noreferrer">
          <i className="bx bx-globe"></i>
        </a>
        <a href={data.repourl} target="_blank" rel="noreferrer">
          <i className="bx bxl-github"></i>
        </a>
      </div>
    </div>
  );
};

export default Project;
