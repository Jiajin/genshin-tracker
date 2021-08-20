import React from "react";
import "./Character.css";

const Character = ({ id, name, checked, handleClick }) => {
  return (
    <div
      className={`character__container ${checked ? "checked" : ""}`}
      onClick={() => handleClick(id, !checked)}
      data-testid="pref-checkbox"
    >
      {checked ? <span>✓ </span> : <span>X </span>}
      {name}
    </div>
  );
};

export default Character;
