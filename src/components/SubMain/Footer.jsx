import React from "react";

export default function Footer() {
  return (
    <div className="w-full px-[254px] flex bg-[#2D2B2F] h-[96px] gap-[254px] justify-between items-center border-t-1 border-white">
      <h1 className=" py-[10px] text-center text-white text-36 font-bold">Лого</h1>
      <button className="bg-[url('img/button.png')] w-[36px] h-[36px]"></button>
      <p className=" py-[10px] text-center text-white text-30 font-thin">2018 WEB</p>
    </div>
  );
}
