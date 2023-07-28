import classNames from "classnames";
import React from "react";
import SeatsFirst from "./Seats/SeatsFirst";
import SeatsSecond from "./Seats/SeatsSecond";
import SeatsThird from "./Seats/SeatsThird";
import SeatsFourth from "./Seats/SeatsFourth";

export default function CoachMap({ seats, number, type }) {
  const typeClass = classNames({
    "  bg-no-repeat w-full h-[250px] bg-contain relative": true,
    "bg-[url('img/coachMap_second.png')]": type === "second",
    "bg-[url('img/coachMap_first.png')]": type === "first",
    "bg-[url('img/coachMap_third.png')]": type === "third",
    "bg-[url('img/coachMap_fourth.png')]": type === "fourth",
  });
  return (
    <div className="p-8">
      <p>{type}</p>
      <p>{number}</p>
      <div className={typeClass}>
        <div className="absolute top-[30px] left-[151px] bg-gray/25 w-[855px] h-[140px]">
          {type === "first" && <SeatsFirst seats={seats} />}
          {type === "second" && <SeatsSecond seats={seats} />}
          {type === "third" && <SeatsThird seats={seats} />}
          {type === "fourth" && <SeatsFourth seats={seats} />}
        </div>
      </div>
    </div>
  );
}
