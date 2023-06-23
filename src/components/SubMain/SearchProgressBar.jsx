import React from "react";
import ArrowProgressBar from "./ArrowProgressBar";

export default function SearchProgressBar({ searchStep }) {
  const steps = ["Билеты", "Пассажиры", "Оплата", "Проверка"];
  return (
    <div className="w-full h-[98px] flex bg-[#3E3C41]">
      {steps.map((step, index) => (
        <ArrowProgressBar
          key={step}
          number={index + 1}
          text={step}
          color={index + 1 <= searchStep ? "orange" : "gray"}
        />
      ))}
    </div>
  );
}
