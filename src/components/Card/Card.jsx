import React from "react";
import "./Card.css";

function Card({ imageUrl, title, info, button, btn }) {
  return (
    <div className="card-container">
      <div className="card-header">
        <img src={imageUrl} alt="" />
      </div>
      <div className="card-content">
        <div className="card-title">
          <h4>{title}</h4>
        </div>
        <div className="card-info">
          <p>{info}</p>
        </div>
      </div>
      <div className="card-footer">
        <button className="btn">{button}</button>
        <button className="btn">{btn}</button>
      </div>
    </div>
  );
}

export default Card;
