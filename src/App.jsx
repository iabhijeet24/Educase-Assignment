import React from "react";
import { Outlet } from "react-router";
import "./App.css";

const App = () => {
  return (
    <div className="app-container">
      <div className="app-wrapper">
        <Outlet />
      </div>
    </div>
  );
};

export default App;
