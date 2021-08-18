import React, { useState } from "react";

import "./GenshinTracker.css";
import genshinData from "../../genshin/characters";
import GenshinRegion from "./GenshinRegion";

const GenshinTracker = () => {
  const mondsteadt = genshinData.filter(
    (item) => item.region === "mondsteadt" && item.book === "freedom"
  );
  const liyue = genshinData.filter(
    (item) => item.region === "liyue" && item.book === "gold"
  );
  return (
    <div>
      <GenshinRegion singleRegion={mondsteadt} />
      <GenshinRegion singleRegion={liyue} />
    </div>
  );
};
export default GenshinTracker;
