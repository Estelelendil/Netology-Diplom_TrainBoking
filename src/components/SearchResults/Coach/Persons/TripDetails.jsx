import classNames from "classnames";
import React from "react";
import Loading from "../../../UI/Loading";
import moment from "moment";
import { PriceSum } from "../../../../helpers";

export default function TripDetails({ item, persons }) {
  // const timedepartureFrom = moment(item.departure.from.datetime);
  console.log("TripDetails", item, persons);
  const timeArrivalFrom = moment(item.arrival.from.datetime);
  const timeArrivalTo = moment(item.arrival.to.datetime);
  const timeDiffArrival = timeArrivalTo.diff(timeArrivalFrom);
  const dataDiffArrival = moment(timeDiffArrival);
  const timedepartureFrom = moment(item.departure.from.datetime);
  const timedepartureTo = moment(item.departure.to.datetime);
  const timeDiffdeparture = timedepartureTo.diff(timedepartureFrom);
  const dataDiffdeparture = moment(timeDiffdeparture);
  // const [summ, setSumm] = useState(0);
  //Это id вагона который мы передали через query

  // useEffect(() => {
  //   while (isEmpty(info)) {
  //     const infoFromLS = getInfo();
  //     setInfo(infoFromLS);
  //   }
  // }, [info]);

  const mainClass = classNames({
    "w-[360px] h-[950px] bg-[#3E3C41] mt-9 px-[20px] pt-[10px]": true,
  });
  return (
    <div className={mainClass}>
      <h2 className="text-white text-30 self-start pl-[10px] pt-[10px] uppercase mb-5">Детали поездки</h2>
      {item ? (
        <div className="flex flex-col gap-[20px] border-t-1 border-slate-100 pt-8">
          <div className="flex justify-between">
            <div className="flex gap-3">
              <div className="bg-[url('img/Subtract.png')] rotate-180 bg-no-repeat bg-contain w-[32px] h-[26px]"></div>
              <p className="uppercase text-white text-16 font-bold">ТУДА</p>
            </div>

            <p className="uppercase text-white text-16">{item.dateStart}</p>
          </div>
          <div className="flex justify-between text-white">
            <p>№ Поезда</p>
            <p>{item.departure.train.name}</p>
          </div>
          <div className="flex justify-between text-white">
            <p>Название</p>
            <p>{`${item.departure.from.city.name}-${item.departure.to.city.name}`}</p>
          </div>

          <div className="flex justify-between items-center gap-[10px]">
            <p className="uppercase text-white text-24 font-bold">{timedepartureFrom.format("HH:mm")}</p>
            <div className=" flex flex-col justify-center">
              <p className="text-16 text-white">{`${dataDiffdeparture.format("H:mm")}`}</p>
              <div className="bg-[url('img/arrow.svg')]  w-[30px] bg-no-repeat bg-contain h-[20px]"></div>
            </div>
            <p className="uppercase text-white text-24 font-bold">{timedepartureTo.format("HH:mm")}</p>
          </div>
          <div className="flex justify-between text-white ">
            <div className="flex flex-col">
              <p>{item.departure.from.city.name}</p>
              <p className="text-slate-400 text-14">{`${item.departure.from.railway_station_name} вокзал`}</p>
            </div>
            <div className="flex flex-col">
              <p>{item.departure.to.city.name}</p>
              <p className="text-slate-400 text-14">{`${item.departure.to.railway_station_name} вокзал`}</p>
            </div>
          </div>
          {/* ---------------------------------------- */}
          <div className="flex justify-between text-white border-t-1 border-slate-100 pt-8"></div>
          <div className="flex justify-between">
            <div className="flex gap-3">
              <div className="bg-[url('img/Subtract.png')]  bg-no-repeat bg-contain w-[32px] h-[26px]"></div>
              <p className="uppercase text-white text-16 font-bold">ОБРАТНО</p>
            </div>

            <p className="uppercase text-white text-16">{item.dateEnd}</p>
          </div>
          <div className="flex justify-between text-white">
            <p>№ Поезда</p>
            <p>{item.arrival.train.name}</p>
          </div>
          <div className="flex justify-between text-white">
            <p>Название</p>
            <p>{`${item.arrival.from.city.name}-${item.arrival.to.city.name}`}</p>
          </div>

          <div className="flex justify-between items-center gap-[10px]">
            <p className="uppercase text-white text-24 font-bold">{timeArrivalFrom.format("HH:mm")}</p>
            <div className=" flex flex-col justify-center">
              <p className="text-16 text-white">{`${dataDiffArrival.format("H:mm")}`}</p>
              <div className="bg-[url('img/arrow.svg')] rotate-180 w-[30px] bg-no-repeat bg-contain h-[20px]"></div>
            </div>
            <p className="uppercase text-white text-24 font-bold">{timeArrivalTo.format("HH:mm")}</p>
          </div>
          <div className="flex justify-between text-white ">
            <div className="flex flex-col">
              <p>{item.arrival.from.city.name}</p>
              <p className="text-slate-400 text-14">{`${item.arrival.from.railway_station_name} вокзал`}</p>
            </div>
            <div className="flex flex-col">
              <p>{item.arrival.to.city.name}</p>
              <p className="text-slate-400 text-14">{`${item.arrival.to.railway_station_name} вокзал`}</p>
            </div>
          </div>
          <div className="flex flex-col gap-3 border-t-1 border-slate-100 pt-8">
            <div className="flex gap-5 items-center">
              <div className="bg-[url('img/pass.png')]  bg-no-repeat bg-contain w-[22px] h-[20px]"></div>
              <p className="uppercase text-white text-16 font-bold">ПАССАЖИРЫ</p>
            </div>

            <div className="flex flex-col justify-between text-white">
              {persons.map((person, index) => {
                // setSumm((prev) => (prev += item.price[index]));
                console.log("persons is adult", typeof person.is_adult);
                return (
                  <div key={`${person.name}${index}`} className="flex justify-between text-white">
                    <p>{person.is_adult === "false" ? "Ребенок" : "Взрослый"}</p>
                    <div className="flex gap-3">
                      <p className="font-bold">{`${item.price[index]}`}</p>
                      <p>₽</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="flex justify-between text-white border-t-1 border-slate-100 pt-8 ">
            <p className="uppercase font-bold text-white text-24">ИТОГ</p>
            <div className="flex items-center gap-4 ">
              <p className="text-orange font-bold text-30">{PriceSum(item.price, persons.length)} </p>
              {/* <p className="text-orange font-bold text-24">{summ}</p> */}
              <p className="text-20">₽</p>
            </div>
          </div>
          <div className="h-6"></div>
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
}
