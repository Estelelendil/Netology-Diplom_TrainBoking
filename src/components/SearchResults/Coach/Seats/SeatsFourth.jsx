import classNames from "classnames";
import React from "react";

export default function SeatsFourth({ seats, choosen, seatChoose }) {
  const seatClass = classNames({
    "w-[32px] h-[21px] bg-white border-1 border-gray font-semibold rounded-[3px] text-center hover:cursor-pointer": true,
  });
  const seatChoosenClass = classNames({
    "w-[32px] h-[21px] bg-[#FFD98F] border-2 border-orange text-orange rounded-[3px] font-semibold text-center hover:cursor-pointer": true,
  });
  return (
    <div className="flex flex-wrap gap-[20px] mt-[10px] ml-[16px]">
      {
        seats.map((item, index) => {
          if (index % 2 === 0 && index < 32) {
            return (
              <div
                className={(item.index + 1) % 4 === 0 ? "flex flex-col gap-[3px]" : "flex flex-col gap-[3px] mb-[7px]"}
              >
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
                <div
                  className={choosen && choosen.includes(item.index) ? seatChoosenClass : seatClass}
                  onClick={() => {
                    seatChoose(item.index);
                  }}
                >
                  {item.index}
                </div>
              </div>
            );
          } else if (item.index === 33) {
            return (
              <div className="flex flex-col justify-end">
                <div
                  className={choosen && choosen.includes(item.index) ? seatChoosenClass : seatClass}
                  onClick={() => {
                    seatChoose(item.index);
                  }}
                >
                  {item.index}
                </div>
              </div>
            );
          } else if (index >= 32 && index % 2 !== 0) {
            return (
              <div className={(item.index + 1) % 4 === 0 ? "flex flex-col gap-[3px]" : "flex flex-col gap-[3px]"}>
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
          } else {
            return null;
          }
        })
        // return <div className="w-[32px] h-[25px] bg-gray/20 border-1 border-gray font-semibold rounded-[3px] text-center ">{item.index}</div>;
      }
    </div>
  );
}
