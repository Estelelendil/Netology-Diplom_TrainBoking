import React from "react";

export default function TicketHeader() {
  return (
    <div>
      <h3 className=" h-[60px] rounded text-24 font-semibold py-2 px-4">Количесвто билетов</h3>
      <div className="flex w-full justify-between">
        <div className="bg-[#F7F6F6] w-full h-[192px] flex flex-col items-center gap-3 p-7 border-b-1 border-gray/30">
          <div className="bg-white border-1 border-gray p-2 w-[240px] rounded-[5px]">Взрослых-2</div>
          <p>Можно добавить еще 3 пассажиров </p>
        </div>
        <div className="border-1 border-orange w-full h-[192px] flex flex-col items-center gap-3 p-7">
          <div className="bg-white border-1 border-[#928F94] p-2 w-[240px] rounded-[5px]">Детских-1</div>
          <p className="text-[#928F94]">
            Можно добавить еще 3 детей до 10 лет.Свое место в вагоне, как у взрослых, но дешевле в среднем на 50-65%
          </p>
        </div>
        <div className=" w-full h-[192px] flex flex-col items-center gap-3 p-7">
          <div className="bg-white border-1 border-[#928F94] p-2 w-[240px] rounded-[5px] text-[#928F94]">
            Детских "без места"-0
          </div>
          {/* <p className="text-[#928F94]">
            Можно добавить еще 3 детей до 10 лет.Свое место в вагоне, как у взрослых, но дешевле в среднем на 50-65%
          </p> */}
        </div>
      </div>
    </div>
  );
}
