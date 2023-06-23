import classNames from "classnames";
import React from "react";

export default function ArrowProgressBar({ text, number, color }) {
  const classClass = classNames({
    "w-full flex items-center h-full justify-center text-white gap-[40px]  pl-[-80px] font-bold text-30": true,
    // "bg-gray": color === "gray",
    "bg-[url('img/Rectangle7.png')] bg-[length:430px_100px] bg-no-repeat z-10": color === "orange",
  });
  return (
    <div className="flex w-1/4">
      <div className={classClass}>
        {text}
        <div className="border-2 border-white rounded-[30px] text-center p-2 text-white w-[60px]">{number}</div>
      </div>
      {color === "gray" ? (
        <div className="bg-[url('img/Vector.svg')] bg-cover  w-[40px] h-[98px] " id="vector"></div>
      ) : (
        <></>
      )}
    </div>
    // <div className={classClass}>
    //   <div className="w-full">{number}</div>
    // <div className={classClass}>
    // {/* <div */}
    // className="border-1 border-white rounded-[30px] p-3 text-white"
    // style={{ clipPath: "polygon(0 0, 0% 100%, 25% 55%)" }}
    // >
    // {/* {number} */}
    //   {/* </div> */}
    //   {/* {text} */}
    //   {/* <div className="bg-[url('img/Vector.svg')] color-orange w-[40px] h-[98px]" id="vector"></div> */}
    //   {/* <svg height="250" width="450">
    //     <polygon
    //       points="225,10 100,210 350,210"
    //       style={{ fill: "rgba(0,0,0,0)", stroke: "#609AAF", strokeWidth: "10" }}
    //     />
    //   </svg> */}
    // {/* </div> */}
    // {/* </div> */}
  );
}
