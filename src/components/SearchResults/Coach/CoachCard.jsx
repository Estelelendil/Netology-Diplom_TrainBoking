import classNames from "classnames";
import React from "react";

export default function CoachCard({ item }) {
  // console.log("CoachCard", item);
  const haveCond = classNames({
    "bg-[url('img/cond.png')] w-[33px] h-[33px] bg-no-repeat border-1 border bg-contain bg-[length:20px_20px] p-2 bg-center": true,
    " bg-gray border-1  rounded-[3px]": item.coach.have_air_conditioning,
    " bg-orange border-4  border-orange": item.coach.have_air_conditioning,
  });
  const haveWifi = classNames({
    "bg-[url('img/wifi.png')] w-[33px] h-[33px] rounded-[4px] bg-no-repeat bg-contain bg-[length:20px_17px] bg-center": true,
    "border-1 border-gray rounded-[3px]": !item.coach.have_wifi,
    " bg-orange border-4  border-orange": item.coach.have_wifi,
  });
  const haveLinels = classNames({
    "bg-[url('img/linels.png')] w-[33px] h-[33px] rounded-[4px] bg-no-repeat bg-contain bg-[length:20px_20px] bg-center": true,
    "border-1 border-gray rounded-[3px]": !item.coach.is_linens_included,
    " bg-orange border-4  border-orange": item.coach.is_linens_included,
  });
  const haveExpress = classNames({
    "bg-[url('img/cup.png')] w-[33px] h-[33px] rounded-[4px] bg-no-repeat bg-[length:20px_20px] bg-contain bg-center": true,
    "border-1 border-gray rounded-[3px]": !item.coach.have_express,
    " bg-orange border-4  border-orange": item.coach.have_express,
  });
  // const hist = useNavigate();
  return (
    <div className=" flex w-[959px] justify-center gap-[100px] h-[161px] pt-4">
      <div className="flex flex-col w-[300px]  gap-[10px]">
        <div className="flex justify-between gap-[10px]">
          <div className="flex gap-3">
            <p className="text-[#928F94]">Места</p>
            <p>{item.coach.available_seats}</p>
          </div>
          <p className="text-[#928F94] text-18">Стоимость</p>
        </div>
        {item.coach.top_price !== 0 && (
          <div className="flex items-center justify-between gap-[20px]">
            <div className="flex items-center gap-3">
              <p>Верхние</p>
              <p className="text-red">{item.coach.available_seats}</p>
            </div>
            <div className="flex items-center  gap-3">
              <p className="text-20 font-bold">{item.coach.top_price}</p>
              <p className="text-[#928F94] text-20">₽</p>
            </div>
          </div>
        )}
        {item.coach.bottom_price !== 0 && (
          <div className="flex justify-between gap-[20px]">
            <div className="flex items-center  gap-3">
              <p>Нижние</p>
              <p className="text-red">{item.coach.available_seats}</p>
            </div>
            <div className="flex items-center  gap-3">
              <p className="text-20 font-bold">{item.coach.bottom_price}</p>
              <p className="text-[#928F94] text-20">₽</p>
            </div>
          </div>
        )}
        {item.coach.side_price !== 0 && (
          <div className="flex  items-center  justify-between gap-[20px]">
            <div className="flex gap-3">
              <p>Боковые</p>
              <p className="text-red">{item.coach.available_seats}</p>
            </div>
            <div className="flex  items-center  gap-3">
              <p className="text-20 font-bold">{item.coach.side_price}</p>
              <p className="text-[#928F94] text-20">₽</p>
            </div>
          </div>
        )}
        {item.coach.price !== 0 && (
          <div className="flex justify-between gap-[20px]">
            <div className="flex  items-center  gap-3">
              <p>Люкс</p>
              <p className="text-red">{item.coach.available_seats}</p>
            </div>
            <div className="flex items-center gap-3">
              <p className="text-20 font-bold">{item.coach.price}</p>
              <p className="text-[#928F94] text-20">₽</p>
            </div>
          </div>
        )}
      </div>
      <div className="flex flex-col text-[#928F94] text-20 gap-3">
        <p>Обслуживание ФПК</p>
        <div className="flex gap-6">
          <div className={haveCond}></div>
          <div className={haveWifi}></div>
          <div className={haveLinels}> </div>
          <div className={haveExpress}> </div>
        </div>
      </div>
    </div>
  );
}
