import { useState } from "react";
import React from "react";
import { useForm } from "react-hook-form";
import { useLazyJsonFetch } from "../../utils";
import Button from "../UI/Button";
import InputCalendar from "../UI/InputCalendar";
import InputDropdown from "../UI/InputDropdown";

export default function SearchMain() {
  const [searchFirstView, setSearchFirstView] = useState(true);
  const { control, handleSubmit } = useForm();
  const [data, loading, error, callback] = useLazyJsonFetch();
  const submitSearch = (data) => {
    console.log("data submit", data);
    callback(
      "https://netology-trainbooking.netoservices.ru/routes",
      new URLSearchParams({
        ...data,
      })
    );
  };
  // const [dateFrom, setDateFrom] = useState(new Date());
  return (
    // {data&& !loading ? <div>{data.status}</div>:null}
    // {error ? <dv>{error}</dv>:null}
    <>
      {searchFirstView ? (
        <form
          onSubmit={handleSubmit(submitSearch)}
          className="  bg-black/80 flex flex-col gap-[50px] px-[24px] pt-[79px] pb-[52px]"
        >
          <div className="flex flex-col">
            <h2 className="text-white text-30">Направление</h2>
            <div className="flex justify-between">
              {/* <Input name='citySearch' placeholder='Откуда'setValue={setCitySearch} /> */}
              {/* {loading ? <Loading/>:null} */}
              {/* {data?<Select name='cityfrom'  options={data} setValue={setSelectionCty} placeholder='Откуда'/>:null} */}
              <InputDropdown
                control={control}
                placeholder="Откуда"
                required
                name="from_сity_id"
                url="https://netology-trainbooking.netoservices.ru/routes/cities?name="
              />
              <InputDropdown
                control={control}
                placeholder="Куда"
                required
                name="to_city_id"
                url="https://netology-trainbooking.netoservices.ru/routes/cities?name="
              />
              {/* <Select name='cityto' placeholder='Куда'/> */}
            </div>
          </div>
          <div className="flex flex-col">
            <h2 className="text-white text-30">Дата</h2>
            <div className="flex justify-between">
              {/* <Calendar onChange={setDateFrom} value={dateFrom} /> */}
              <InputCalendar control={control} required name="date_start" placeholder="ДД/ММ/ГГ" />
              <InputCalendar control={control} required name="date_end" placeholder="ДД/ММ/ГГ" />
              {/* <Input name='dateto' placeholder='ДД/ММ/ГГ'/> */}
            </div>
          </div>
          <Button
            className="w-[286px] self-end text-24 mt-[20px] mr-[35px]"
            label="найти билеты"
            // onClick={submitSearch}
            type="submit"
            color="orange"
          />
        </form>
      ) : (
        <form></form>
      )}
    </>
  );
}
