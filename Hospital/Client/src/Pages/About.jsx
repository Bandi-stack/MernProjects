import React from "react";

const About = () => {
  return (
    <section id="about-us">
      <div className="text_head">
        {" "}
        <h2>Our Vision</h2>
      </div>
      <div className="about-us-container">
        <div className="about-us-image">
          <img src="/assets/doctors_about.jpg" alt="Hospital Image" />
        </div>
        <div className="about-us-vision">
          <p>
            we strive to be a beacon of health and wellness in our community.
            Our vision is to deliver world-class healthcare services, offering
            compassionate care and cutting-edge medical treatments. We aim to
            foster a healthier future by focusing on patient-centered care,
            innovation, and a commitment to excellence in every aspect of our
            operations. We believe in creating an environment where everyone,
            from our patients to our staff, thrives. Through collaboration,
            compassion, and expertise, we aim to redefine healthcare standards
            for the betterment of all.
          </p>
        </div>
      </div>

      {/* Mission Cards */}
      <div className="mission-cards">
        <div className="mission-card">
          <h5>Compassionate Care</h5>
          <p>
            We are committed to providing patient-centered care with a focus on
            safety, comfort, and compassion.
          </p>
        </div>
        <div className="mission-card">
          <h5>Medical Innovation</h5>
          <p>
            We strive to innovate in medical practices, utilizing advanced
            technology for better treatment outcomes.
          </p>
        </div>
        <div className="mission-card">
          <h5>Community Health</h5>
          <p>
            Our goal is to serve the community with accessible, affordable, and
            high-quality healthcare services.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
