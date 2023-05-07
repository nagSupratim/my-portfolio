import React from "react";
import { Button } from "react-bootstrap";
import classes from "./Header.module.css";
import { animateScroll as scroll } from "react-scroll";

const cvUrl = "https://drive.google.com/file/d/1pQkCh43Ejx4FeoNv832cNh1IeRWh7If9/view?usp=share_link";

const Header = () => {
  return (
    <div className={`${classes.header} p-3 p-lg-5`} id="home">
      <div className="container-fluid-sm container-md">
        <div className="row">
          <div className="col-12 col-lg-6 d-flex flex-column">
            <div className=" fs-1">
              <div className="d-flex flex-column flex-lg-row text-primary-yellow fw-normal">
                <div>Hi,&nbsp;</div>
                <div>I am Supratim Nag</div>
              </div>
              <span className="text-white fw-bold">A Web Developer</span>
            </div>
            <div className="text-light pt-5 fs-6">Get ready to turn ideas into reality</div>
            <div>
              <div className="">
                <Button className={`${classes.btnHire} m-3 ms-0 px-5 py-2`} onClick={() => scroll.scrollToBottom()}>
                  Hire Me
                </Button>
                <Button className={`my-4 px-5 py-2 ${classes.btnResume}`} onClick={() => window.open(cvUrl, "_blank")}>
                  Get Resume
                </Button>
              </div>
              <div className={classes.links}>
                <a href="https://www.linkedin.com/in/nagsupratim/" target="_blank" rel="noreferrer">
                  <i className="bx bxl-linkedin"></i>
                </a>
                <a href="https://github.com/nagSupratim" target="_blank" rel="noreferrer">
                  <i className="bx bxl-github"></i>
                </a>
                <a href="mailto:supratimnag1997@gmail.com" target="_blank" rel="noreferrer">
                  <i className="bx bx-mail-send"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
