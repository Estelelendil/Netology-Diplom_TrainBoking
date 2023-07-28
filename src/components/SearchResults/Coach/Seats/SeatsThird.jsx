import React from "react";

export default function SeatsThird({ seats }) {
  return (
    <div className=" h-[75px]  flex flex-wrap   mt-[5px] ml-[5px] ">
      {seats.map((item, index) => {
        if (index % 2 === 0 && index < 32) {
          return (
            <div className={(item.index + 1) % 4 === 0 ? "flex flex-col ml-[34px] mr-[4px]" : "flex flex-col"}>
              <div className="w-[34px] h-[35px] bg-white border-1 border-gray rounded-[3px] font-semibold text-center mr-[0px]">
                {item.index}
              </div>
              {seats[index + 1] && (
                <div className="w-[34px] h-[35px] bg-white border-1 border-gray rounded-[3px] font-semibold text-center mr-[-10px]">
                  {seats[index + 1].index}
                </div>
              )}
            </div>
          );
        } else if (index >= 32) {
          return (
            <div
              className={
                index % 2 === 0
                  ? "w-[51px] h-[30px] bg-white border-1 border-gray rounded-[3px] font-semibold text-center mt-[30px]  "
                  : "w-[51px] h-[30px] bg-white border-1 border-gray rounded-[3px] font-semibold text-center mt-[30px] mr-[4px] "
              }
            >
              {item.index}
            </div>
          );
        }
      })}
    </div>
  );
}
