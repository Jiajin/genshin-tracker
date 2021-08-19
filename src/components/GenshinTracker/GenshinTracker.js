import React, { useState } from "react";

import "./GenshinTracker.css";
import GenshinRegion from "./GenshinRegion";

const GenshinTracker = ({ userPref }) => {
  const weekdays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

  const [currWeekday, setCurrWeekday] = useState(weekdays[0]);

  //Setting region data for both regions
  const [regionOneData, setRegionOneData] = useState({
    chars: userPref.filter(
      (item) =>
        item.region === "mondsteadt" &&
        item.day.includes(weekdays[0]) &&
        item.checked === true
    ),
    book: userPref.filter(
      (item) => item.region === "mondsteadt" && item.day.includes(weekdays[0])
    )[0].book,
    region: "mondsteadt",
  });

  const [regionTwoData, setRegionTwoData] = useState({
    chars: userPref.filter(
      (item) =>
        item.region === "liyue" &&
        item.day.includes(weekdays[0]) &&
        item.checked === true
    ),
    book: userPref.filter(
      (item) => item.region === "liyue" && item.day.includes(weekdays[0])
    )[0].book,
    region: "liyue",
  });

  const weekdayClickHandler = (day) => {
    console.log(day);
    setCurrWeekday(day); //for selector
    //Set indiv region data
    setRegionOneData({
      ...regionOneData,
      chars: userPref.filter(
        (item) =>
          item.region === "mondsteadt" &&
          item.day.includes(day) &&
          item.checked === true
      ),
    });
    setRegionTwoData({
      ...regionTwoData,
      chars: userPref.filter(
        (item) =>
          item.region === "liyue" &&
          item.day.includes(day) &&
          item.checked === true
      ),
    });
  };
  console.log(regionOneData);

  return (
    <div>
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
