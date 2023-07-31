import classNames from "classnames";
import React from "react";
import SeatsFirst from "./Seats/SeatsFirst";
import SeatsSecond from "./Seats/SeatsSecond";
import SeatsThird from "./Seats/SeatsThird";
import SeatsFourth from "./Seats/SeatsFourth";

export default function CoachMap({ seats, number, type, choosen, seatChoose }) {
  const typeClass = classNames({
    "  bg-no-repeat w-full h-[250px] bg-contain relative": true,
    "bg-[url('img/coachMap_second.png')]": type === "second",
    "bg-[url('img/coachMap_first.png')]": type === "first",
    "bg-[url('img/coachMap_third.png')]": type === "third",
    "bg-[url('img/coachMap_fourth.png')]": type === "fourth",
  });
  return (
    <div className="p-8">
      <div className={typeClass}>
        <div className="w-[40px] h-[30px] bg-black text-white absolute text-center left-[48px] top-[0]">{number}</div>
        <div className="absolute top-[30px] left-[151px] bg-gray/25 w-[855px] h-[140px]">
          {type === "first" && <SeatsFirst seats={seats} seatChoose={seatChoose} choosen={choosen} />}
          {type === "second" && <SeatsSecond seats={seats} seatChoose={seatChoose} choosen={choosen} />}
          {type === "third" && <SeatsThird seats={seats} seatChoose={seatChoose} choosen={choosen} />}
          {type === "fourth" && <SeatsFourth seats={seats} seatChoose={seatChoose} choosen={choosen} />}
        </div>
      </div>
    </div>
  );
}
