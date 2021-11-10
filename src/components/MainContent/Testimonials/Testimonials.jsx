import React from 'react';
import CardTemplate from '../../ui/CardTemplate/CardTemplate';
import Heading from '../../ui/Heading/Heading';
import PeoplesCard from './PeoplesCard/PeoplesCard';
import classes from './Testimonials.module.css';

const testimonialData = [
  {
    user: 'Venkatesh H',
    linkedin: 'https://www.linkedin.com/in/venkatesh-h-03b107129/',
    org: 'Wipro',
    rec: 'Supratim is an excellent human to work with and his positive attitude supported by his compassionate nature makes him a valuable asset to any Organization. He possesses stupendous technical abilities and a thirst to upskill himself. Hope you reach the pinnacle of success!!',
    prof: 'https://media-exp1.licdn.com/dms/image/C5103AQEdRHNo9cBXVg/profile-displayphoto-shrink_800_800/0/1575108881742?e=1642032000&v=beta&t=bDErRKOUZyD-wSI6QnEESBC6aO8dU1CSGpdp4qlk8Eo',
  },
  {
    user: 'Puja Jha',
    linkedin: 'https://www.linkedin.com/in/puja-jha-b2821048/',
    org: 'Wipro',
    rec: 'Supratim is very hard-working and his ability to go out of his way to help others has made him stand out. He takes the responsibilities on his own and is always proactive.',
    prof: 'https://media-exp1.licdn.com/dms/image/C4E03AQE3pekjWURZXA/profile-displayphoto-shrink_400_400/0/1617682641570?e=1642032000&v=beta&t=lMIzTh9MqBvuGls4o4pKQOMcshac6AkXS6ZDZKBdRE8',
  },
  {
    user: 'Shaik Sha Vali S',
    linkedin: 'https://www.linkedin.com/in/shaik-sha-vali/',
    org: 'Wipro',
    rec: "Supratim is a great colleague to work with. He's always enthusiastic and passionate when it comes to learning and implementing the same in business scenarios. Hope you'll do lot more wonders in your career ahead!",
    prof: 'https://media-exp1.licdn.com/dms/image/C5103AQGZfjEHqU-6Nw/profile-displayphoto-shrink_400_400/0/1556188809130?e=1642032000&v=beta&t=-TdrbFLyUQUDXrOWyKjznrpASAnuUPGgTOYTzqCBW0U',
  },
];
const Testimonials = () => {
  return (
    <div>
      <div className="d-flex justify-content-center mb-5">
        <Heading>What People Say About Me</Heading>
      </div>
      <div className="my-5 ">
        <CardTemplate className="p-0 pt-3">
          <div className="row">
            {testimonialData.map((data, i) => {
              let cls = 'col-12 d-none d-lg-block col-lg-4';
              if (i === 0) cls = 'col-12 col-lg-4';
              return (
                <div className={cls} key={i}>
                  <PeoplesCard data={data} />
                </div>
              );
            })}
          </div>
          <footer
            className={`${classes.footer} d-flex justify-content-center align-items-center`}
          >
            <a
              href="https://www.linkedin.com/in/nagsupratim/"
              className="d-flex justify-content-center align-items-center"
            >
              <span>View more testimonials</span>&nbsp;&nbsp;
              <i className="bx bx-right-arrow-alt"></i>
            </a>
          </footer>
        </CardTemplate>
      </div>
    </div>
  );
};

export default Testimonials;
