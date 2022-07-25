import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Link } from "react-scroll";

const Navbar = () => {
  const [stickyNav, setStickyNav] = useState("");
  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);
    return () => window.removeEventListener("scroll", stickNavbar);
  }, []);

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 0 ? setStickyNav("sticky-nav") : setStickyNav("");
    }
  };
  return (
    <Router>
      <div className={`nav-container ${stickyNav}`}>
        <div className="nav-left">
          <div className="nav-name">Kishore Mongar</div>
        </div>
        <div className="nav-right">
          <div className="nav-list">
            <ul>
              <li>
                <Link
                  activeClass="active"
                  to="heroHome"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={1}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  activeClass="active"
                  to="skills"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={1}
                >
                  Skills
                </Link>
              </li>
              <li>
                <Link
                  activeClass="active"
                  to="projects"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={1}
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  activeClass="active"
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={1}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <button className="button nav-btn">Moshi</button>
        </div>
      </div>
    </Router>
  );
};

export default Navbar;
