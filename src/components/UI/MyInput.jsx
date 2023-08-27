import classNames from "classnames";
import React from "react";

export default function MyInput({ placeholder, text, setValue, name, type, required }) {
  const inputClassName = classNames({
    "p-[15px] border-[1px] border-[#d9d9d9] rounded-[5px] w-[100%] bg-white": true,
  });
  return (
    <div className="flex flex-col gap-[17px]">
      <span className="w-[400px] text-white text-24">{text}</span>
      <input
        required={required}
        name={name}
        className={inputClassName}
        type={type || "text"}
        placeholder={placeholder}
        onChange={(e) => setValue(name, e.target.value)}
      />
    </div>
  );
}
