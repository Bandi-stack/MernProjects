import React from "react";
import "./ProjectsCard.css";
const ProjectsCard = ({ details }) => {
  return (
    <div className="project-description-card">
      <h6>{details.title}</h6>
      <div className="project-date">{details.date}</div>
      <ul>
        {details.description.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};
//we are using react-slick for carousel effect so we need to install it
export default ProjectsCard;
