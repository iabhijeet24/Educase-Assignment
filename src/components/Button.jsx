import React from "react";
import "./Button.css";

const Button = ({ text, disabled = false, variant }) => {
  const baseStyles = "button-base";
  const primaryStyles = "button-primary";
  const secondaryStyles = "button-secondary";
  const disabledStyles = "button-disabled";

  const appliedStyles = disabled
    ? disabledStyles
    : variant === "primary"
    ? primaryStyles
    : secondaryStyles;

  return (
    <button disabled={disabled} className={`${appliedStyles} ${baseStyles}`}>
      {text}
    </button>
  );
};

export default Button;
