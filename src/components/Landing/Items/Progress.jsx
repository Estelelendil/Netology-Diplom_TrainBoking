import React from "react";

export default function Progress({ active, amount }) {
  // genereta arr with length of amount
  const arr = [];
  for (let i = 0; i < amount; i++) {
    arr.push(i);
  }
  return (
    <div className="flex items-center gap-3">
      {arr.map((item, index) => {
        if (index + 1 !== active) {
          return <div key={item} className="w-[19px] h-[19px] bg-gray/20 rounded-full mx-1"></div>;
        } else {
          return <div key={item} className="w-[19px] h-[19px] bg-gray/40 rounded-full mx-1"></div>;
        }
      })}
    </div>
  );
}
