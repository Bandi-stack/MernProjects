import React from "react";
import "./MobileNavBar.css";
import { Color } from "three";
import { Link } from "react-router-dom";

const MobileNavBar = ({ isOpen, toggleMenu }) => {
  return (
    <>
      <div
        className={`mobile-menu ${isOpen ? "active" : ""}`}
        onClick={toggleMenu}
      >
        <div className="mobile-menu-container">
          <h3 className="nav-item-mobile">Hospital</h3>

          <ul>
            <li>
              <Link className="nav-item nav-item-mobile" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="nav-item nav-item-mobile" to="/doctors">
                Doctors
              </Link>
            </li>
            <li>
              <Link className="nav-item nav-item-mobile" to="/about">
                About
              </Link>
            </li>
            <li>
              <Link className="nav-item nav-item-mobile" to="/contact">
                Contact
              </Link>
            </li>
            <button className="contact-btn nav-item">
              <Link to="/admin">Admin</Link>
            </button>
          </ul>
        </div>
      </div>
    </>
  );
};

export default MobileNavBar;
