import React from "react";
import "./Hero.css";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import Kishore from "./Kishore.pdf";

const Hero = () => {
  return (
    <div className="hero" id="heroHome">
      <section className="hero-left">
        <div className="hero-name">
          <span>Moshi Moshi</span>
          <span>Monkey D Luffy :)</span>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            accusamus et quo repellendus maiores, doloremque doloribus, sint
            veritatis, molestiae recusandae aperiam amet. Explicabo deserunt,
            aperiam libero nulla adipisci quia dolorem. Enim repudiandae,
            perspiciatis doloribus a eligendi rerum nesciunt ea maiores nulla
            explicabo veniam.
          </span>
        </div>
        <button className="button hero-btn">
          <a href={Kishore} download="Kishore CV">
            Resume
          </a>
        </button>
        <section className="hero-icons">
          <a href="https://www.linkedin.com/in/kishore-mongar/" target="_blank">
            <FaLinkedin />
          </a>
          <a href="https://github.com/fushigina-Shinobi" target="_blank">
            <FaGithub />
          </a>
          <a href="https://www.instagram.com/thequirkybrat/" target="_blank">
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
