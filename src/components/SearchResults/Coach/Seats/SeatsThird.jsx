import classNames from "classnames";
import React from "react";

export default function SeatsThird({ seats, choosen, seatChoose }) {
  const seatClass = classNames({
    "w-[34px] h-[35px] bg-white border-1 border-gray rounded-[3px] font-semibold text-center hover:cursor-pointer": true,
  });
  const seatChoosenClass = classNames({
    "w-[34px] h-[35px] bg-[#FFD98F] border-2 border-orange text-orange rounded-[3px] font-semibold text-center hover:cursor-pointer": true,
  });
  const seatSideClass = classNames({
    "w-[51px] h-[30px] bg-white border-1 border-gray rounded-[3px] font-semibold text-center hover:cursor-pointer": true,
  });
  const seatSideChoosenClass = classNames({
    "w-[51px] h-[30px] bg-[#FFD98F] border-2 border-orange text-orange rounded-[3px] font-semibold text-center hover:cursor-pointer": true,
  });
  return (
    <div className="h-[75px]  flex flex-wrap   mt-[5px] ml-[5px]">
      {seats.map((item, index) => {
        if (index % 2 === 0 && index < 32) {
          return (
            <div className={(item.index + 1) % 4 === 0 ? "flex flex-col ml-[34px] mr-[4px]" : "flex flex-col"}>
              <div
                className={choosen && choosen.includes(item.index) ? seatChoosenClass : seatClass}
                onClick={() => {
                  seatChoose(item.index);
                }}
              >
                {item.index}
              </div>
              {seats[index + 1] && (
                <div
                  className={choosen && choosen.includes(item.index + 1) ? seatChoosenClass : seatClass}
                  onClick={() => {
                    seatChoose(item.index + 1);
                  }}
                >
                  {seats[index + 1].index}
                </div>
              )}
            </div>
          );
        } else if (index >= 32) {
          return (
            <div className={index % 2 === 0 ? " mt-[30px]  " : " mt-[30px] mr-[4px] "}>
              <div
                className={choosen && choosen.includes(item.index) ? seatSideChoosenClass : seatSideClass}
                onClick={() => {
                  seatChoose(item.index);
                }}
              >
                {item.index}
              </div>
            </div>
          );
        } else {
          return null;
        }
      })}
    </div>
  );
}
