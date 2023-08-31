import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import Logo from "./Logo";
import SearchMain from "../../SubMain/SearchMain";
import classNames from "classnames";
import SearchProgressBar from "../Items/SearchProgressBar";
import { useQuery } from "../../../utils";

export default function HeaderMenu() {
  const [stepSearch, setStepSearch] = useState(0);
  let query = useQuery();
  const price = query.get("price");
  const containerClass = classNames({
    // flex: true,
    " flex justify-center p-l-[50px] gap-[120px]": stepSearch === 0,
    "flex flex-col justify-end justifyself-end": stepSearch !== 0,
  });
  const mainClass = classNames({
    "h-[993px] flex flex-col justify-between  bg-cover border-b-8 border-orange": true,
    "bg-[url('img/search.png')]": stepSearch === 0,
    "bg-[url('img/search2.png')]": stepSearch !== 0,
  });

  console.log("searchStep", stepSearch);
  return (
    <div className="w-full flex flex-col">
      <Logo />
      <div
        // onClick={() => setStep(0)}
        className="w-full h-[94px] items-center bg-[#292929] flex gap-[84px] pl-[258px] py-[10px]"
      >
        <NavLink className=" text-white text-30" to="/about-us">
          O Нас
        </NavLink>
        <NavLink className=" text-white text-30" to="/how-it-works">
          Как это работает
        </NavLink>
        <NavLink className=" text-white text-30" to="/reviews">
          Отзывы
        </NavLink>
        <NavLink className=" text-white text-30" to="/contacts">
          Контакты
        </NavLink>
      </div>
      <div className={mainClass}>
        <div className={containerClass} id="container">
          {stepSearch === 0 && !price ? (
            <div className="flex flex-col ">
              <h1 className=" mt-[162px] text-white text-72 font-thin">Вся жизнь -</h1>
              <h1 className="text-white text-72 font-bold">путешествие!</h1>
            </div>
          ) : (
            <></>
          )}
          {!price && (
            <SearchMain
              step={stepSearch}
              setStep={setStepSearch}
              // setSearchParams={setSearchParams}
              // paramSearch={searchParams}
            />
          )}
        </div>
        {stepSearch !== 0 ? <SearchProgressBar searchStep={stepSearch} /> : <></>}
      </div>
      <Outlet />
    </div>
  );
}
