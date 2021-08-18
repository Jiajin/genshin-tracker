import React, { useState } from "react";

import "./GenshinTracker.css";
import genshinData from "../../genshin/characters";
import GenshinRegion from "./GenshinRegion";

const GenshinTracker = () => {
  //todo: filter by day
  const weekdays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
  const { currWeekday, setCurrWeekday } = useState(weekdays[0]);
  const { regionOneData, setRegionOneData } = useState(
    genshinData.filter(
      (item) => item.region === "mondsteadt" && item.day.includes(weekdays[0])
    )
  );
  const weekdayClickHandler = (day) => {
    //console.log(regionOneData);
    console.log(
      genshinData.filter(
        (item) => item.region === "mondsteadt" && item.day.includes("mon")
      )
    );
  };
  const mondsteadt = genshinData.filter(
    (item) => item.region === "mondsteadt" && item.book === "freedom"
  );
  const liyue = genshinData.filter(
    (item) => item.region === "liyue" && item.book === "gold"
  );

  return (
    <div>
      <div className="parent">
        {weekdays.map((weekday) => (
          <div
            key={weekday} //this is not used except prevent compiler warnings
            className="weekdays"
            onClick={() => weekdayClickHandler(weekday)}
          >
            {weekday}
          </div>
        ))}
      </div>
      <GenshinRegion singleRegion={mondsteadt} />
      <GenshinRegion singleRegion={liyue} />
    </div>
  );
};
export default GenshinTracker;
