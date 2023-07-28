import React from "react";

export default function SeatsFourth({ seats }) {
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
                  <div className="w-[32px] h-[21px] bg-gray/50 border-1 border-red text-center ">
                    {seats[index + 1].index}
                  </div>
                )}
                <div className="w-[32px] h-[21px] bg-gray/50 border-1 border-red text-center">{item.index}</div>
              </div>
            );
          } else if (item.index === 33) {
            return (
              <div className="flex flex-col justify-end">
                <div className="w-[32px] h-[21px] bg-gray/50 border-1 border-red text-center">{item.index}</div>
              </div>
            );
          } else if (index >= 32 && index % 2 !== 0) {
            return (
              <div className={(item.index + 1) % 4 === 0 ? "flex flex-col gap-[3px]" : "flex flex-col gap-[3px]"}>
                <div className="w-[32px] h-[21px] bg-gray/50 border-1 border-red text-center">{item.index}</div>
                {seats[index + 1] && (
                  <div className="w-[32px] h-[21px] bg-gray/50 border-1 border-red text-center ">
                    {seats[index + 1].index}
                  </div>
                )}
              </div>
            );
          }
        })
        // return <div className="w-[32px] h-[25px] bg-gray/20 border-1 border-red text-center ">{item.index}</div>;
      }
    </div>
  );
}
