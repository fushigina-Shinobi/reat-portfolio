import React from "react";
import "./Projects.css";
import CardList from "../Card/CardList";

const Projects = () => {
  return (
    <div className="projects-container" id="projects">
      <section className="projects-title">
        <span>My Projects</span>
      </section>
      <section className="projects-card">
        <CardList />
      </section>
    </div>
  );
};

export default Projects;

/*import React from "react";
import "./Projects.css";
import Card from "../Card/Card";

const Projects = () => {
  return (
    <div className="projects-container">
      <section className="projects-left">
        <span>My Projects</span>
        <span>Heart</span>
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea alias et
          architecto sint! Modi eos quae voluptate ut perferendis. Rerum rem
          eaque reiciendis officia nulla deleniti dolorem provident officiis
        </span>
      </section>
      <section className="projects-right">
        I am right side
      </section>
    </div>
  );
};

export default Projects;*/
