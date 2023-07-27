import moment from "moment";
import React from "react";

export default function TrainMain({ item }) {
  const timeArrivalFrom = moment(item.arrival.from.datetime);
  const timeArrivalTo = moment(item.arrival.to.datetime);
  const timeDiffArrival = timeArrivalTo.diff(timeArrivalFrom);
  const dataDiffArrival = moment(timeDiffArrival);
  const timedepartureFrom = moment(item.departure.from.datetime);
  const timedepartureTo = moment(item.departure.to.datetime);
  const timeDiffdeparture = timedepartureTo.diff(timedepartureFrom);
  const dataDiffdeparture = moment(timeDiffdeparture);
  return (
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
  );
}
