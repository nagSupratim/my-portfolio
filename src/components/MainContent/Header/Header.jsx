import React from 'react';
import { Button } from 'react-bootstrap';
import classes from './Header.module.css';
import myImage from '../../../assets/images/myImages/my-photo.png';
import { animateScroll as scroll } from 'react-scroll';

const cvUrl =
  "https://firebasestorage.googleapis.com/v0/b/personal-db-8a6c3.appspot.com/o/Supratim's%20Resume.pdf?alt=media&token=af6dd510-6897-4cd3-a84e-05fd72722f11";

const Header = () => {
  return (
    <div className={`${classes.header} p-3 p-lg-5 pb-0 pb-lg-0`} id="home">
      <div className="container-fluid-sm container-md">
        <div className="row">
          <div className="col-12 col-lg-6 d-flex flex-column">
            <div className=" fs-1">
              <div className="d-flex flex-column flex-lg-row text-primary-yellow fw-normal">
                <div>Hi,&nbsp;</div>
                <div>I am Supratim Nag</div>
              </div>
              <span className="text-white fw-bold">A Front-end Developer</span>
            </div>
            <div className="text-light pt-5 fs-6">
              Get ready to turn ideas into reality
            </div>
            <div>
              <div className="">
                <Button
                  className={`${classes.btnHire} m-3 ms-0 px-5 py-2`}
                  onClick={() => scroll.scrollToBottom()}
                >
                  Hire Me
                </Button>
                <Button
                  className={`my-4 px-5 py-2 ${classes.btnResume}`}
                  onClick={() => window.open(cvUrl, '_blank')}
                >
                  Get Resume
                </Button>
              </div>
              <div className={classes.links}>
                <a
                  href="https://www.linkedin.com/in/nagsupratim/"
                  target="_blank"
                >
                  <i className="bx bxl-linkedin"></i>
                </a>
                <a
                  href="https://github.com/nagSupratim/pig-game"
                  target="_blank"
                >
                  <i className="bx bxl-github"></i>
                </a>
                <a href="mailto:supratimnag1997@gmail.com" target="_blank">
                  <i className="bx bx-mail-send"></i>
                </a>
              </div>
            </div>
          </div>
          <div
            className={`col-12 col-lg-6 d-flex justify-content-center ${classes.myImage}`}
          >
            <img src={myImage} alt="supratim-nag" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
