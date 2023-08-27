import classNames from "classnames";
import React, { useState } from "react";
import OutsideClick from "react-outside-click-handler-lite";
import Calendar from "react-calendar";
import { useController } from "react-hook-form";

// Get date string in YYYY-MM-DD format
function getFormattedDate(date) {
  console.log("formatt", date);
  return new Date(date).toISOString().replace(/T.*/, "").split("-").join("-");
}

export default function InputCalendar({ placeholder, required, name, text, control }) {
  const inputClassName = classNames({
    "p-15 border-[1px] border-[#d9d9d9] rounded-[5px]  bg-white ": true,
  });
  // const [value, setValue] = useState();
  const [openCalendar, setOpenCalendar] = useState(false);
  const { field } = useController({ name, control, rules: { required }, defaultValue: getFormattedDate(new Date()) });
  // const [data, loading, error] = useJsonFetch((value && url) ?`${url}${value}`:null, {});
  const [date, setDate] = useState(getFormattedDate(field.value));
  return (
    <div className="flex flex-col gap-[17px] w-full relative">
      <span className=" text-white text-24">{text}</span>
      <OutsideClick
        onOutsideClick={() => {
          setOpenCalendar(false);
        }}
      >
        <input
          required={required}
          name={field.name}
          className={inputClassName}
          onClick={() => setOpenCalendar(!openCalendar)}
          value={date}
          onChange={(e) => {
            const value = e.target.value;
            setDate(value);

            // const parsedValue = new Date(Date.parse(value));
            // if (!Number.isNaN(parsedValue.valueOf())) {
            //   field.onChange(parsedValue);
            // }
          }}
          placeholder={placeholder}
        />
        {openCalendar ? (
          <Calendar
            className="absolute top-[80px] left-[0px] bg-white p-2 rounded"
            onChange={(data) => {
              console.log("calendra", data);
              const formDate = getFormattedDate(data);
              field.onChange(formDate);
              setDate(formDate);
              setOpenCalendar(false);
            }}
            value={new Date(field.value)}
          />
        ) : null}
      </OutsideClick>
    </div>
  );
}
