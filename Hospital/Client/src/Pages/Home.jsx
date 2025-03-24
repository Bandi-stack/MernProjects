import React from "react";
import { Link } from "react-router-dom";
import Doctors from "./Doctors";
import DoctorGroup from "/assets/doctor_group.png";
import Search from "../Components/Search";
import Doctor1 from "/assets/doctor_home.png";
const Home = () => {
  return (
    <>
      <section className="home">
        <div className="home_text">
          <h4>
            Book your appointment today for expert care tailored to your needs.
          </h4>
          <p>
            Schedule your appointment with ease and access personalized care
            from our expert team. Your health and convenience are our top
            priorities
          </p>
          <button className="appointment_button"> Book appointment</button>
        </div>
        <div className="home_img">
          <img src={DoctorGroup} alt="" />
        </div>
      </section>

      <section className="list">
        <Search />
      </section>
      <section className="doctors-section">
        <h5>Meet Our Expert Doctors</h5>
        <p className="doctors-section-p">
          Our team of highly qualified and experienced doctors is here to
          provide the best care and guidance for your health and well-being.
        </p>
        <Doctors />
        <div className="more">
          <Link className="more_button" to="/doctors">
            more
          </Link>{" "}
        </div>
      </section>
      <section className="book_appointement">
        <div className="appoint_container">
          <div className="appoint_text">
            <p>Want to book an appointment with Our Trusted Doctors?</p>
            <button className="appointment_button"> Book appointment</button>
          </div>
          <div className="appoint_img">
            <img src={Doctor1} alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
