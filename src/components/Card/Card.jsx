import React from "react";
import "./Card.css";

function Card({ imageUrl, title, info, sourceLink, visitLink }) {
  return (
    <div className="card-container">
      <div className="card-header">
        <img src={imageUrl} alt={title} />
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
        <a href={visitLink} target="_blank">
          <button className="btn" type="button">
            Visit Link
          </button>
        </a>
        <a href={sourceLink} target="_blank">
          <button className="btn" type="button">
            Source Link
          </button>
        </a>
      </div>
    </div>
  );
}

export default Card;
