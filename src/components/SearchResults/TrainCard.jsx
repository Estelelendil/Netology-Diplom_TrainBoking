import React from "react";
import Button from "../UI/Button";
import moment from "moment";

export default function TrainCard({ item }) {
  console.log("TrainCard", item.departure.from);
  const timeArrivalFrom = moment(item.arrival.from.datetime);
  const timeArrivalTo = moment(item.arrival.to.datetime);
  const timeDiffArrival = timeArrivalTo.diff(timeArrivalFrom);
  const dataDiffArrival = moment(timeDiffArrival);

  const timedepartureFrom = moment(item.departure.from.datetime);
  const timedepartureTo = moment(item.departure.to.datetime);
  const timeDiffdeparture = timedepartureTo.diff(timedepartureFrom);
  const dataDiffdeparture = moment(timeDiffdeparture);
  return (
    <div className="bg-white w-[959px] h-[354px] border-1 border-[#C4C4C4] flex ">
      <div className="flex flex-col w-[352px] h-full bg-[#E4E0E9] justify-center items-center  p-[15px]">
        <div className="bg-[url('img/train.png')] w-[86px] h-[86px]"></div>
        <div className="text-[#3E3C41] font-bold text-24 uppercase ">{item?.departure?.train.name}</div>
        <div className="text-left text-16">
          <p>{`${item.departure.from.railway_station_name} →`}</p>
          <p>{`${item.departure.to.railway_station_name} →`}</p>
        </div>
        <div className="text-left text-16">
          <p>{`${item.arrival?.from.railway_station_name} →`}</p>
          <p>{`${item.arrival?.to.railway_station_name} →`}</p>
        </div>
      </div>
      {/* ---___----- */}
      <div className="flex flex-col p-10 w-full justify-start items-center">
        <div className="flex w-full justify-between gap-[50px] items-start p-[15px] border-r-1 border-dotted border-[#E5E5E5] py-[30px]">
          <div className="flex flex-col ">
            <p className="text-24 font-bold">{timeArrivalFrom.format("HH:mm")}</p>
            <p className="text-20">{item.arrival?.from.city.name}</p>
            <p className="text-16 text-[#928F94]">{item.arrival?.from.railway_station_name}</p>
          </div>
          <div className=" flex flex-col justify-center">
            <p className="text-18 text-[#928F94]">{dataDiffArrival.format("H:mm")}</p>
            <div className="bg-[url('img/arrow.svg')] w-[30px] bg-no-repeat bg-contain h-[20px]"></div>
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-24 font-bold">{timeArrivalTo.format("HH:mm")}</p>
            <p className="text-20">{item.arrival?.to.city.name}</p>
            <p className="text-16 text-[#928F94]">{item.arrival?.to.railway_station_name}</p>
          </div>
        </div>

        <div className="flex w-full justify-between gap-[50px] items-start p-[15px] border-r-1 border-dotted border-[#E5E5E5] py-[30px]">
          <div className="flex flex-col">
            <p className="text-24 font-bold">{timedepartureFrom.format("HH:mm")}</p>
            <p className="text-20">{item.departure.from.city.name}</p>
            <p className="text-16 text-[#928F94]">{item.departure.from.railway_station_name}</p>
          </div>
          <div className=" flex flex-col justify-center">
            <p className="text-18 text-[#928F94]">{dataDiffdeparture.format("H:mm")}</p>
            <div className="bg-[url('img/arrow.svg')] w-[30px] bg-no-repeat bg-contain h-[20px]"></div>
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-24 font-bold">{timedepartureTo.format("HH:mm")}</p>
            <p className="text-20">{item.departure.to.city.name}</p>
            <p className="text-16 text-[#928F94]">{item.departure.to.railway_station_name}</p>
          </div>
        </div>
      </div>

      {/* -----___----- */}
      <div className="flex flex-col w-[350px] px-[20px] justify-between py-[30px]">
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
        <Button label="Выбрать места" color="orange" className="text-white font-bold w-[228px]"></Button>
      </div>
    </div>
  );
}
