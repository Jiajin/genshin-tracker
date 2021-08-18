import React, { useState } from "react";

import genshinData from "../genshin/characters";

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
  return (
    <div>
      {userPref.map((char) => {
        return (
          <div>
            {" "}
            <input
              type="checkbox"
              id={`custom-checkbox-${char.id}`}
              name={char.name}
              value={char.name}
              checked={char.checked}
              onChange={() => handleOnChange(char.id, !char.checked)}
            />
            <div>{char.name}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Preferences;
