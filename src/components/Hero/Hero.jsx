import React from "react";
import "./Hero.css";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
// import HeroImg "./Hero.png";

const Hero = () => {
  return (
    <div className="hero">
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
        <button className="button hero-btn">Resume</button>
        <section className="hero-icons">
          <FaLinkedin />
          <FaGithub />
          <FaInstagram />
        </section>
      </section>
      <section className="hero-right">
        <img src={require("./Hero.png")} alt="Kishore Mongar" />
      </section>
    </div>
  );
};

export default Hero;
