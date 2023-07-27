import classNames from "classnames";
import React, { useState } from "react";

export default function SeatFilter({ name, setSearchParams, searchParams }) {
  const main = classNames({
    " bg-no-repeat w-[50px] h-[50px] bg-contain text-[#928F94] ": true,
    "bg-[url('img/seatClass.png')]": name.name === "Сидячий",
    "bg-[url('img/secondClass.svg')]": name.name === "Купе",
    "bg-[url('img/thirdClass.svg')]": name.name === "Плацкарт",
    "bg-[url('img/firstClass.svg')]": name.name === "Люкс",
    // если в searchParams есть этот итем и он true
  });
  const choosen = classNames({
    "w-[100px] h-[100px]": true,
    "color-orange text-orange border-[3px] border-orange rounded p-1": searchParams[name.key] === true,
  });
  const chooseFilter = (name) => {
    console.log("chooseFilter", searchParams);
    switch (name.name) {
      case "Сидячий":
        setSearchParams((prev) => {
          const newArr = { ...prev };
          if (newArr.have_fourth_class === true) {
            delete newArr.have_fourth_class;
          } else {
            newArr.have_fourth_class = true;
          }
          delete newArr.have_third_class;
          delete newArr.have_second_class;
          delete newArr.have_first_class;
          return newArr;
        });
        break;
      case "Плацкарт":
        setSearchParams((prev) => {
          const newArr = { ...prev };
          if (newArr.have_third_class === true) {
            delete newArr.have_third_class;
          } else {
            newArr.have_third_class = true;
          }
          delete newArr.have_fourth_class;
          delete newArr.have_second_class;
          delete newArr.have_first_class;
          return newArr;
        });
        break;
      case "Купе":
        setSearchParams((prev) => {
          const newArr = { ...prev };
          if (newArr.have_second_class === true) {
            delete newArr.have_second_class;
          } else {
            newArr.have_second_class = true;
          }
          delete newArr.have_fourth_class;
          delete newArr.have_third_class;
          delete newArr.have_first_class;
          return newArr;
        });
        break;
      case "Люкс":
        setSearchParams((prev) => {
          const newArr = { ...prev };
          if (newArr.have_first_class === true) {
            delete newArr.have_first_class;
          } else {
            newArr.have_first_class = true;
          }
          delete newArr.have_fourth_class;
          delete newArr.have_third_class;
          delete newArr.have_second_class;
          return newArr;
        });
        break;
      default:
        console.log("without filters");
        setSearchParams({});
    }
  };
  return (
    <div className={choosen} onClick={() => chooseFilter(name)}>
      <div className="flex flex-col  items-center">
        <div className={main}></div>
        <p className="text-[#928F94]">{name.name}</p>
      </div>
    </div>
  );
}
