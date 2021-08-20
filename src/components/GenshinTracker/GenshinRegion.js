import React from "react";

import TrackerCharacter from "./TrackerCharacter";
const GenshinRegion = ({ singleRegion }) => {
  return (
    <div className="region-parent parent eighty-width">
      <div className="region">
        {singleRegion.region}: {singleRegion.book}
      </div>
      <div className="break"></div>
      <div className="region-chars">
        {singleRegion.chars.length === 0 ? (
          <div>No selected characters for this region today!</div>
        ) : (
          singleRegion.chars.map((char) => (
            <TrackerCharacter key={char.id} char={char}></TrackerCharacter>
          ))
        )}
      </div>
    </div>
  );
};

export default GenshinRegion;
