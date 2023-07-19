// import classNames from "classnames";
import React, { useState } from "react";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import { useController } from "react-hook-form";
import styles from "./slider.module.scss";
export default function MyRangeSlider({ name, control, defaultValue, required, placeholder, min, max }) {
  const [value, setValue] = useState(0);
  const { field } = useController({ name, control, rules: { required }, defaultValue: value });
  // const inputClassName = classNames({
  //   "p-15 border-[1px] border-[#d9d9d9] rounded-[5px]  bg-white ": true,
  // });
  // const [data, loading, error] = useJsonFetch((value && url) ?`${url}${value}`:null, {});
  const [setDate] = useState();
  console.log("MyRangeSlider", value);
  return (
    <div>
      <input
        required={required}
        className="hidden"
        name={field.name}
        defaultValue={defaultValue}
        // className={inputClassName}
        // onClick={() => setOpenCalendar(!openCalendar)}
        value={value}
        onChange={(e) => {
          // const value = e.target.value;
          setDate(value);

          // const parsedValue = new Date(Date.parse(value));
          // if (!Number.isNaN(parsedValue.valueOf())) {
          //   field.onChange(parsedValue);
          // }
        }}
        placeholder={placeholder}
      ></input>
      <div className="mt-3 w-[300px] px-5 flex flex-col ">
        <div className="flex justify-between text-white">
          <p>от</p>
          <p>до</p>
        </div>
        <RangeSlider
          className={styles.slider}
          value={value}
          min={min}
          max={max}
          step={100}
          onInput={(e) => {
            setValue(e);
            field.onChange(e);
          }}
        />
        <div className="flex justify-between text-white">
          <p>{value[0]}</p>
          <p>{value[1]}</p>
        </div>
      </div>
    </div>
  );
}
