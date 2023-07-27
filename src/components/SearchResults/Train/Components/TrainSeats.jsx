import React from "react";

export default function TrainSeats({ item }) {
  return (
    <div>
      <div className="flex flex-col justify-start gap-8 h-[200px]">
        {item?.arrival?.have_first_class && (
          <div className="flex justify-between items-end gap-2">
            <p>Люкс</p>
            <p className="font-bold text-orange text-16">{item.available_seats_info.first}</p>
            {/* <p>от {item.arrival.price_info.first?.top_price} ₽</p> */}
            <div className="flex items-center gap-[10px]">
              <p className="text-[#928F94] text-16">oт</p>
              <p className="font-bold text-24 ">{item.arrival.price_info.first?.top_price}</p>
              <p className="text-[#928F94] text-20">₽</p>
            </div>
          </div>
        )}
        {item?.arrival?.have_second_class && (
          <div className="flex justify-between items-end gap-2">
            <p>Купе</p>
            <p className="font-bold text-orange text-16">{item.available_seats_info.second}</p>
            <div className="flex items-center gap-[10px]">
              <p className="text-[#928F94] text-16">от</p>
              <p className="font-bold text-24 ">
                {item?.arrival?.price_info.second?.top_price && item.arrival.price_info.second?.bottom_price}{" "}
              </p>
              <p className="text-[#928F94] text-24">₽</p>
            </div>
          </div>
        )}
        {item.arrival.have_third_class && (
          <div className="flex justify-between items-end gap-2">
            <p>Плацкарт</p>
            <p className="font-bold text-orange text-16">{item.available_seats_info.third}</p>
            <div className="flex items-center gap-[10px]">
              <p className="text-[#928F94] text-16">от</p>
              <p className="font-bold text-24 ">
                {item.arrival.price_info.third?.top_price && item.arrival.price_info.third?.bottom_price}{" "}
              </p>
              <p className="text-[#928F94] text-24">₽</p>
            </div>
          </div>
        )}
        {item.arrival.have_fourth_class && (
          <div className="flex justify-between items-end gap-2">
            <p>Сидячий</p>
            <p className="font-bold text-orange text-16">{item.available_seats_info.fourth}</p>
            <div className="flex items-center gap-[10px]">
              <p className="text-[#928F94] text-16">от</p>
              <p className="font-bold text-24 ">
                {item.arrival.price_info.fourth?.top_price && item.arrival.price_info.fourth?.bottom_price}
              </p>
              <p className="text-[#928F94] text-24">₽</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
