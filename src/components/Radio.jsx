import React from "react";
import "./Radio.css";

const Radio = ({ values, name, label }) => {
  return (
    <div className="radio-wrapper">
      <p className="radio-label">{label}</p>
      <div className="radio-options">
        {values.map((val, idx) => (
          <label key={idx} className="radio-option">
            <input type="radio" name={name} value={val.toLowerCase()} />
            {val}
          </label>
        ))}
      </div>
    </div>
  );
};

export default Radio;
