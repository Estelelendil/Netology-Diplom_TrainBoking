import classNames from "classnames";
import React from "react";

export default function SeatsFirst({ seats, choosen, seatChoose }) {
  const seatClass = classNames({
    "w-[34px] h-[70px] bg-white  border-1 border-gray rounded-[3px] font-semibold text-center": true,
  });
  const seatChoosenClass = classNames({
    "w-[34px] h-[70px] bg-[#FFD98F] border-2 border-orange text-orange rounded-[3px] font-semibold text-center": true,
  });
  console.log("CHOSEN IN SEAT", choosen);
  return (
    <div className="flex h-[70px] mt-[5px] ml-[5px] w-full">
      {seats.map((item) => {
        if (item.index % 2 === 0) {
          return (
            <div className="flex mr-[4px]">
              <div className="w-[34px] h-[70px] bg-white/60"></div>
              <div
                className={item.index === choosen ? seatChoosenClass : seatClass}
                onClick={() => {
                  console.log(item.index === choosen);
                  seatChoose(item.index);
                }}
              >
                {item.index}
              </div>
            </div>
          );
        } else {
          return (
            <div
              onClick={() => {
                console.log(item.index === choosen);
                seatChoose(item.index);
              }}
              className={item.index === choosen ? seatChoosenClass : seatClass}
            >
              {item.index}
            </div>
          );
        }
      })}
    </div>
  );
}
