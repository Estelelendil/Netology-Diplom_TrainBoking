import classNames from "classnames";
import React from "react";

export default function CoachMap({ seats, number, type }) {
  const typeClass = classNames({
    "  bg-no-repeat w-full h-[250px] bg-contain": true,
    "bg-[url('img/coachMap_second.png')]": type === "second",
    "bg-[url('img/coachMap_first.png')]": type === "first",
    "bg-[url('img/coachMap_third.png')]": type === "third",
    "bg-[url('img/coachMap_fourth.png')]": type === "fourth",
  });
  return (
    <div className="p-8">
      {/* <p>{type}</p> */}
      <div className={typeClass}></div>
    </div>
  );
}
