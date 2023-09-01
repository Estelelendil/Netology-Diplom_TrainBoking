import React, { useState } from "react";
import { useForm } from "react-hook-form";
import classNames from "classnames";
import MyInput from "../../../UI/MyInput";
import InputCalendar from "../../../UI/InputCalendar";
import MyButton from "../../../UI/MyButton";

export default function PassengersCard({ setPerson, person, index, removePers, addPassenger }) {
  const {
    control,
    handleSubmit,
    data,
    setValue,
    // register,
    // formState: { errors, isValid },
  } = useForm(true);
  const [gender, setGender] = useState(person.gender || "true");
  const [adult, setAdult] = useState(person.is_adult || "true");

  const onSubmit = (data) => {
    // if (errors) {
    //   alert(errors);
    //   console.log("Errors", errors);
    // }
    if (data) {
      console.log("Submit pas data", data, person.id);
      setPerson({ ...data, gender, id: person.id, document_type: adult === "true" ? "паспорт" : "свидетельство" });
      addPassenger();
    }
  };

  console.log("person gender", gender, person.gender);
  const checkboxManClass = classNames({
    "w-[100px] h-[55px] rounded-l-lg border-l-1 border-y-1 border-[#d9d9d9] text-center pt-3 font-bold text-20": true,
    "bg-orange": gender === "true",
  });
  const checkboxWomanClass = classNames({
    "w-[100px] h-[55px] rounded-r-lg border-y-1 border-r-1 border-[#d9d9d9] text-center pt-3 font-bold text-20": true,
    "bg-orange": gender === "false",
  });
  console.log("PassengersCard data", data);
  return (
    <div className="flex flex-col gap-[25px] border-1 border-slate-400 w-[830px] h-[730px] ">
      <div className="bg-[#F9F9F9] flex justify-between items-center pr-8 h-[107px] w-full border-b-1 border-[#d9d9d9]">
        <h3 className="text-30 py-8 pl-8 ">{`Пассажир ${index + 1}`}</h3>
        <button className="text-gray" onClick={() => removePers(person.id)}>
          ❌
        </button>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-[25px] [&_span]:text-gray [&_span]:text-16 [&_span]:w-[150px] [&_span]:mb-[-15px] "
      >
        <select
          className="h-[50px] w-[240px] bg-white border-1 rounded border-[#d9d9d9] text-gray pl-[10px] mx-[30px]"
          name="is_adult"
          control={control}
          defaultValue={person.is_adult || "true"}
          onChange={(e) => {
            setValue("is_adult", e.target.value);
            setAdult(e.target.value === "true" ? "true" : "false");
          }}
        >
          <option disabled={index === 0} className="text-gray pl-10px" value="false">
            Детский
          </option>
          <option className="text-gray pl-10px" selected value="true">
            Взрослый
          </option>
        </select>
        <div className="flex gap-[30px] h-[50px] px-[30px]">
          <MyInput
            text="Имя"
            control={control}
            name="first_name"
            required
            defaultValue={person?.first_name}
            setValue={setValue}
          />
          <MyInput
            text="Фамилия"
            control={control}
            name="last_name"
            defaultValue={person?.last_name}
            required
            setValue={setValue}
          />
          <MyInput
            text="Отчество"
            control={control}
            defaultValue={person?.patronymic}
            name="patronymic"
            setValue={setValue}
          />
        </div>
        <div className="flex items-center gap-[30px] mt-[30px] px-[30px]">
          <div className="flex flex-col gap-[15px]">
            <span className="w-[150px] text-gray text-16">Пол</span>
            <div className="flex">
              <div className={checkboxManClass} onClick={() => setGender("true")}>
                М
              </div>

              <div className={checkboxWomanClass} onClick={() => setGender("false")}>
                Ж
              </div>
            </div>
          </div>
          <InputCalendar
            defaultValue={person?.birthday}
            control={control}
            text="Дата рождения"
            required
            name="birthday"
            placeholder="ДД/ММ/ГГ"
          />
        </div>
        <div>
          <div className="flex gap-[30px] border-t-1 border-slate-200 pt-8 mt-8 px-[30px]">
            <div className="flex flex-col gap-[15px]">
              <span className="w-[150px] text-gray text-16">Тип документа</span>
              {adult === "false" ? (
                <select
                  defaultValue={"свидетельство"}
                  className="h-[55px] w-[240px] bg-white border-1 rounded border-[#d9d9d9] text-gray pl-[10px]"
                  name="document_type"
                  control={control}
                  onChange={(e) => setValue("document_type", e.target.value)}
                >
                  <option className="text-gray pl-10px" selected value="свидетельство">
                    свидетельство о рождении
                  </option>
                </select>
              ) : (
                <select
                  required
                  defaultValue={"паспорт"}
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
            {adult === "true" && (
              <MyInput
                text="Cерия"
                min={4}
                max={4}
                defaultValue={person?.document_series}
                placeholder="ХХХХ"
                type={"number"}
                control={control}
                required
                name="document_series"
                setValue={setValue}
              />
            )}
            <MyInput
              text="Номер"
              min={6}
              max={6}
              // {...register("document_number", { required: true, minLength: 6 })}
              placeholder="ХХХХХХ"
              control={control}
              type="number"
              required
              defaultValue={person?.document_number || person.document_data}
              name="document_number"
              setValue={setValue}
            />
          </div>
        </div>
        <div className="w-full border-t-1 border-slate-200 pt-8 flex justify-end mt-5">
          <div className="w-[250px] self-end ">
            <MyButton
              className={"h-[52px] py-1"}
              label="Сохранить пассажира"
              color="transparent"
              onClick={() => onSubmit()}
            ></MyButton>
          </div>
        </div>
      </form>
    </div>
  );
}
