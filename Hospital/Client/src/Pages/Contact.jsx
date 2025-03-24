import React from "react";
import { Link } from "react-router-dom";
const Contact = () => {
  return (
    <section id="contact">
      <div className="text_head">
        <h2>Contact Us</h2>
      </div>
      <div className="contact-container">
        <div className="contact-image">
          <img src="/assets/contact_doc.jpg" alt="Contact Us" />
        </div>

        <div className="contact-info">
          <p>
            <strong>Address:</strong> 123 Health Street, Wellness City, 45678
          </p>
          <p>
            <strong>Phone:</strong> (123) 456-7890
          </p>
          <p>
            <strong>Email:</strong> contact@hospital.com
          </p>
          <Link className="careers-btn">Careers</Link>
        </div>
      </div>
    </section>
  );
};
export default Contact;
