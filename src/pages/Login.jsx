import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import Button from "../components/ui/Button";
import Heading from "../components/ui/Heading";
import Input from "../components/ui/Input";
import Paragraph from "../components/ui/Paragraph";
import "./Login.css";

const Login = () => {
  const [disabled, setDisabled] = useState(true);
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (user && password) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [user, password]);

  const handleUser = (e) => {
    setUser(e.target.value);
  };

  const handlePass = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className="login-wrapper">
      <div className="login-header">
        <Heading content="Signin to your PopX account" />
        <Paragraph content="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
      </div>
      <div className="login-form">
        <Input
          onChange={handleUser}
          placeholder="Enter your email"
          label="Email"
          type="email"
        />
        <Input
          onChange={handlePass}
          placeholder="Enter your password"
          label="Password"
          type="password"
        />
        <Link to="/account">
          <Button disabled={disabled} variant="primary" text="Login" />
        </Link>
      </div>
    </div>
  );
};

export default Login;
