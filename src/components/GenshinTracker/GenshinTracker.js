import React, { useState } from "react";

import "./GenshinTracker.css";
import GenshinRegion from "./GenshinRegion";

const GenshinTracker = ({ userPref }) => {
  const weekdays = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
  const regionOne = "mondsteadt";
  const regionTwo = "liyue";

  const today = new Date().getDay();

  const [currWeekday, setCurrWeekday] = useState(weekdays[today]);

  const getCheckedCharsByRegionAndDay = (data, region, day) => {
    return data.filter(
      (item) =>
        item.region === region &&
        item.day.includes(day) &&
        item.checked === true
    );
  };
  //Returns string for book
  const getBookByRegionAndDay = (data, region, day) => {
    return data.filter(
      (item) => item.region === region && item.day.includes(day)
    )[0].book;
  };

  //Setting region data for both regions
  const [regionOneData, setRegionOneData] = useState({
    chars: getCheckedCharsByRegionAndDay(userPref, regionOne, weekdays[today]),
    book: getBookByRegionAndDay(userPref, regionOne, weekdays[today]),
    region: regionOne,
  });

  const [regionTwoData, setRegionTwoData] = useState({
    chars: getCheckedCharsByRegionAndDay(userPref, regionTwo, weekdays[today]),
    book: getBookByRegionAndDay(userPref, regionTwo, weekdays[today]),
    region: regionTwo,
  });

  const weekdayClickHandler = (day) => {
    console.log(day);
    setCurrWeekday(day); //for selector
    //Set indiv region data
    setRegionOneData({
      ...regionOneData,
      chars: getCheckedCharsByRegionAndDay(userPref, regionOne, day),
      book: getBookByRegionAndDay(userPref, regionOne, day),
    });
    setRegionTwoData({
      ...regionTwoData,
      chars: getCheckedCharsByRegionAndDay(userPref, regionTwo, day),
      book: getBookByRegionAndDay(userPref, regionTwo, day),
    });
  };

  return (
    <div>
      <div className="parent">
        <div className="parent eighty-width">
          {weekdays.map((weekday) => (
            <div
              key={weekday} //this is not used except prevent compiler warnings
              className={`weekdays ${
                weekday === currWeekday ? "selected" : ""
              }`}
              onClick={() => weekdayClickHandler(weekday)}
            >
              {weekday}
            </div>
          ))}
        </div>
      </div>
      <div className="parent">
        <GenshinRegion singleRegion={regionOneData} />
        <GenshinRegion singleRegion={regionTwoData} />
      </div>
    </div>
  );
};
export default GenshinTracker;
