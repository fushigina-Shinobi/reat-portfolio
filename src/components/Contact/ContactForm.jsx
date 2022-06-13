import React from "react";
import "./ContactForm.css";
import ContactImg from "./ContactImg.svg";

const ContactForm = () => {
  return (
    <div className="contact-container" id="contact">
      <div className="form-left">
        <section className="main-hero">
          <img src={ContactImg} alt="Contact" />
        </section>
      </div>
      <section className="form-right">
        <div className="contact-header">
          <span>Contact Me</span>
        </div>

        <form>
          <input
            type="text"
            name="userName"
            className="user"
            placeholder="Full Name"
          />
          <input
            type="email"
            name="userEmail"
            className="user"
            placeholder="Email"
          />
          <textarea name="message" className="user" placeholder="Message" />
          <input type="submit" value="Send" className="submitBtn" />
        </form>
      </section>
    </div>
  );
};

export default ContactForm;
