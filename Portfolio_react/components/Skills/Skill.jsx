import React, { useState } from "react";
import "./Skills.css";
import Skillcards from "./SkillCards/Skillcards";
import { SKILLS } from "../../utils/data";
import SkillsInfoCard from "./SkillsInfoCard/SkillsInfoCard";
const Skill = () => {
  const [selectedSkills, setSelectedSkills] = useState(SKILLS[0]);
  const handleSelectSkill = (data) => {
    setSelectedSkills(data);
  };
  return (
    <section className="skills-container">
      <h5>Technical Proficiency</h5>
      <div className="skills-contents">
        <div className="skills">
          {SKILLS.map((item) => (
            <Skillcards
              key={item.title}
              iconUrl={item.icon}
              title={item.title}
              isActive={selectedSkills.title === item.title}
              onClick={() => {
                handleSelectSkill(item);
              }}
            /> 
          ))}
        </div>
        <div className="skills-info">
          <SkillsInfoCard
            heading={selectedSkills.title}
            skills={selectedSkills.skills}
          />
        </div>
      </div>
    </section>
  );
};

export default Skill;
