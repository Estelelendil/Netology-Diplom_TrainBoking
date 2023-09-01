import classNames from "classnames";
import React from "react";

export default function Notification({ mainClass, text, subClass }) {
  const beforeClass = classNames({
    "before:border-t-transparent before:border-r-transparent before:border-b-[#FFF5005C] before:border-l-transparent before:border-solid before:border-t-0 before:border-r-[10px] before:border-b-[10px] before:border-l-[10px] before:top-[-25px] before:content-[' '] before:absolute before:right-[10px] rotate-180": true,

    ...(subClass && { [subClass]: true }),
  });
  return (
    <div className={mainClass}>
      {text}
      <div className={beforeClass}></div>
    </div>
  );
}
