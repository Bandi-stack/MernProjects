import React from "react";
import "./Hero.css";
const Hero = () => {
  return (
    <section className="hero-container">
      <div className="hero-content">
        <h2>Building Digital Experineces that inspire</h2>
        <p>
          Passionate frontend developer | Transforming Idea into Seamless and
          Visually Stunning Web Solutions
        </p>
      </div>
      <div className="hero-img">
        <img className="hero-image" src="./assets/images/profile1.png" alt="" />
      </div>
    </section>
  );
};

export default Hero;
