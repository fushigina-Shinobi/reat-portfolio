import React, { useState, useRef } from 'react';
import './ContactForm.css';
import ContactImg from './ContactImg.svg';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const form = useRef();
  const [sent, setSent] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        'luffypirate',
        'monkeydluffy',
        form?.current,
        'l6nyxn0E2Xik-P-Rh'
      )
      .then(
        (result) => {
          console.log(result.text);
          setSent(true);
          form?.current?.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className='contact-container' id='contact'>
      <div className='form-left'>
        <article className='main-hero'>
          <img src={ContactImg} alt='Contact' />
        </article>
      </div>
      <section className='form-right'>
        <div className='contact-header'>
          <span>Contact Me</span>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type='text'
            name='userName'
            className='user'
            placeholder='Full Name'
          />
          <input
            type='email'
            name='userEmail'
            className='user'
            placeholder='Email'
          />
          <textarea name='message' className='user' placeholder='Message' />
          <input type='submit' value='Send' className='submitBtn' />
          <span
            style={{
              fontWeight: 'bold',
              fontSize: '1.5rem',
              color: 'lightgreen',
            }}
          >
            {sent && 'Message Sent!'}
          </span>
        </form>
      </section>
    </div>
  );
};

export default ContactForm;
