import React from "react";
import HowItWorkStep from "./HowItWorkStep";

export default function HowItWorksPage() {
  return (
    <div className="w-full h-[637px] bg-[url('img/how_it_works.png')] bg-cover flex flex-col ">
      <div className="flex justify-between px-[279px] mt-[100px]">
        <h1 className="text-white text-36 uppercase">Как это работает</h1>
        <button className="w-[325px] h-[60px] border-1 border-white rounded text-white text-24">Узнать больше</button>
      </div>
      <div className="flex gap-[201px] mx-auto mt-[97px]">
        <HowItWorkStep
          step="step-1"
          text="Удобный заказ 
на сайте"
        />
        <HowItWorkStep step="step-2" text="Нет необходимости ехать в офис" />
        <HowItWorkStep
          step="step-3"
          text="Огромный выбор
направлений"
        />
        {/* <div className="bg-[url('img/step1.png')] bg-cover w-[162px] h-[162px]"></div> */}
      </div>
    </div>
  );
}
