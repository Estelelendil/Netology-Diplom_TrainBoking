import React from "react";

export default function TrainHeader({ item }) {
  return (
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
  );
}
