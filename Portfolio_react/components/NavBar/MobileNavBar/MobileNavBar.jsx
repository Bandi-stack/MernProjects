import React from "react";
import "./MobileNavBar.css";
const MobileNavBar = ({ isOpen, toggleMenu }) => {
  return (
    <>
      <div
        className={`mobile-menu ${isOpen ? "active" : ""}`}
        onClick={toggleMenu}
      >
        <div className="mobile-menu-container">
          <img
            className="logo"
            src="./assets/images/image_test.jpg"
            alt="TARAK"
          />
          <ul>
            <li>
              <a href="" className="nav-item">
                Home
              </a>
            </li>
            <li>
              <a href="" className="nav-item">
                Skills
              </a>
            </li>
            <li>
              <a href="" className="nav-item">
                Works
              </a>
            </li>
            <li>
              <a href="" className="nav-item">
                Contact Me
              </a>
            </li>
            <button className="contact-btn" onClick={() => {}}>
              Hire me
            </button>
          </ul>
        </div>
      </div>
    </>
  );
};

export default MobileNavBar;
