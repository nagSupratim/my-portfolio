import React from 'react';
import { Button, Form } from 'react-bootstrap';
import Heading from '../../ui/Heading/Heading';
import classes from './ContactMe.module.css';

const ContactMe = () => {
  const onSendMessage = (e) => {
    e.preventDefault();
  };
  return (
    <div className={`${classes.contact} pb-5 mb-5`} id="contact">
      <div className="d-flex justify-content-center mb-5">
        <Heading>Contact Me</Heading>
      </div>
      <div className={`${classes.details} row`}>
        <div className="col-12 col-lg-6 d-flex bg-white flex-column justify-content-center align-items-center p-5">
          <h3 className="text-start w-100 text-green-1">Let's Connect</h3>
          <p className="pt-2 pb-3">
            I would absolutely love to hear from you. If you have any queries
            you can email or call me, here goes the contact information 📞
          </p>
          <div className="d-flex flex-column w-100">
            <section className="d-flex justify-content-start">
              <a href="mailto:supratimnag1997@gmail.com">
                <i className="bx bx-envelope"></i>
              </a>
              <span>supratimnag1997@gmail.com</span>
            </section>
            <section className="d-flex justify-content-start">
              <a href="tel:+918981640457">
                <i className="bx bxs-phone-call"></i>
              </a>
              <span>+91 89816 40457</span>
            </section>
            <section className="d-flex justify-content-start">
              <a
                href="https://www.google.com/maps/d/viewer?f=q&hl=en&geocode&ie=UTF8&msa=0&ll=12.900951695519925%2C77.68759929999997&spn=0.234187%2C0.291824&z=14&source=embed&mid=1k35Ia3iDr0SyJaMdv2N6c2_AUvw"
                target="_blank"
              >
                <i className="bx bx-location-plus"></i>
              </a>
              <span>Bengaluru, India</span>
            </section>
          </div>
        </div>
        <div className="col-12 col-lg-6 bg-tertiary-color p-5">
          <Form className="px-lg-5" onSubmit={onSendMessage}>
            <Form.Group className="mb-3">
              <Form.Label>
                First & Last Name <span className={classes.red}>*</span>
              </Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>
                Phone number <span className={classes.red}>*</span>
              </Form.Label>
              <Form.Control type="tel" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>
                Email address <span className={classes.red}>*</span>
              </Form.Label>
              <Form.Control type="email" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>
                Message <span className={classes.red}>*</span>
              </Form.Label>
              <Form.Control
                as="textarea"
                placeholder="Leave a comment here"
                style={{ height: '100px' }}
              />
            </Form.Group>
            <Button variant="warning" className="px-5" type="submit">
              Send Message
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
