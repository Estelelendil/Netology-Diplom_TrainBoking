import React from 'react';

export default function Dropdown({options, onSelect, open}) {
    console.log('DROPDOWN DATA', options)
  return (
  
    <div className='flex flex-col bg-white absolute top-20 left-0 rounded'>
      {open?options.map(option=><div className='hover:bg-gray/40 border-orange/50 px-10 py-2' onClick={()=>{
        console.log('CLICKED', option)
        onSelect(option)}} key={option._id}>{option.name}</div>):null}
    </div>
  );
}
