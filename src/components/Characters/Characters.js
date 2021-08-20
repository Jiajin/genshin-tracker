import React, { useState, useEffect } from "react";
import "./Characters.css";

const Characters = () => {
  const [charList, setCharList] = useState([
    "Please wait, retrieving characters...",
  ]);
  const [activeChar, setActiveChar] = useState({});

  useEffect(() => {
    getCharList();
  }, []);

  const getCharList = async () => {
    try {
      const response = await fetch("https://api.genshin.dev/characters");
      const charArray = await response.json();

      setCharList(charArray);
    } catch (error) {
      console.log(error);
    }
  };

  const onCharClickHandler = async (name) => {
    try {
      const response = await fetch(
        `https://api.genshin.dev/characters/${name}`
      );
      const singleChar = await response.json();
      setActiveChar(singleChar);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="parent body">
      <div>
        {activeChar.name !== undefined ? (
          <div>
            <div>{activeChar.name}</div>
            <div>
              {activeChar.vision} {activeChar.weapon} user
            </div>
            <div>
              Hails from: {activeChar.nation ? activeChar.nation : "Unknown"}
            </div>
          </div>
        ) : (
          "Click one of the characters below to see more!"
        )}
      </div>
      <div className="break"></div>
      <div className="characters__list-title">Characters List</div>
      <div className="break"></div>
      <div className="characters__list eighty-width">
        {" "}
        {charList.map((char) => (
          <div
            key={char}
            className="characters__single"
            onClick={() => onCharClickHandler(char)}
          >
            {char}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Characters;
