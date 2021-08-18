import React, { useState } from "react";

import "./GenshinTracker.css";
import genshinData from "../../genshin/characters";
import GenshinRegion from "./GenshinRegion";

const GenshinTracker = ({ field }) => {
  console.log(field);
  const weekdays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
  // const [currWeekday, setCurrWeekday] = useState({
  //   weekday: weekdays[0],
  //   selected: true,
  // });
  const [currWeekday, setCurrWeekday] = useState(weekdays[0]);
  const [regionOneData, setRegionOneData] = useState(
    genshinData.filter(
      (item) => item.region === "mondsteadt" && item.day.includes(weekdays[0])
    )
  );
  const [regionTwoData, setRegionTwoData] = useState(
    genshinData.filter(
      (item) => item.region === "liyue" && item.day.includes(weekdays[0])
    )
  );

  const weekdayClickHandler = (day) => {
    console.log(day);
    setCurrWeekday(day); //for selector
    //Set indiv region data
    setRegionOneData(
      genshinData.filter(
        (item) => item.region === "mondsteadt" && item.day.includes(day)
      )
    );
    setRegionTwoData(
      genshinData.filter(
        (item) => item.region === "liyue" && item.day.includes(day)
      )
    );
  };

  // const seeData = () => {
  //   console.log(currWeekday);
  //   console.log(regionOneData[0].day);
  // };
  return (
    <div>
      {/* <button onClick={seeData}>Test</button> */}
      <div className="parent">
        {weekdays.map((weekday) => (
          <div
            key={weekday} //this is not used except prevent compiler warnings
            className={`weekdays ${weekday === currWeekday ? "selected" : ""}`}
            onClick={() => weekdayClickHandler(weekday)}
          >
            {weekday}
          </div>
        ))}
      </div>
      <GenshinRegion singleRegion={regionOneData} />
      <GenshinRegion singleRegion={regionTwoData} />
    </div>
  );
};
export default GenshinTracker;
