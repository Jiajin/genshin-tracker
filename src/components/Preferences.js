import React, { useState } from "react";

import genshinData from "../genshin/characters";

import "./Preferences.css";
const Preferences = () => {
  const [userPref, setUserPref] = useState(
    genshinData.map((char) => {
      return { ...char, checked: false };
    })
  );
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
    <div className="parent">
      <button onClick={() => checkAll(true)}>Select All</button>
      <button onClick={() => checkAll(false)}>Unselect All</button>
      <div className="parent">
        {" "}
        {userPref.map((char) => {
          return (
            <div>
              <input
                type="checkbox"
                id={`custom-checkbox-${char.id}`}
                name={char.name}
                value={char.name}
                checked={char.checked}
                onChange={() => handleOnChange(char.id, !char.checked)}
              />
              <label for={`custom-checkbox-${char.id}`}>{char.name}</label>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Preferences;
