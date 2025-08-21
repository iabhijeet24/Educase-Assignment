import React from "react";
import "./Card.css";

const Card = ({ img, content, name, email }) => {
  return (
    <div className="card">
      <div className="card-header">
        <div>
          <img className="card-img" src={img} alt={name} />
        </div>
        <div className="card-user">
          <div className="card-name">{name}</div>
          <div className="card-email">{email}</div>
        </div>
      </div>
      <div className="card-content">{content}</div>
    </div>
  );
};

export default Card;
