import React from "react";
import MyButton from "../UI/MyButton";

export default function FinalPage({ data, goBack }) {
  console.log("FINALPAGE", data);
  return (
    <div className="w-full">
      <h2>Итоговая проверка</h2>
      <MyButton
        className={" w-[250px] p-4 h-[100px]"}
        label="Назад"
        color="transparent"
        onClick={() => goBack()}
      ></MyButton>
    </div>
  );
}
