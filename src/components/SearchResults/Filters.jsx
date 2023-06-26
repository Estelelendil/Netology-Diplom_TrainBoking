import React from "react";
import InputCalendar from "../UI/InputCalendar";
import { useForm } from "react-hook-form";
import ToggleSwitch from "../UI/ToggleSwitch";

export default function Filters({ setParams, params }) {
  const { control, handleSubmit } = useForm({ mode: "onChange" });
  const submitSearch = (data) => {
    console.log("submitSearch", data);
    setParams({ ...params, ...data });
  };

  return (
    <div className="w-[360px] h-[1012px] bg-[#3E3C41] mt-9">
      <form onSubmit={handleSubmit(submitSearch)}>
        <div className="flex flex-col justify-start items-center border-b-1 border-[#E5E5E5] pb-[20px]">
          {/* <Calendar onChange={setDateFrom} value={dateFrom} /> */}
          <h2 className="text-white text-30 self-start pl-[20px]">Дата поездки</h2>
          <InputCalendar control={control} required name="date_start" placeholder="ДД/ММ/ГГ" />
          <h2 className="text-white text-30 self-start pl-[20px]">Дата возвращения</h2>
          <InputCalendar control={control} required name="date_end" placeholder="ДД/ММ/ГГ" />
          {/* <Input name='dateto' placeholder='ДД/ММ/ГГ'/> */}
        </div>
        <div className="flex flex-col gap-[164x]">
          <ToggleSwitch name="have_second_class" control={control} defaultValue={false}>
            <div className="flex w-full justify-start gap-[34px] items-center ">
              <div className="bg-[url('img/secondClass.svg')] w-[17px] h-[17px] bg-no-repeat bg-contain"></div>
              <p>Купе</p>
            </div>
          </ToggleSwitch>
          <ToggleSwitch name="have_third_class" control={control} defaultValue={false}>
            <div className="flex w-full justify-start gap-[34px] items-center ">
              <div className="bg-[url('img/thirdClass.svg')] w-[17px] h-[17px] bg-no-repeat bg-contain"></div>
              <p>Плацкарт</p>
            </div>
          </ToggleSwitch>
          <ToggleSwitch name="have_fourth_class" control={control} defaultValue={false}>
            <div className="flex w-full justify-start gap-[34px] items-center ">
              <div className="bg-[url('img/seatClass.png')] w-[14px] h-[23px] bg-no-repeat bg-contain"></div>
              <p>Сидячие</p>
            </div>
          </ToggleSwitch>
          <ToggleSwitch name="have_first_class" control={control} defaultValue={false}>
            <div className="flex w-full justify-start gap-[34px] items-center ">
              <div className="bg-[url('img/firstClass.svg')] w-[20px] h-[20px] bg-no-repeat bg-contain"></div>
              <p>Люкс</p>
            </div>
          </ToggleSwitch>
          <ToggleSwitch name="have_wifi" control={control} defaultValue={false}>
            <div className="flex w-full justify-start gap-[34px] items-center ">
              <div className="bg-[url('img/wifi.svg')] w-[20px] h-[20px] bg-no-repeat bg-contain"></div>
              <p>Wi-Fi</p>
            </div>
          </ToggleSwitch>
          <ToggleSwitch name="have_express" control={control} defaultValue={false}>
            <div className="flex w-full justify-start gap-[34px] items-center ">
              <div className="bg-[url('img/express.svg')] w-[20px] h-[20px] bg-no-repeat bg-contain"></div>
              <p>Экспресс</p>
            </div>
          </ToggleSwitch>
        </div>
        <button>Кусь</button>
      </form>
    </div>
  );
}
