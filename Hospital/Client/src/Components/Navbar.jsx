import React, { useState } from "react";
import "./Navbar.css";
import MobileNavBar from "./MobileNavBar";
import { Link } from "react-router-dom";

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
          <Link className="logo_icon" to="/">
            {" "}
            <h3>Hospital</h3>
          </Link>
          <ul>
            <li>
              <Link className="nav-item" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="nav-item" to="/doctors">
                Doctors
              </Link>
            </li>
            <li>
              <Link className="nav-item" to="/about">
                About
              </Link>
            </li>
            <li>
              <Link className="nav-item" to="/contact">
                Contact
              </Link>
            </li>
            <button className="contact-btn">
              <Link className="admin_but" to="/login">
                Admin
              </Link>
            </button>
          </ul>
          <button className="menu-btn" onClick={toggleMenu}>
            <span
              className={"material-symbols-outlined"}
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
