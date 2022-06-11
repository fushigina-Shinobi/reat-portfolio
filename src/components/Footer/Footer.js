import React from "react";
import "./Footer.css";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer-container">
      <section className="footer-left">
        <section className="footer-icons">
          <FaLinkedin style={{ color: "#0072b1" }} />
          <FaGithub style={{ color: "#000000" }} />
          <FaInstagram
            style={{
              color: "#ffffff",
              backgroundColor: "#f09433",
              background:
                "linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)",
              borderRadius: "0.8rem",
            }}
          />
        </section>
        <section className="footer-right">
          <div>
            <span className="footer-name">
              &copy; Kishore Mongar {new Date().getFullYear()}
            </span>
          </div>
        </section>
      </section>
    </footer>
  );
};

export default Footer;
