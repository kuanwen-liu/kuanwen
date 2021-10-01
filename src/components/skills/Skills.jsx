import React from "react";

import "./Skills.css";
import html5 from "../../assets/html-5.svg";
import css3 from "../../assets/css-3.svg";
import reactIcon from "../../assets/react.svg";
import reduxIcon from "../../assets/redux.svg";
import js from "../../assets/js.svg";

const Skills = () => {
  return (
    <div className="skills">
      <div className="skills-container">
        <h1>SKILLS</h1>
        <div className="icons">
          <div className="icon">
            <img src={html5} alt="html" />
            <h3>HTML</h3>
          </div>
          <div className="icon">
            <img src={css3} alt="css" />
            <h3>CSS</h3>
          </div>
          <div className="icon">
            <img src={js} alt="javascript" />
            <h3>JavaScript</h3>
          </div>
          <div className="icon">
            <img src={reactIcon} alt="react" />
            <h3>React</h3>
          </div>
          <div className="icon">
            <img src={reduxIcon} alt="redux" />
            <h3>Redux</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
