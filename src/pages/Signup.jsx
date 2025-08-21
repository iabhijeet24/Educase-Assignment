import React from "react";
import { Link } from "react-router";
import Button from "../components/ui/Button";
import Heading from "../components/ui/Heading";
import Input from "../components/ui/Input";
import Radio from "../components/ui/Radio";
import "./Signup.css";

const Signup = () => {
  return (
    <div className="signup-wrapper">
      <div className="signup-form">
        <Heading content="Create your PopX Account" />
        <Input
          label="Full Name"
          placeholder="Enter your Full Name"
          type="text"
          required={true}
        />
        <Input
          label="Phone Number"
          placeholder="Enter your Phone number"
          type="number"
          required={true}
        />
        <Input
          label="Email Address"
          placeholder="Enter your Email"
          type="email"
          required={true}
        />
        <Input
          label="Password"
          placeholder="Enter your Password"
          type="password"
          required={true}
        />
        <Input
          label="Company Name"
          placeholder="Enter your Company Name"
          type="text"
        />
        <Radio
          name="agency"
          values={["Yes", "No"]}
          label="Are you an Agency?"
        />
      </div>
      <Link to="/account">
        <Button variant="primary" text="Create Account" />
      </Link>
    </div>
  );
};

export default Signup;
