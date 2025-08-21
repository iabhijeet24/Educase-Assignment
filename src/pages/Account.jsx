import React from "react";
import Card from "../components/Card";
import "./Account.css";


const Account = () => {
  return (
    <div className="account-wrapper">
      <div className="account-heading">Account Settings</div>

      <Card
        img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfeO52olh7y7C0q00TYK22OfojrZuzcCL7-A&s"
        name="Marry Doe"
        email="marry@gmail.com"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      />
    </div>
  );
};

export default Account;
