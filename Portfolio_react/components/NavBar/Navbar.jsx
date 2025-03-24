import React, { useState } from "react";
import "./Navbar.css";
import MobileNavBar from "./MobileNavBar/MobileNavBar";
import "material-symbols";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <>
      <MobileNavBar isOpen={openMenu} toggleMenu={toggleMenu} />
      <nav className="nav-wrapper">
        <div className="nav-content">
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
          <button class="menu-btn" onClick={toggleMenu}>
            <span
              class={"material-symbols-outlined"}
              style={{ fontSize: "1rem" }}
            >
              {openMenu ? "close" : "menu"}
            </span>
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
