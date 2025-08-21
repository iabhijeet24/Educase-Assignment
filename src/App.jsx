import React from "react";
import { Outlet } from "react-router-dom";
import "./App.css";

const App = () => {
  return (
    <div className="app-container">
      <div className="app-inner">
        <Outlet />
      </div>
    </div>
  );
};

export default App;
