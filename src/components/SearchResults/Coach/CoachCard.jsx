import React from "react";
import { useNavigate } from "react-router";

export default function CoachCard({ item }) {
  console.log("CoachCard", item);
  const hist = useNavigate();
  return (
    <div className="border-2 border-gray/20 h-[161px]">
      Карта Вагона
      <div className="flex flex-col w-[959px] gap-[20px]">{item.coach._id}</div>
    </div>
  );
}
