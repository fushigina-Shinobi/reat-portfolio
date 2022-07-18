import React from "react";
import "./Skills.css";
import { TbBrandJavascript, TbBrandCss3, TbBrandHtml5 } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import ProgressBar from "./ProgressBar";

const Skills = () => {
  return (
    <div className="skills-container" id="skills">
      <section className="skills-left">
        <span>My Skill-Set</span>
        <span>Full-Time Learner</span>
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea alias et
          architecto sint! Modi eos quae voluptate ut perferendis. Rerum rem
          eaque reiciendis officia nulla deleniti dolorem provident officiis
        </span>
      </section>
      <section className="skills-right">
        <div className="skills-bar">
          <div className="progress-1">
            <TbBrandHtml5 className="circle" />
            <ProgressBar bgcolor="orange" progress="11rem" height={10} />
          </div>
          <div className="progress-2">
            <TbBrandCss3 className="circle" />
            <ProgressBar bgcolor="red" progress="11rem" height={10} />
          </div>
          <div className="progress-3">
            <TbBrandJavascript />
            <ProgressBar bgcolor="#99ff66" progress="10rem" height={10} />
          </div>
          <div className="progress-4">
            <FaReact />
            <ProgressBar bgcolor="#ff00ff" progress="10rem" height={10} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
