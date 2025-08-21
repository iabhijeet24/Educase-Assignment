import React from "react";
import Button from "../components/Button";
import Heading from "../components/Heading";
import Paragraph from "../components/Paragraph";
import { Link } from "react-router-dom";
import "./Welcome.css";

const Home = () => {
  return (
    <div className="home-wrapper">
      <div className="home-header">
        <Heading content="Welcome to PopX" />
        <Paragraph content="lorem ipsum dolor sit amet, consectetur adipiscing elit" />
      </div>
      <div className="home-actions">
        <Link to="/signup">
          <Button variant="primary" text="Create Account" />
        </Link>
        <Link to="/login">
          <Button variant="secondary" text="Already Registered? Login" />
        </Link>
      </div>
    </div>
  );
};

export default Home;
