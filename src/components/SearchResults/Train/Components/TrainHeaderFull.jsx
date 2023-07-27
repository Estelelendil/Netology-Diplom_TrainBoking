import moment from "moment";
import React from "react";

export default function TrainHeaderFull({ item }) {
  const timeArrivalFrom = moment(item.arrival.from.datetime);
  const timeArrivalTo = moment(item.arrival.to.datetime);
  const timeDiffArrival = timeArrivalTo.diff(timeArrivalFrom);
  const dataDiffArrival = moment(timeDiffArrival);
  const timedepartureFrom = moment(item.departure.from.datetime);
  const timedepartureTo = moment(item.departure.to.datetime);
  const timeDiffdeparture = timedepartureTo.diff(timedepartureFrom);
  const dataDiffdeparture = moment(timeDiffdeparture);
  return (
    <div>
      <div className="h-[123px] flex justify-between items-center gap-[20px] w-full bg-[#F7F6F6] pl-[25px] px-[20px]">
        <div className="flex items-center gap-[15px] pl-5">
          <div className="bg-[url('img/orangeTrain.png')] w-[30px] h-[30px]"></div>
          <div className="flex flex-col">
            <div className="text-[#3E3C41] font-bold text-24 uppercase ">{item?.arrival.train.name}</div>
            <div className="text-left text-16">
              <p>{`${item.arrival.from.city.name} →`}</p>
              <p>{`${item.arrival.to.city.name} →`}</p>
            </div>
          </div>
        </div>
        <div className="flex  justify-between gap-[50px] items-center p-[15px] border-r-1 border-dotted border-[#E5E5E5] py-[30px]">
          <div className="flex flex-col">
            <p className="text-24 font-bold">{timedepartureFrom.format("HH:mm")}</p>
            {/* <p className="text-20">{item.departure.from.city.name}</p> */}
            <p className="text-16 text-[#928F94]">{item.departure.from.railway_station_name}</p>
          </div>
          <div className="bg-[url('img/arrow.svg')] w-[30px] bg-no-repeat bg-contain h-[20px]"></div>

          <div className="flex flex-col justify-center">
            <p className="text-24 font-bold">{timedepartureTo.format("HH:mm")}</p>
            {/* <p className="text-20">{item.departure.to.city.name}</p> */}
            <p className="text-16 text-[#928F94]">{item.departure.to.railway_station_name}</p>
          </div>
        </div>
        <div className="flex items-center gap-[10px] pr-8">
          <div className="bg-[url('img/clock.png')] w-[30px] bg-no-repeat bg-contain h-[20px]"></div>
          <div className=" flex flex-col justify-center">
            <p className="text-18 text-black">{`${dataDiffdeparture.format("H")} часа `}</p>
            <p className="text-18 text-black">{`${dataDiffdeparture.format("m")} минут `}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
