import classNames from "classnames";
import React from "react";

export default function MyButton({ label, color, onClick, className, type }) {
  const buttonClass = classNames({
    "px-[15px]  rounded uppercase h-[56px]": true,
    "bg-transparent border-1 border-color-white text-white ": color === "dark",
    "bg-orange  text-black ": color === "orange",
    "bg-transparent  text-black  border-1 border-slate-400": color === "transparent",
    ...(className && { [className]: true }),
  });
  return (
    <button className={buttonClass} type={type} onClick={onClick}>
      {label}
    </button>
  );
}
