import React from "react";
import { useForm } from "react-hook-form";
import { useLazyJsonFetch } from "../../utils";
import Button from "../UI/Button";
import InputCalendar from "../UI/InputCalendar";
import InputDropdown from "../UI/InputDropdown";

export default function SearchMain() {
  // const [citySearch, setCitySearch]=useState('')
  // console.log('state citySearch',citySearch)

  // const[selectionCity, setSelectionCty]=useState()
  // console.log('selectionCity', selectionCity)
  // console.log(data, loading, error)
  // useEffect(()=>{
  // },[citySearch])
  //     const cities = [{
  //       value:'moscow',
  //       text:'Москва'
  //     },
  //   {
  //     value:'novosibirsk',
  //     text:'Новосибирск'
  //   },
  // {
  //   value:'kazan',
  //   text:'Казань'
  // },
  // {
  //   value:'saintPetersburg',
  //   text:'Санкт-Петербург'
  // }]
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
    <form
      onSubmit={handleSubmit(submitSearch)}
      className="  bg-black/80 flex flex-col gap-[80px] px-[24px] pt-[79px] pb-[52px]"
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
            name="from_sity_id"
            url="https://netology-trainbooking.netoservices.ru/routes/cities?name="
          />
          <InputDropdown
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
          <InputCalendar required name="date_start" placeholder="ДД/ММ/ГГ" />
          <InputCalendar required name="date_end" placeholder="ДД/ММ/ГГ" />
          {/* <Input name='dateto' placeholder='ДД/ММ/ГГ'/> */}
        </div>
      </div>
      <Button
        className="w-[323px] self-end text-24 mr-[30px]"
        label="найти билеты"
        onClick={submitSearch}
        color="orange"
      />
    </form>
  );
}
