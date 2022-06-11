import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="nav-left">
        <div className="nav-name">Kishore Mongar</div>
      </div>
      <div className="nav-right">
        <div className="nav-list">
          <ul>
            <li>Home</li>
            <li>Skills</li>
            <li>Projects</li>
            <li>Contact</li>
          </ul>
        </div>
        <button className="button nav-btn">Sign Up</button>
      </div>
      <div className="nav-line">
        <hr />
      </div>
    </div>
  );
};

export default Navbar;
