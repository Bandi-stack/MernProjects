import React from "react";
import "./ContactForm.css";
const ContactForm = () => {
  return (
    <div className="contact-form-content">
      <form action="">
        <div className="name-container">
          <input type="text" name="firstname" placeholder="First Name" />
          <input type="text" name="lastname" placeholder="Last Name" />
        </div>
        <input type="text" name="email" placeholder="email" />
        <textarea
          name="Message"
          type="text"
          placeholder="Message"
          id=""
          cols="30"
          rows="10"
        ></textarea>
        <button>Send</button>
      </form>
    </div>
  );
};

export default ContactForm;
