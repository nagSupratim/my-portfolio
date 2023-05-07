import React from 'react';
import CardTemplate from '../../ui/CardTemplate/CardTemplate';
import Heading from '../../ui/Heading/Heading';
import classes from './AboutMe.module.css';
import myImage from '../../../assets/images/myImages/my-photo.png';

const skillsData = [
  { name: 'html5', class: 'bx bxl-html5' },
  { name: 'css3', class: 'bx bxl-css3' },
  { name: 'js', class: 'bx bxl-javascript' },
  { name: 'bootstrap', class: 'bx bxl-bootstrap' },
  { name: 'react', class: 'bx bxl-react bx-flip-vertical' },
  { name: 'node', class: 'bx bxl-nodejs' },
  { name: 'github', class: 'bx bxl-github' },
];

const AboutMe = () => {
  return (
    <div className="my-5 bg-white" id="about">
      <CardTemplate className="p-3 pb-0">
        <div className="row">
          <div className="col-12 col-md-6">
            <div className={classes.myImage}>
              <img src={myImage} alt="" className="w-100" />
            </div>
          </div>
          <div className="col-12 col-md-6 d-flex align-items-center">
            <div className="d-flex flex-column pe-3">
              <section>
                <Heading className="mb-5">About Me</Heading>
                <p className="text-green-1">
                  I'm a Software Engineer, UI developer with {((Date.now() - 1569868200000)/(1000 * 60 * 60 * 24 * 30 * 12)).toFixed(1)} years of
                  professional experience. I'm interested in all kinds of web
                  app development, but my major focus is on designing web,
                  mobile & tablet interfaces. I also have skills in other fields
                  like API Development, Azure Administration, PowerApps
                  Development.
                </p>
                <p className="text-green-1">
                  I am a self-taught programmer, and I enjoy turning complex
                  problems into simple, beautiful and intuitive designs. When
                  I'm not justifying flex contents, you'll find me playing
                  football, watching sitcom or somewhere lost in the mountains
                  😃
                </p>
              </section>
              <div className="my-4">
                <CardTemplate className="p-2">
                  <h6 className="text-green-1 ms-2">
                    Languages/Library/Technology
                  </h6>
                  <div className="d-flex w-100 justify-content-around fs-1 mt-3">
                    {skillsData.map((data, i) => (
                      <i className={data.class} key={i}></i>
                    ))}
                  </div>
                </CardTemplate>
              </div>
            </div>
          </div>
        </div>
      </CardTemplate>
    </div>
  );
};

export default AboutMe;
