import React from 'react';
import Heading from '../../ui/Heading/Heading';
import Project from './Project/Project';

import imageBlog from '../../../assets/images/projects/blog-app.png';
import imageForkify from '../../../assets/images/projects/forkify-recipe-app.png';
import imageDigitalClock from '../../../assets/images/projects/digital-clock.png';
import imageTodoApp from '../../../assets/images/projects/todo-app.png';
import imageCrmAdmin from '../../../assets/images/projects/crm-admin.png';
import imageWeatherApp from '../../../assets/images/projects/weather-app.png';
import imageMaptyApp from '../../../assets/images/projects/mapty-app.png';
import imageBackroadsTour from '../../../assets/images/projects/backroads-tour.png';

const portfolioData = [
  {
    name: 'blog-app',
    hosturl: 'https://nagsupratim-blog-app.netlify.app/',
    repourl: 'https://github.com/nagSupratim/blog-app',
  },
  {
    name: 'forkify-recipe-app',
    hosturl: 'https://forkify-nagsupra.netlify.app/',
    repourl: 'https://github.com/nagSupratim/forkify-recipe-app',
  },
  {
    name: 'crm-admin',
    hosturl: 'https://nagcrm-admin.netlify.app/',
    repourl: 'https://github.com/nagSupratim/crm-admin',
  },
  {
    name: 'digital-clock',
    hosturl: 'https://nagsupra-prep-elev.github.io/05-digital-clock/',
    repourl: 'https://github.com/nagsupra-prep-elev/05-digital-clock',
  },
  {
    name: 'todo-app',
    hosturl: 'https://nagsupra-prep-elev.github.io/04-todo-app/',
    repourl: 'https://github.com/nagsupra-prep-elev/04-todo-app',
  },
  {
    name: 'backroads-tour',
    hosturl: 'https://nagsupratim.github.io/backroads-tour/',
    repourl: 'https://github.com/nagSupratim/backroads-tour',
  },
  {
    name: 'mapty-app',
    hosturl: 'https://mapty-nag.netlify.app/',
    repourl: 'https://github.com/nagSupratim/mapty-app',
  },
  {
    name: 'weather-app',
    hosturl: 'https://nagsupra-wather-app.herokuapp.com/',
    repourl: 'https://github.com/nagSupratim/weather-app',
  },
];

const portfolioImages = [
  imageBlog,
  imageForkify,
  imageCrmAdmin,
  imageDigitalClock,
  imageTodoApp,
  imageBackroadsTour,
  imageMaptyApp,
  imageWeatherApp,
];

const Portfolio = () => {
  return (
    <div className="d-none d-md-block container" id="portfolio">
      <div className="d-flex justify-content-center mb-5">
        <Heading>My Portfolio</Heading>
      </div>
      <div className="row">
        {portfolioData.map((data, i) => (
          <Project key={i} data={data} src={portfolioImages[i]} />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
