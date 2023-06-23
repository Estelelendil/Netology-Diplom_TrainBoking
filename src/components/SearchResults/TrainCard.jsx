import React from "react";
import Button from "../UI/Button";

export default function TrainCard({ item }) {
  console.log("TrainCard", item.arrival.from);
  return (
    <div className="bg-white w-[959px] h-[354px] border-1 border-orange flex ">
      <div className="flex flex-col w-[352px] h-full bg-[#E4E0E9] justify-center items-center p-[15px]">
        <div className="bg-[url('img/train.png')] w-[86px] h-[86px]"></div>
        <div className="text-[#3E3C41] font-bold text-24 uppercase ">{item?.departure?.train.name}</div>
        <div className="text-left text-16">
          <p>{`${item.departure.from.railway_station_name} →`}</p>
          <p>{`${item.departure.to.railway_station_name} →`}</p>
        </div>
        <div className="text-left text-16">
          <p>{`${item.arrival.from.railway_station_name} →`}</p>
          <p>{`${item.arrival.to.railway_station_name} →`}</p>
        </div>
      </div>
      {/* ---___----- */}
      <div className="flex w-full border-r-1 border-dotted border-[#E5E5E5] py-[30px]"></div>
      {/* -----___----- */}
      <div className="flex flex-col w-[350px] px-[25px] justify-between py-[30px]">
        <div className="flex flex-col justify-start gap-8 h-[200px]">
          {item.arrival.have_first_class && (
            <div className="flex justify-between gap-2">
              <p>Люкс</p>
              <p>{item.available_seats_info.first}</p>
              <p>от {item.arrival.price_info.first?.top_price} ₽</p>
            </div>
          )}
          {item.arrival.have_second_class && (
            <div className="flex justify-between gap-2">
              <p>Купе</p>
              <p>{item.available_seats_info.second}</p>
              <p>от {item.arrival.price_info.second?.top_price && item.arrival.price_info.second?.bottom_price} ₽</p>
            </div>
          )}
          {item.arrival.have_third_class && (
            <div className="flex justify-between gap-2">
              <p>Плацкарт</p>
              <p>{item.available_seats_info.third}</p>
              <p>от {item.arrival.price_info.third?.top_price && item.arrival.price_info.third?.bottom_price} ₽</p>
            </div>
          )}
          {item.arrival.have_fourth_class && (
            <div className="flex justify-between gap-2">
              <p>Сидячий</p>
              <p>{item.available_seats_info.fourth}</p>
              <p>от {item.arrival.price_info.fourth?.top_price && item.arrival.price_info.fourth?.bottom_price} ₽</p>
            </div>
          )}
        </div>
        <Button label="Выбрать места" color="orange" className="text-white font-bold w-[228px]"></Button>
      </div>
    </div>
  );
}
