import { useState } from 'react';
  import React from 'react';
import Calendar from 'react-calendar';
import Button from '../UI/Button';
  import Input from '../UI/Input';
import InputDropdown from '../UI/InputDropdown';

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
    const submitSearch = (form) => {}
    const [dateFrom, setDateFrom] = useState(new Date());
    return (
      // {data&& !loading ? <div>{data.status}</div>:null}
      // {error ? <dv>{error}</dv>:null}
      <div className=' h-[574px] bg-black/80 px-[24px] pt-[79px]'>
        <div className='flex flex-col'>
          <h2 className='text-white'>Направление</h2>
          <div className='flex gap-[40px] w-full'>
          {/* <Input name='citySearch' placeholder='Откуда'setValue={setCitySearch} /> */}
        {/* {loading ? <Loading/>:null} */}
            {/* {data?<Select name='cityfrom'  options={data} setValue={setSelectionCty} placeholder='Откуда'/>:null} */}
            <InputDropdown placeholder='Откуда' name='cityfrom' url='https://netology-trainbooking.netoservices.ru/routes/cities?name='/>
            <InputDropdown placeholder='Куда' name='cityto' url='https://netology-trainbooking.netoservices.ru/routes/cities?name='/>
            {/* <Select name='cityto' placeholder='Куда'/> */}
          </div>
        </div>
        <div className='flex flex-col'>
          <h2 className='text-white'>Дата</h2>
          <div className='flex gap-[40px] w-full'>
          {/* <Calendar onChange={setDateFrom} value={dateFrom} /> */}
            <Input name='dateto' placeholder='ДД/ММ/ГГ'/>
          </div>
        </div>
        <Button label='найти билеты' onClick={submitSearch} color='orange'/>
      </div>
    );
  }
  