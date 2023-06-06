import classNames from 'classnames';
import React, { useState } from 'react';
import useJsonFetch from '../../utils';
import Dropdown from './Dropdown';
import Loading from './Loading';
import OutsideClick from 'react-outside-click-handler-lite';

export default function InputDropdown({placeholder, url, required, name, text}) {
    const inputClassName=classNames({
        'p-15 border-[1px] border-[#d9d9d9] rounded-[5px]  bg-white':true
    })
    const [value, setValue]=useState()
    const [openDrop, setOpenDrop]=useState(false)
    const [data, loading, error] = useJsonFetch((value && url) ?`${url}${value}`:null, {});
    console.log(data, loading, error)
    const [city, setCity]=useState()
    console.log('city selected', city)
  return (
    <div className=' flex flex-col gap-[17px] w-[325px] relative'>
    <p className='w-[400px] text-white text-24'>{text}</p>
    <OutsideClick onOutsideClick={() => { setOpenDrop(false)
    setCity(null)
    }}>
    <input required={required} name={name} className={inputClassName} onClick={()=>setOpenDrop(!openDrop)} value={city&&city.name}  placeholder={placeholder} onChange={(e)=>setValue(e.target.value)} />
    {data? <Dropdown open={openDrop} onSelect={setCity} options={data}/>:null}
    {loading? <Loading/>:null}
    </OutsideClick>
  </div>
  );
}
