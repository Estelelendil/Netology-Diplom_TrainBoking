import classNames from "classnames";
import React from "react";

export default function Button({ label, color, onClick, className }) {
  const buttonClass = classNames({
    "px-[15px]  rounded uppercase h-[56px]": true,
    "bg-transparent border-1 border-color-white text-white ": color === "transparent",
    "bg-orange  text-black ": color === "orange",
    ...(className && { [className]: true }),
  });
  return (
    <button className={buttonClass} onClick={onClick}>
      {label}
    </button>
  );
}
