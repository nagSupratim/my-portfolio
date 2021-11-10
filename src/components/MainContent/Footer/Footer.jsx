import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-tertiary-color d-flex justify-content-center align-content-center p-4 text-black-clr">
      &copy;{new Date().getFullYear()} Supratim Nag. All rights reserved.
    </footer>
  );
};

export default Footer;
