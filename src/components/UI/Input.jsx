import classNames from "classnames";
import React from "react";

export default function Input({ placeholder, text, setValue, name, type, required }) {
  const inputClassName = classNames({
    "p-[15px] border-[1px] border-[#d9d9d9] rounded-[5px] w-[100%] bg-white": true,
  });
  return (
    <div className="flex flex-col gap-[17px]">
      <p className="w-[400px] text-white text-24">{text}</p>
      <input
        required={required}
        name={name}
        className={inputClassName}
        type={type || "text"}
        placeholder={placeholder}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
}
