import React from "react";
import "./Hero.css";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import KishoreCV from "./KishoreCV.pdf";

const Hero = () => {
  return (
    <div className="hero" id="heroHome">
      <section className="hero-left">
        <div className="hero-name">
          <span>Moshi Moshi</span>
          <span>Kishore Mongar :)</span>
          <span>
            I am Kishore Mongar and currently building projects based on React
            JS. Techs that I use to create the projects are HTML5, CSS3,
            JAVASCRIPT & REACT JS
          </span>
        </div>
        <button className="button hero-btn">
          <a href={KishoreCV} download="Kishore CV">
            Resume
          </a>
        </button>
        <section className="hero-icons">
          <a
            href="https://www.linkedin.com/in/kishore-mongar/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/fushigina-Shinobi"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.instagram.com/thequirkybrat/"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram />
          </a>
        </section>
      </section>
      <section className="hero-right">
        <img src={require("./Hero.png")} alt="Kishore Mongar" />
      </section>
    </div>
  );
};

export default Hero;
