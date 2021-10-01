import React from "react";

import Objective from "./objective/Objective";
import Skills from "./skills/Skills";
import Projects from "./projects/Projects";
import "./main.css";

const Main = () => {
  return (
    <div className="main">
      <Objective />
      <Skills />
      <Projects />
    </div>
  );
};

export default Main;
