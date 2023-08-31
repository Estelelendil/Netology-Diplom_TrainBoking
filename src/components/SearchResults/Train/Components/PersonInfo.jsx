import React from "react";

export default function PersonInfo({ item, price }) {
  console.log("PERSON INFO", item);
  return (
    <div className="flex ">
      <div className="flex gap-10 p-8">
        <div className="flex flex-col gap-4">
          <div className="bg-[url('img/passenger.png')] w-[68px] h-[68px]"></div>
          <p>{item.is_adult === "false" ? "Детский" : "Взрослый"}</p>
        </div>
        <div className="flex flex-col [&_p]:text-14 [&_p]:text-slate-500 justify-between">
          <h4>{`${item.first_name} ${item.last_name} ${item.patronymic || ""}`}</h4>
          <p>{`Пол ${item.gender === "true" ? "мужской" : "женский"}`}</p>
          <p>{`Дата рождения ${item.birthday}`}</p>
          <p>{`${item.document_type === "свидетельство" ? "Свидетельство о рождении" : "Паспорт РФ"} ${
            item.document_data
          }`}</p>
        </div>
      </div>
    </div>
  );
}
