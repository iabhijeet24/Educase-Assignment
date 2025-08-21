import React from "react";
import Card from "../components/Card";
import "./Account.css";


const Account = () => {
  return (
    <div className="account-wrapper">
      <div className="account-heading">Account Settings</div>

      <Card
        img="https://randomuser.me/api/portraits/women/44.jpg"
        name="Marry Doe"
        email="marryDoe@gmail.com"
        content="Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      />
    </div>
  );
};

export default Account;
