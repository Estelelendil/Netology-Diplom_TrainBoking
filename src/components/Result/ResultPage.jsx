import React, { useState } from "react";
import { useQuery } from "../../utils";
import { getRandomInt } from "../../helpers";
import MyButton from "../UI/MyButton";
import { useNavigate } from "react-router";

function Stars() {
  const [star, setStar] = useState(-1);

  const stars = [0, 1, 2, 3, 4];
  return (
    <div className="flex gap-2">
      {stars.map((item, index) => {
        return (
          <div
            onClick={() => setStar(index)}
            className={
              index <= star
                ? "w-[48px] h-[48px] bg-[url('img/firstClass.svg')] bg-no-repeat bg-contain"
                : "w-[48px] h-[48px] bg-[url('img/emptyStar.png')] bg-no-repeat bg-contain"
            }
          ></div>
        );
      })}
    </div>
  );
}
export default function ResultPage() {
  const navigate = useNavigate();
  let query = useQuery();
  const price = query.get("price");
  const name = query.get("name");
  const correctName = name.split("_");
  return (
    <div className="fixed w-full h-full flex items-center justify-center z-20">
      <div className=" mt-[80px] h-[913px] w-[1104px] bg-white flex flex-col justify-between">
        <div className="flex justify-between px-10 py-8">
          <p className="text-36 font-semibold">{`№ заказа ${getRandomInt(100, 1000)}AA`}</p>
          <div className="flex gap-4 items-center">
            <p className="text-32 text-slate-400">cумма</p>
            <p className="text-36 font-bold">{price}</p>
            <p className="text-36 text-slate-400">₽</p>
          </div>
        </div>
        <div className="bg-[#F4F3F6] border-y-1 border-slate-300 flex justify-center gap-14 py-6">
          <div className="flex flex-col">
            <div className="bg-[url('img/info1.png')] w-[155px] h-[155px]"></div>
            <p className="w-[200px]">билеты будут отправлены на ваш e-mail</p>
          </div>
          <div className="flex flex-col">
            <div className="bg-[url('img/info2.png')] w-[155px] h-[155px]"></div>
            <p className="w-[200px]">распечатайте и сохраняйте билеты до даты поездки</p>
          </div>
          <div className="flex flex-col">
            <div className="bg-[url('img/info3.png')] w-[155px] h-[155px]"></div>
            <p className="w-[200px]">предьявите распечатанные билеты при посадке</p>
          </div>
        </div>
        <div className="flex flex-col items-center gap-10 py-14 w-full justify-center">
          <h1 className="text-32 font-bold ">{` ${correctName[0]} ${correctName[1] || ""}!`}</h1>
          <p className="text-22 w-3/4">
            Ваш заказ успешно оформлен. В ближайшее время с вами свяжется наш оператор для подтверждения.
          </p>
          <p className="text-22 w-3/4 font-semibold text-center">
            Благодарим Вас за оказанное доверие и желаем приятного путешествия!
          </p>
        </div>
        <div className="flex h-[140px] bg-orange justify-between items-center px-10">
          <div className="flex items-center gap-4">
            <p className="text-22">Оцените сервис</p>
            <Stars />
          </div>
          <MyButton
            className={" w-[250px] p-4 h-[100px] !border-black font-bold"}
            label="Вернуться на главную"
            color="transparent"
            onClick={() => navigate("/")}
          ></MyButton>
        </div>
      </div>
    </div>
  );
}
