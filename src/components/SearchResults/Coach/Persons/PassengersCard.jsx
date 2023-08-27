import React, { useState } from "react";
import { useForm } from "react-hook-form";
import classNames from "classnames";
import MyInput from "../../../UI/MyInput";
import InputCalendar from "../../../UI/InputCalendar";
import MyButton from "../../../UI/MyButton";

export default function PassengersCard({ setPerson, person, index }) {
  const { control, handleSubmit, data, setValue } = useForm(true);
  //   const [child, setChild] = useState(false);
  // let person = persons.length !== 0 ? persons[index] : undefined;
  const [gender, setGender] = useState(person?.gender || true);
  const [adult, setAdult] = useState(true);
  const onSubmit = (data) => {
    // console.log("FORM DATA", data);
    if (data) setPerson({ ...data, gender });
  };
  // const inputClass = classNames({
  //   "h-[50px] w-[280px] bg-white border-1 rounded border-[#d9d9d9]": true,
  // });
  const checkboxManClass = classNames({
    "w-[100px] h-[55px] rounded-l-lg border-l-1 border-y-1 border-[#d9d9d9] text-center pt-3 font-bold text-20": true,
    "bg-orange": gender,
  });
  const checkboxWomanClass = classNames({
    "w-[100px] h-[55px] rounded-r-lg border-y-1 border-r-1 border-[#d9d9d9] text-center pt-3 font-bold text-20": true,
    "bg-orange": !gender,
  });
  console.log("data", data);
  return (
    <div className="flex flex-col gap-[25px] border-1 border-slate-400 w-[830px] h-[730px] ">
      <div className="bg-[#F9F9F9] h-[107px] w-full border-b-1 border-[#d9d9d9]">
        <h3 className="text-30 py-8 pl-8 ">{`Пассажир ${person.id}`}</h3>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-[25px] [&_span]:text-gray [&_span]:text-16 [&_span]:w-[150px] [&_span]:mb-[-15px] px-[30px]"
      >
        <select
          className="h-[50px] w-[240px] bg-white border-1 rounded border-[#d9d9d9] text-gray pl-[10px]"
          name="is_adult"
          control={control}
          onChange={(e) => {
            setValue("is_adult", e.target.value);
            setAdult(e.target.value === "true" ? true : false);
          }}
        >
          <option className="text-gray pl-10px" value="false">
            Детский
          </option>
          <option className="text-gray pl-10px" selected value="true">
            Взрослый
          </option>
        </select>
        {/* <input className={inputClass} type="text" placeholder="Имя" name="name" control={control} /> */}
        <div className="flex gap-[30px] h-[50px] ">
          <MyInput text="Имя" control={control} name="first_name" required setValue={setValue} />
          <MyInput text="Фамилия" control={control} name="last_name" required setValue={setValue} />
          <MyInput text="Отчество" control={control} name="patronymic" setValue={setValue} />
        </div>
        <div className="flex items-center gap-[30px] mt-[30px]">
          <div className="flex flex-col gap-[15px]">
            <span className="w-[150px] text-gray text-16">Пол</span>
            <div className="flex">
              <div className={checkboxManClass} onClick={() => setGender(true)}>
                М
              </div>

              <div className={checkboxWomanClass} onClick={() => setGender(false)}>
                Ж
              </div>
            </div>
          </div>
          <InputCalendar control={control} text="Дата рождения" required name="birthday" placeholder="ДД/ММ/ГГ" />
        </div>
        <div>
          <div className="flex gap-[30px] border-t-1 border-slate-200 pt-8 mt-8">
            <div className="flex flex-col gap-[15px]">
              <span className="w-[150px] text-gray text-16">Тип документа</span>
              {!adult ? (
                <select
                  className="h-[55px] w-[240px] bg-white border-1 rounded border-[#d9d9d9] text-gray pl-[10px]"
                  name="document_type"
                  control={control}
                  onChange={(e) => setValue("document_type", e.target.value)}
                >
                  <option className="text-gray pl-10px" selected value="паспорт">
                    свидетельство о рождении
                  </option>
                  {/* <option className="text-gray pl-10px" value="что-то еще">
                      Другое
                    </option> */}
                </select>
              ) : (
                <select
                  className="h-[55px] w-[240px] bg-white border-1 rounded border-[#d9d9d9] text-gray pl-[10px]"
                  name="document_type"
                  control={control}
                  onChange={(e) => setValue("document_type", e.target.value)}
                >
                  <option className="text-gray pl-10px" selected value="паспорт">
                    Паспорт РФ
                  </option>
                  <option className="text-gray pl-10px" value="что-то еще">
                    Другое
                  </option>
                </select>
              )}
            </div>
            {adult && (
              <MyInput
                text="Cерия"
                placeholder="ХХХХ"
                control={control}
                required
                name="document_data"
                setValue={setValue}
              />
            )}
            <MyInput
              text="Номер"
              placeholder="ХХХХХХ"
              control={control}
              required
              name="document_data"
              setValue={setValue}
            />
          </div>
        </div>
        {/* <button>Следующий пассажир</button> */}
        <div className="w-full border-t-1 border-slate-200 pt-8 flex justify-end mt-5">
          <div className="w-[250px] self-end ">
            <MyButton
              className={"h-[52px] py-1"}
              label="Следующий пассажир"
              color="transparent"
              onClick={() => onSubmit()}
            ></MyButton>
          </div>
        </div>
      </form>
    </div>
  );
}
