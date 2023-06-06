import classNames from 'classnames';
import React, { useState } from 'react';
import OutsideClick from 'react-outside-click-handler-lite';
import Calendar from 'react-calendar';

export default function InputCalendar({placeholder, required, name, text}) {
    const inputClassName=classNames({
        'p-15 border-[1px] border-[#d9d9d9] rounded-[5px]  bg-white':true
    })
    const [value, setValue]=useState()
    const [openCalendar, setOpenCalendar]=useState(false)
    // const [data, loading, error] = useJsonFetch((value && url) ?`${url}${value}`:null, {});
    const [date, setDate]=useState(new Date())
  return (
    <div className='flex flex-col gap-[17px] w-[325px] relative'>
    <p className='w-[400px] text-white text-24'>{text}</p>
    <OutsideClick onOutsideClick={() => { setOpenCalendar(false)
    setDate(null)
    }}>
    <input required={required} name={name} className={inputClassName} onClick={()=>setOpenCalendar(!openCalendar)} value={date&&date}  onChange={(e)=>setValue(e.target.value)}  placeholder={placeholder}  />
    {openCalendar? <Calendar className='absolute top-[80px] left-[0px] bg-white p-2 rounded' onSelect={setDate} value={value}/>:null}
    </OutsideClick>
  </div>
  );
}