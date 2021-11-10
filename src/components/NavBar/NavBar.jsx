import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import classes from './NavBar.module.css';
import { Link, animateScroll as scroll } from 'react-scroll';

const navData = [
  { display: 'Home', link: 'home' },
  { display: 'About', link: 'about' },
  { display: 'Portfolio', link: 'portfolio' },
  { display: 'Resume', link: 'resume' },
  { display: 'Contact', link: 'contact' },
];
const NavBar = () => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  return (
    <Navbar
      bg="primary-color"
      expand="lg"
      className={`sticky-md-top ${classes.nav}`}
    >
      <Container>
        <Navbar.Brand
          className={`${classes.navHeader} px-4`}
          onClick={scrollToTop}
        >
          Supratim Nag
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className={`${classes.btn} mx-4`}
        />
        <Navbar.Collapse
          id="basic-navbar-nav"
          className="justify-content-end align-items-start"
        >
          <Nav className="mx-lg-5 px-lg-5">
            {navData.map((data, i) => (
              <Link
                className={`${classes.navLink} px-4 py-4 py-lg-0`}
                key={i}
                activeClass={classes.active}
                offset={-80}
                smooth={true}
                to={data.link}
                duration={300}
                spy={true}
              >
                {data.display}
              </Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
