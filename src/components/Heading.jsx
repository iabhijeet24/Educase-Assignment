import React from "react";
import "./Heading.css";

const Heading = ({ content }) => {
  return (
    <h1 className="heading">
      {content}
    </h1>
  );
};

export default Heading;
