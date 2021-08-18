import React, { useState } from "react";
import genshinData from "../genshin/characters";
import "./GenshinTracker.css";
const GenshinTracker = () => {
  const singleRegion = genshinData.filter(
    (item) => item.region === "mondsteadt" && item.book === "freedom"
  );
  return (
    <div className="parent">
      <div className="region">{singleRegion[0].region}</div>
      <div className="break"></div>
      <div className="characters">
        {singleRegion.map((char) => (
          <div>
            {char.name} {char.id}
          </div>
        ))}
      </div>
    </div>
  );
};
export default GenshinTracker;
