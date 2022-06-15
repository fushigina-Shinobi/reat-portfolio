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
