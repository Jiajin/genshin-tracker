import React from "react";

import TrackerCharacter from "./TrackerCharacter";
const GenshinRegion = ({ singleRegion }) => {
  return (
    <div className="parent">
      <div className="region">
        {singleRegion[0].region}: {singleRegion[0].book}
      </div>
      <div className="break"></div>
      <div className="characters">
        {singleRegion.map((char) => (
          <TrackerCharacter char={char}></TrackerCharacter>
        ))}
      </div>
    </div>
  );
};

export default GenshinRegion;
