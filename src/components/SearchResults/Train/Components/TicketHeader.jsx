import React from "react";
import MyInput from "../../../UI/MyInput";

export default function TicketHeader({ setSeatCount }) {
  return (
    <div>
      <h3 className=" h-[60px] rounded text-24 font-semibold py-2 px-4">Количесвто билетов</h3>
      <div className="flex w-full justify-between">
        <div className="bg-[#F7F6F6] w-full h-[192px] flex flex-col justify-start gap-3 p-7 border-b-1 border-gray/30">
          {/* <div className="bg-white border-1 border-gray p-2 w-[240px] rounded-[5px]">Взрослых-2</div> */}
          {/* <MyInput
            name="children"
            type="number"
            placeholder="Взрослых"
            className="bg-white border-1 border-[#928F94] p-2 w-[240px] rounded-[5px] h-[43px] mt-[-17px]"
            setValue={setSeatCount}
          ></MyInput> */}
          <select
            className="h-[50px] w-[240px] bg-white border-1 rounded border-[#d9d9d9] text-gray pl-[10px]"
            name="adult"
            // placeholder={`Взрослых-${seatCount.adult}`}
            // control={control}
            // defaultValue={3}
            onChange={(e) => {
              setSeatCount((prev) => {
                const newState = { ...prev };
                newState.adult = e.target.value;
                return newState;
              });
            }}
          >
            <option className="text-gray pl-10px" value={1}>
              Взрослых-1
            </option>
            <option className="text-gray pl-10px" value={2}>
              Взрослых-2
            </option>
            <option selected className="text-gray pl-10px" value={3}>
              Взрослых-3
            </option>
          </select>
          <p>Можно добавить 3 пассажиров </p>
        </div>
        <div className="p-2 border-1 border-orange w-full h-[192px] flex flex-col gap-3 ">
          {/* <MyInput
            name="children"
            type="number"
            placeholder="Детских"
            className="bg-white border-1 border-[#928F94] p-2 w-[240px] rounded-[5px] h-[43px] "
            setValue={setSeatCount}
          ></MyInput> */}
          <select
            className="h-[50px] w-[240px] bg-white border-1 rounded border-[#d9d9d9] text-slate-400 pl-[10px] mt-[17px]"
            name="children"
            // placeholder={`Взрослых-${seatCount.adult}`}
            // control={control}
            // defaultValue={3}
            onChange={(e) => {
              setSeatCount((prev) => {
                const newState = { ...prev };
                newState.children = e.target.value;
                return newState;
              });
            }}
          >
            <option className="text-gray pl-10px" value={0}>
              Детских-0
            </option>
            <option selected className="text-gray pl-10px" value={1}>
              Детских-1
            </option>
            <option className="text-gray pl-10px" value={2}>
              Детских-2
            </option>
            <option className="text-gray pl-10px" value={3}>
              Детских-3
            </option>
          </select>
          <p className="text-[#928F94]">
            Можно добавить еще 3 детей до 10 лет.Свое место в вагоне, как у взрослых, но дешевле в среднем на 50-65%
          </p>
        </div>
        <div className=" w-full h-[192px] flex flex-col justify-start  gap-3 p-7">
          {/* <MyInput
            name="baby"
            type="number"
            placeholder="Детских без места"
            className="bg-white border-1 border-[#928F94] p-2 w-[240px] rounded-[5px] h-[43px] mt-[-18px] "
            setValue={setSeatCount}
          ></MyInput> */}
          <select
            className="h-[50px] w-[240px] bg-white border-1 rounded border-[#d9d9d9] text-slate-400 pl-[10px] "
            name="baby"
            // placeholder={`Взрослых-${seatCount.adult}`}
            // control={control}
            // defaultValue={3}
            onChange={(e) => {
              setSeatCount((prev) => {
                const newState = { ...prev };
                newState.baby = e.target.value;
                return newState;
              });
            }}
          >
            <option selected className="text-slate-400 pl-10px" value={0}>
              Детских без места-0
            </option>
            <option className="text-slate-400 pl-10px" value={1}>
              Детских без места-1
            </option>
            <option className="text-slate-400 pl-10px" value={2}>
              Детских без места-2
            </option>
            <option className="text-slate-400 pl-10px" value={3}>
              Детских без места-3
            </option>
          </select>
          {/* <div className="bg-white border-1 border-[#928F94] p-2 w-[240px] rounded-[5px] text-[#928F94]">
            Детских "без места"-0
          </div> */}
          {/* <p className="text-[#928F94]">
            Можно добавить еще 3 детей до 10 лет.Свое место в вагоне, как у взрослых, но дешевле в среднем на 50-65%
          </p> */}
        </div>
      </div>
    </div>
  );
}
