import React from "react";

export default function SeatsSecond({ seats }) {
  return (
    <div className=" h-[75px]  flex  gap-[10px]   mt-[5px] ml-[5px] ">
      {seats.map((item, index) => {
        if (index % 2 === 0) {
          return (
            <div className={(item.index + 1) % 4 === 0 ? "flex flex-col ml-[34px] mr-[4px]" : "flex flex-col"}>
              <div className="w-[34px] h-[35px] bg-gray/50 border-1 border-red text-center mr-[-10px]">
                {item.index}
              </div>
              {seats[index + 1] && (
                <div className="w-[34px] h-[35px] bg-gray/50 border-1 border-red text-center mr-[-10px]">
                  {seats[index + 1].index}
                </div>
              )}
            </div>
          );
        }
        // if (((item.index - 5) % 4 === 0) | ((item.index - 6) % 4 === 0)) {
        //   return (
        //     <div className="w-[34px] h-[35px] bg-gray/50 border-1 border-red text-center ml-[-36px]">{item.index}</div>
        //   );
        // } else
        //   return (
        //     <div className="w-[34px] h-[35px] bg-gray/50 border-1 border-red text-center mr-[-10px]">{item.index}</div>
        //   );
        // if (item.index % 2 === 0 && item.index % 4 !== 0) {
        //   return (
        //     <div className="flex mr-[4px] w-[34px] ">
        //       <div className="w-[34px] h-[35px] bg-gray/50 border-1 border-red text-center">{item.index}</div>
        //       {/* <div className="w-[34px] h-[70px] bg-white/60"></div> */}
        //     </div>
        //   );
        // } else if (item.index % 2 === 0 && item.index % 4 === 0) {
        //   return (
        //     <div className="flex bg-orange w-[38px] ">
        //       <div className="w-[34px] h-[35px] bg-gray/50 border-1 border-red text-center">{item.index}</div>
        //       {/* <div className="w-[34px] h-[70px] bg-white/60"></div> */}
        //     </div>
        //   );
        // } else {
        //   return <div className="w-[34px] h-[35px] bg-gray/50 border-1 border-red text-center">{item.index}</div>;
        // }
      })}
    </div>
  );
}
