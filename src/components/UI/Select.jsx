import classNames from "classnames";
import React from "react";

export default function Select({ defaultValue, text, setValue, name, required, options }) {
  const inputClassName = classNames({
    "p-[15px] border-[1px] border-[#d9d9d9] rounded-[5px] w-[100%] bg-white": true,
  });
  return (
    <div className="flex flex-col gap-[17px]">
      <select
        className={inputClassName}
        name={name}
        required={required}
        onChange={(e) => {
          console.log("target", e, e.target.value);
          setValue(e.target.value);
        }}
      >
        {text}
        {options.map((option) => {
          console.log(option);
          // if(option.value===defaultValue){
          //   setValue(option)
          //   return <option key={option._id} value={option} selected>{option.name}</option>
          // }else{
          return (
            <option key={option._id} value={option.name}>
              {option.name}
            </option>
          );
          // }
        })}
        {/* <option value="value1">Значение 1</option>
  <option value="value2" selected>Значение 2</option>
  <option value="value3">Значение 3</option> */}
      </select>
    </div>
  );
}
