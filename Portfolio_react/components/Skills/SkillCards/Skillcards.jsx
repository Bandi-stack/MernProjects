import React from "react";
import "./Skillcards.css";
const Skillcards = ({ title, iconUrl, isActive, onClick }) => {
  return (
    <div
      className={`skills-card ${isActive ? "active" : ""}`}
      onClick={() => onClick()}
    >
      <div className="skill-icon">
        <img className="skill-icon-image" src={iconUrl} alt={title} />
      </div>
      <span>{title}</span>
    </div>
  );
};

export default Skillcards;
