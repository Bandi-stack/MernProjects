import React from "react";
import "./ContactMe.css";
import ContactInfoCard from "./ContactInfoCard/ContactInfoCard";
import ContactForm from "./ContactForm/ContactForm";

const ContactMe = () => {
  return (
    <section className="contact-container">
      <h5>Contact Me</h5>
      <div className="contact-content">
        <div style={{ flex: 1 }}>
          <ContactInfoCard
            iconUrl="./assets/images/mail.png"
            text="undamatlatarak1978@gmail.com"
          />
          <ContactInfoCard
            iconUrl="./assets/images/mail.png"
            text="bandi-stack@github.com"
          />
          <ContactInfoCard
            iconUrl="./assets/images/mail.png"
            text="tarak1978raj@insta.com"
          />
        </div>
        <div style={{ flex: 1 }}>
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
