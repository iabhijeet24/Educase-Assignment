import React from "react";
import "./Input.css";

const Input = ({ label, placeholder, type, required = false, onChange }) => {
  return (
    <div className="input-wrapper">
      <label className="input-label">
        {label}
        {required && <span className="required">*</span>}
      </label>
      <input
        onChange={onChange}
        required={required}
        className="input-field"
        placeholder={placeholder}
        type={type}
      />
    </div>
  );
};

export default Input;
