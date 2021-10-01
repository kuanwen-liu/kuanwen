import React from "react";

import Card from "./Card";
import "./Projects.css";
import crwEcommerce from "../../assets/crwn-e-commerce.jpg";
import natours from "../../assets/natours.jpg";
import natoursNode from "../../assets/natours-node.jpg";

const Projects = () => {
  return (
    <div className="projects-container">
      <div className="project-title">
        <h1>PROJECTS</h1>
      </div>
      <div className="projects">
        <Card>
          <div>
            <img src={crwEcommerce} alt="E-commerce" />
          </div>
          <div className="description">
            <h3>E-Commerce Website</h3>
            <p>
              An e-commerce site utilizing React and Redux for certain states
              and actions. User authentication with firebase database.
            </p>
          </div>
          <div className="links">
            <a href="https://crwn-clothing-styles.herokuapp.com/">
              Visit Website
            </a>
            <a href="https://github.com/kuanwen-liu/crwn-clothing">
              Github Repo
            </a>
          </div>
        </Card>
        <Card>
          <div>
            <img src={natours} alt="Sass" />
          </div>
          <div className="description">
            <h3>Tourist Website</h3>
            <p>
              A responsive tourist website using HTML & SASS with some
              animations.
            </p>
          </div>
          <div className="links">
            <a href="https://kuanwen-liu.github.io/natours-sass/">
              Visit Website
            </a>
            <a href="https://github.com/kuanwen-liu/natours-sass">
              Github Repo
            </a>
          </div>
        </Card>
        <Card>
          <div>
            <img src={natoursNode} alt="Node" />
          </div>
          <div className="description">
            <h3>Tourist Website with Node</h3>
            <p>
              A responsive tourist website using Node.js, Express, MongoDB and
              Mongoose.
            </p>
          </div>
          <div className="links">
            <a href="https://github.com/kuanwen-liu/natours">Github Repo</a>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Projects;
