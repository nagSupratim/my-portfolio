import React from 'react';
import Heading from '../../ui/Heading/Heading';
import myImage from '../../../assets/images/myImages/my-photo-3.png';
import classes from './Resume.module.css';
import CardTemplate from '../../ui/CardTemplate/CardTemplate';
import DetailsCard from './DetailsCard/DetailsCard';

const experienceDetails = [
  {
    title: 'Senior Software Engineer - I',
    org: 'MakeMyTrip India Private Limited',
    year: 'Apr 2022 - Present',
  },
  {
    title: 'Software Engineer',
    org: 'Wipro, Bangalore',
    year: 'Jan 2020 - Apr 2022',
  },
  {
    title: 'Web Developer - Trainee',
    org: 'Wipro, Hyderabad',
    year: 'Oct 2019 - Dec 2019',
  },
];
const educationDetails = [
  {
    title: 'MAKAUT/WBUT, Kolkata',
    org: 'ECE, Bachelor of technology',
    year: '2015 - 2019',
  },
];

const Resume = () => {
  return (
    <div
      className="d-flex flex-column align-items-center mt-5 pb-5"
      id="resume"
    >
      <Heading className=" mb-5">Resume</Heading>
      <div className="row w-100">
        <div className="col-12 col-md-8">
          <div className={`${classes.section} mb-5`}>
            <h3 className="text-heading">Work Experience</h3>
            <section>
              {experienceDetails.map((data, i) => (
                <DetailsCard data={data} key={i} />
              ))}
            </section>
          </div>
          <div className={classes.section}>
            <h3 className="text-heading">Education</h3>
            <section>
              {educationDetails.map((data, i) => (
                <DetailsCard data={data} key={i} />
              ))}
            </section>
          </div>
        </div>
        <div className="col-12 col-md-4 d-flex align-items-center mt-5 mt-lg-0">
          <CardTemplate className={classes.imageContainer}>
            <img src={myImage} alt="" />
          </CardTemplate>
        </div>
      </div>
    </div>
  );
};

export default Resume;
