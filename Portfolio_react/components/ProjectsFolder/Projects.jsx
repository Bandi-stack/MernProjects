import React, { useRef } from "react";
import "./Projects.css";
import ProjectsCard from "./ProjectsCard/ProjectsCard";
import { PROJECTS_DETAILS } from "../../utils/data";
import Slider from "react-slick";
import "material-symbols";

const Projects = () => {
  const sliderRef = useRef();
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const slideRight = () => {
    sliderRef.current.slickNext();
  };
  const slideLeft = () => {
    sliderRef.current.slickPrev();
  };
  return (
    <section className="projects-container">
      <h5>Projects</h5>
      <div className="projects-content">
        <div className="arrow-right" onClick={slideRight}>
          <span class="material-symbols-outlined">chevron_right</span>
        </div>
        <div className="arrow-left" onClick={slideLeft}>
          <span class="material-symbols-outlined">chevron_left</span>
        </div>
        <Slider ref={sliderRef} {...settings}>
          {PROJECTS_DETAILS.map((item) => (
            <ProjectsCard key={item.title} details={item} />
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Projects;
