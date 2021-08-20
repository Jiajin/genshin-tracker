import React, { useState } from "react";
import Character from "./character/Character";

import "./Preferences.css";
const Preferences = ({ userPref, setUserPref }) => {
  const handleOnChange = (id, state) => {
    console.log(id);
    let itemIndex = userPref.findIndex((item) => item.id === id);
    let copy = [...userPref];
    copy[itemIndex].checked = state;
    setUserPref(copy);
  };

  const checkAll = (state) => {
    let copy = userPref.map((char) => {
      return { ...char, checked: state };
    });
    setUserPref(copy);
  };

  return (
    <div className="parent body">
      <button className="myButton" onClick={() => checkAll(true)}>
        Select All
      </button>
      <button className="myButton" onClick={() => checkAll(false)}>
        Unselect All
      </button>

      <div className="break"></div>
      <div className="eighty-width parent">
        {userPref.map((char) => {
          return (
            <Character {...char} handleClick={handleOnChange} />
            // <div>
            //   <input
            //     type="checkbox"
            //     id={`custom-checkbox-${char.id}`}
            //     name={char.name}
            //     value={char.name}
            //     checked={char.checked}
            //     onChange={() => handleOnChange(char.id, !char.checked)}
            //   />
            //   <label for={`custom-checkbox-${char.id}`}>{char.name}</label>
            // </div>
          );
        })}
      </div>
    </div>
  );
};

export default Preferences;
