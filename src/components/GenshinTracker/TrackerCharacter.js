import React from "react";
const TrackerCharacter = ({ char }) => {
  return <div className={`char ${char.element}`}>{char.name}</div>;
};

export default TrackerCharacter;
