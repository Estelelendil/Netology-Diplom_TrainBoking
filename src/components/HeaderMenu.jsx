import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "./Logo";

export default function HeaderMenu() {
  return (
    <div className="w-full flex flex-col">
      <Logo />
      <div className="w-full h-[94px] items-center bg-[#292929] flex gap-[84px] pl-[258px] py-[10px]">
        <NavLink className=" text-white text-30" to="/">
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
    </div>
  );
}
