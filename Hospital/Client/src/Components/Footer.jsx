import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import "./Footer.css";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Address Section */}
        <div className="footer-address">
          <h3>Our Location</h3>
          <p>1234 Health Street, Wellness City, CA 90001</p>
          <a
            href="https://www.google.com/maps?q=1234+Health+Street+Wellness+City"
            target="_blank"
            rel="noopener noreferrer"
            className="google-map-link"
          >
            Open in Google Maps
          </a>
        </div>

        {/* Contact Section */}
        <div className="footer-contact">
          <h3>Contact Us</h3>
          <p>Phone: +1 123-456-7890</p>
          <p>Email: contact@healthcare.com</p>
        </div>

        {/* Social Media Section */}
        <div className="footer-social">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p> "&copy;" 2024 Healthcare. All rights reser .</p>
      </div>
    </footer>
  );
};

export default Footer;
