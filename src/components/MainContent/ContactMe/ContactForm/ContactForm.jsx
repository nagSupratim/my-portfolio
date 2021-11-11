import React, { useState } from 'react';
import { Alert, Button, Form, Spinner } from 'react-bootstrap';
import classes from './ContactForm.module.css';
import emailjs from 'emailjs-com';

const options = {
  serviceID: 'service_q1277yb',
  templateID: 'template_qybprq9',
  userID: 'user_eCbyaKdI7O2Thyq8nA2Uk',
};

const ContactForm = (props) => {
  const [isSending, setIsSending] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [resStatus, setResStatus] = useState('');

  const sendMessageHandler = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .sendForm(options.serviceID, options.templateID, e.target, options.userID)
      .then((result) => {
        setResStatus(result.status);
        e.target.reset();
      })
      .catch((error) => setResStatus(error.status))
      .finally(() => {
        setShowAlert(true);
        setTimeout(() => setShowAlert(false), 10000);
        setIsSending(false);
      });
  };

  return (
    <Form
      className={`${props.className} ${classes.form} position-relative`}
      onSubmit={sendMessageHandler}
    >
      <Form.Group className="mb-3">
        <Form.Label>
          First & Last Name <span>*</span>
        </Form.Label>
        <Form.Control type="text" name="name" required />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>
          Phone number <span>*</span>
        </Form.Label>
        <Form.Control type="tel" name="phone" required />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>
          Email address <span>*</span>
        </Form.Label>
        <Form.Control type="email" name="email" required />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>
          Message <span>*</span>
        </Form.Label>
        <Form.Control
          as="textarea"
          placeholder="Leave your message here"
          style={{ height: '100px' }}
          name="message"
          required
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Button variant="warning" className="px-5" type="submit">
          {isSending ? (
            <>
              <Spinner
                as="span"
                animation="border"
                size="sm"
                role="status"
                aria-hidden="true"
                variant="light"
              />
              &nbsp;&nbsp;Sending ....
            </>
          ) : (
            'Send Message'
          )}
        </Button>
      </Form.Group>
      <Form.Group className="position-absolute bottom-2 left-0">
        {showAlert && (
          <Alert
            variant={resStatus === 200 ? 'success' : 'danger'}
            onClose={() => setShowAlert(false)}
            dismissible
          >
            {resStatus === 200
              ? 'Thanks for contacting 😃, I will get back to you asap!'
              : 'Something Went Wrong! ☹️'}
          </Alert>
        )}
      </Form.Group>
    </Form>
  );
};

export default ContactForm;
