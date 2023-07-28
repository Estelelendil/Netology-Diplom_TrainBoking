import React from "react";

export default function SeatsFirst({ seats }) {
  return (
    <div className="flex h-[70px] mt-[5px] ml-[5px] w-full">
      {seats.map((item) => {
        if (item.index % 2 === 0) {
          return (
            <div className="flex mr-[4px]">
              <div className="w-[34px] h-[70px] bg-white/60"></div>
              <div className="w-[34px] h-[70px] bg-white  border-1 border-gray rounded-[3px] font-semibold text-center">
                {item.index}
              </div>
            </div>
          );
        } else {
          return (
            <div className="w-[34px] h-[70px] bg-white  border-1 border-gray rounded-[3px] font-semibold text-center">
              {item.index}
            </div>
          );
        }
      })}
    </div>
  );
}
