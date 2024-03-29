import classNames from "classnames";
import React, { useState } from "react";
import useJsonFetch from "../../utils";
import Dropdown from "./Dropdown";

import OutsideClick from "react-outside-click-handler-lite";
import { useController } from "react-hook-form";

export default function InputDropdown({ placeholder, url, required, name, text, control }) {
  const inputClassName = classNames({
    "p-15 border-[1px] border-[#d9d9d9] rounded-[5px]  bg-white w-[325px]": true,
  });
  const [cityName, setCityName] = useState();
  const [openDrop, setOpenDrop] = useState(false);
  const { field } = useController({ name, control, rules: { required } });
  const [data, loading, error] = useJsonFetch(cityName && url ? `${url}${cityName}` : null);
  console.log("data loading err", data, loading, error);
  // const [city, setCity] = useState();
  // console.log("city selected", city);
  return (
    <div className=" flex flex-col gap-[17px] relative">
      <p className=" text-white text-24">{text}</p>
      <OutsideClick
        onOutsideClick={() => {
          setOpenDrop(false);
          // setCity(null);
        }}
      >
        <input
          required={required}
          name={field.name}
          className={inputClassName}
          onClick={() => setOpenDrop(!openDrop)}
          value={cityName}
          placeholder={placeholder}
          onChange={(e) => setCityName(e.target.value)}
        />
        {data ? (
          <Dropdown
            open={openDrop}
            close={setOpenDrop}
            onSelect={(data) => {
              field.onChange(data._id);
              setCityName(data.name);
            }}
            options={data}
          />
        ) : null}
        {/* {loading ? <Loading /> : null} */}
      </OutsideClick>
    </div>
  );
}
