import React, { useCallback } from "react";
import MyButton from "../UI/MyButton";
import TrainCard from "./Train/TrainCard";
import PersonInfo from "./Train/Components/PersonInfo";
import { PriceSum } from "../../helpers";
import { useNavigate } from "react-router";

export default function FinalPage({ data: dadata, goBack, info, goBackBack }) {
  // const [data, loading, error, post] = useLazyJsonFetch();
  const navigate = useNavigate();
  console.log("FINALPAGE", dadata);
  const fullName = dadata.user.first_name + "_" + dadata.user.patronymic;
  const sentData = useCallback(() => {
    fetch("https://students.netoservices.ru/fe-diplom/order", {
      method: "POST",
      body: JSON.stringify({ ...dadata }),
    }).then((res) => {
      if (res.status === 200) {
        navigate(`/result?price=${PriceSum(info.price, dadata.departure.seats)}&name=${fullName}`);
      }
      console.log("res", res);
    });
    // post("https://students.netoservices.ru/fe-diplom/order", dadata).then((result) => {
    //   console.log("SUCCESS post/result", result);
    // });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dadata]);
  return (
    <div className="w-full flex flex-col gap-[50px]">
      <div className="border-1 border-slate-300">
        <h2 className="h-[70px]  p-6 text-24">Поезд</h2>
        <TrainCard item={info} final />
      </div>
      <div className="border-1 border-slate-300">
        <h2 className="h-[70px] text-24 p-6 border-b-1 border-slate-300">Пассажиры</h2>
        <div className="flex justify-between">
          <div className="flex flex-col">
            {dadata.departure.seats.map((item, index) => {
              return <PersonInfo key={item.person_info.id} item={item.person_info} price={info.price[index]} />;
            })}
          </div>
          <div className="flex flex-col items-end self-end mb-4 mr-6 mt-4">
            <div className="flex gap-6 items-center">
              <h3 className=" text-24 ">Всего</h3>
              <div className="flex gap-4 items-center">
                <p className="text-24 font-bold">{PriceSum(info.price, dadata.departure.seats)}</p>
                <p className="text-24 text-slate-500">₽</p>
              </div>
            </div>
            <MyButton
              className={" w-[230px] p-4 h-[100px] font-bold"}
              label="Изменить"
              color="transparent"
              onClick={() => goBackBack()}
            ></MyButton>
          </div>
        </div>
      </div>
      <div className="border-1 border-slate-300">
        <h2 className="h-[70px] text-24 p-6 border-b-1 border-slate-300">Способ оплаты</h2>
        <div className="flex justify-between ">
          <p className="text-18 ml-8 mb-8 mt-6">{dadata.user.payment_method === "cash" ? "Наличными" : "Онлайн"}</p>
          <MyButton
            className={" w-[230px] p-4 h-[100px] font-bold  self-end mt-12 mr-6 mb-4"}
            label="Изменить"
            color="transparent"
            onClick={() => goBack()}
          ></MyButton>
        </div>
      </div>
      <div className="flex justify-between mt-6 mb-8">
        <MyButton
          className={" w-[250px] p-4 h-[100px]"}
          label="Назад"
          color="transparent"
          onClick={() => goBack()}
        ></MyButton>
        <MyButton
          className={" w-[250px] p-4 h-[100px]"}
          label="Подтвердить"
          color="orange"
          onClick={() => sentData()}
        ></MyButton>
      </div>
    </div>
  );
}
