import React from "react";
import InputCalendar from "../UI/InputCalendar";
import { useForm } from "react-hook-form";
import ToggleSwitch from "../UI/ToggleSwitch";
import MyRangeSlider from "../UI/MyRangeSlider";
import classNames from "classnames";

export default function Filters({ setParams, params, pass }) {
  const { control, handleSubmit } = useForm({ mode: "onChange" });
  const submitSearch = (data) => {
    console.log("submitSearch data", data);
    const newData = { ...data };
    delete newData.price;
    newData.price_from = data.price[0];
    newData.price_to = data.price[1];
    console.log("submitSearch newData", newData);
    setParams({ ...params, ...newData });
  };
  const mainClass = classNames({
    "w-[360px]  bg-[#3E3C41] mt-9 px-[20px] pt-[10px]": true,
    "h-[890px]": !pass,
    "h-[1500x]": pass,
  });
  return (
    <div className={mainClass}>
      <form onSubmit={handleSubmit(submitSearch)}>
        <div className="flex flex-col justify-start items-center border-b-1 border-[#E5E5E5] pb-[20px]">
          {/* <Calendar onChange={setDateFrom} value={dateFrom} /> */}
          <h2 className="text-white text-30 self-start pl-[10px] pt-[10px]">Дата поездки</h2>
          <InputCalendar control={control} required name="date_start" placeholder="ДД/ММ/ГГ" />
          <h2 className="text-white text-30 self-start pl-[10px] pt-[10px]">Дата возвращения</h2>
          <InputCalendar control={control} required name="date_end" placeholder="ДД/ММ/ГГ" />
          {/* <Input name='dateto' placeholder='ДД/ММ/ГГ'/> */}
        </div>
        <div className="flex flex-col gap-[164x] border-b-1 border-[#E5E5E5] py-3">
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
        <div className="py-3 flex flex-col text-white border-b-1 border-[#E5E5E5]">
          <h2 className="text-white text-30 self-start pl-[10px] pt-[10px]">Стоимость</h2>
          <MyRangeSlider control={control} name="price" min={100} max={17000} />
        </div>
        <div className=" flex flex-col">
          <div className="flex items-center py-3 justify-between border-b-1 border-[#E5E5E5] pr-5">
            <div className="flex items-center justify-start py-3">
              <div className="bg-[url('img/Subtract.png')] w-[30px] h-[25px] bg-no-repeat bg-contain"></div>
              <h2 className="text-white text-30 font-bold self-start pl-[10px] ">Туда</h2>
            </div>
            <button className="border-1 border-white rounded text-white h-[20px] w-[20px] text-center align-middle leading-4">
              +
            </button>
          </div>
          <div className="flex items-center justify-between py-3 pr-5">
            <div className="flex items-center justify-start py-3">
              <div className="bg-[url('img/Subtract.png')] w-[30px] h-[25px] bg-no-repeat bg-contain rotate-180"></div>
              <h2 className="text-white text-30 font-bold self-start pl-[10px] ">Обратно</h2>
            </div>
            <button className="border-1 border-white rounded text-white h-[20px] w-[20px] text-center align-middle leading-4">
              +
            </button>
          </div>
        </div>

        <button>Кусь</button>
      </form>
    </div>
  );
}
