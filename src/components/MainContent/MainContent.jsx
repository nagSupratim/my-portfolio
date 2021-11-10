import React from 'react';
import AboutMe from './AboutMe/AboutMe';
import ContactMe from './ContactMe/ContactMe';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Portfolio from './Portfolio/Portfolio';
import Resume from './Resume/Resume';
import Testimonials from './Testimonials/Testimonials';

const MainContent = () => {
  return (
    <div className="bg-secondary-color">
      <Header />
      <div className="container">
        <AboutMe />
        <Portfolio />
        <Resume />
        <Testimonials />
        <ContactMe />
      </div>
      <Footer />
    </div>
  );
};

export default MainContent;
