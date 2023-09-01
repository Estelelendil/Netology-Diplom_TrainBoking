import React, { useState } from "react";
import { useForm } from "react-hook-form";
import MyInput from "../../../UI/MyInput";
import classNames from "classnames";
import MyButton from "../../../UI/MyButton";
import FinalPage from "../../FinalPage";
import { isEmpty } from "lodash";

export default function UserCard({ goBack, persons, coachId, info, directionId, user, setUser }) {
  const { control, handleSubmit, setValue } = useForm(true);
  const [finalData, setFinalData] = useState({});
  const [payCash, setPayCash] = useState(
    isEmpty(finalData) ? true : finalData.user.payment_method || user?.payment_method
  );
  const [nextPage, setNextPage] = useState(false);
  const onSubmit = (data) => {
    console.log("submitData", data);
    if (data) {
      const seats = [];
      persons.map((item, index) => {
        const { document_number, document_series, ...persInfo } = item;
        seats.push({
          coach_is: coachId,
          person_info: { ...persInfo, document_data: `${document_series || ""} ${document_number}` },
          seat_number: info.chosenSeats[index],
          is_child: !item.is_adult,
          include_children_seat: false,
        });
        console.log("seats", seats);
        return null;
      });
      const finalObj = {
        user: { ...data, payment_method: payCash ? "cash" : "online" },
        departure: {
          route_direction_id: directionId,
          seats,
        },
      };
      setFinalData(finalObj);
      setUser({ ...data, payment_method: payCash ? "cash" : "online" });
      setNextPage(true);
    }
    // setUser({ ...data, payment_method: payCash ? "cash" : "online" });
  };
  const choosenCash = classNames({
    "p-2 border-1  rounded-[5px]  w-[25px] h-[25px] ": true,
    " border-slate-200 text-slate-700 ": !payCash,
    "flex items-center text-[#FFA800] text-14 border-[#FFA800] ": payCash,
  });
  const choosenOnline = classNames({
    "p-2 border-1 rounded-[5px] w-[25px] h-[25px]": true,
    " border-slate-200 text-slate-700 ": payCash,
    "flex items-center text-orange border-[#FFA800] text-center ": !payCash,
  });
  return (
    <>
      {nextPage ? (
        <FinalPage
          info={info}
          data={finalData}
          goBack={() => setNextPage(false)}
          goBackBack={() => {
            setNextPage(false);
            goBack();
          }}
        />
      ) : (
        <div>
          <div className="flex flex-col gap-[25px] border-1 border-slate-400 w-[830px] pb-6 ">
            <div className="bg-[#F9F9F9] flex justify-between items-center pr-8 h-[107px] w-full border-b-1 border-[#d9d9d9]">
              <h3 className="text-30 py-8 pl-8 ">{"Персональные данные"}</h3>
            </div>
            {/* <button className="text-gray">❌</button> */}
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-[25px] [&_span]:text-gray [&_span]:text-16 [&_span]:w-[150px] [&_span]:mb-[-15px] "
            >
              <div className="flex gap-[30px] h-[50px] w-full px-[30px]  mb-6">
                <MyInput
                  text="Имя"
                  control={control}
                  name="first_name"
                  defaultValue={finalData?.user?.first_name || user?.first_name}
                  required
                  setValue={setValue}
                />
                <MyInput
                  text="Фамилия"
                  defaultValue={finalData?.user?.last_name || user?.last_name}
                  control={control}
                  name="last_name"
                  required
                  setValue={setValue}
                />
                <MyInput
                  text="Отчество"
                  defaultValue={finalData?.user?.patronymic || user?.patronymic}
                  control={control}
                  name="patronymic"
                  setValue={setValue}
                />
              </div>
              <div className="flex flex-col w-1/2 gap-6 px-[30px]">
                <MyInput
                  text="Телефон"
                  defaultValue={finalData?.user?.phone || user?.phone}
                  control={control}
                  name="phone"
                  setValue={setValue}
                />

                <MyInput
                  text="E-mail"
                  defaultValue={finalData?.user?.email || user?.email}
                  control={control}
                  name="email"
                  setValue={setValue}
                />
              </div>
              <div className="bg-[#F9F9F9] flex justify-between items-center pr-8 h-[107px] w-full border-y-1 border-[#d9d9d9]">
                <h3 className="text-30 py-8 pl-8 ">{"Способ оплаты"}</h3>
              </div>
              <div className="pl-8">
                <div className="flex justify-start gap-3">
                  <div onClick={() => setPayCash(true)} className={choosenCash}>
                    <p className="align-middle">{payCash ? "✓" : ""}</p>
                  </div>
                  <p className={payCash ? "text-orange" : "text-slate-700"}>Наличными</p>
                </div>
              </div>
              <div className="border-t-1 border-slate-400 border-dotted py-8 pl-8">
                <div onClick={() => setPayCash(false)} className="flex justify-start gap-3">
                  <div className={choosenOnline}>
                    <p>{payCash ? " " : "✓"}</p>
                  </div>
                  <p className={!payCash ? "text-orange" : "text-slate-700"}>Онлайн</p>
                </div>
                <div className="flex gap-12 py-4 mt-4">
                  <p className="text-slate-700">Банковской картой</p>
                  <p className="text-slate-700">PayPal</p>
                  <p className="text-slate-700">Visa QIWI Wallet</p>
                </div>
              </div>
              <div className="flex justify-between mt-6 px-[30px]">
                <MyButton
                  className={" w-[250px] p-4 h-[100px]"}
                  label="Назад"
                  color="transparent"
                  onClick={() => goBack()}
                ></MyButton>
                <MyButton
                  className={" w-[250px] p-4 h-[100px]"}
                  label="купить билеты"
                  color="orange"
                  onClick={() => {
                    onSubmit();
                    // setNextPage(true);
                  }}
                ></MyButton>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
