import classNames from 'classnames';
import React from 'react';

export default function Button({label, color, onClick}) {
    const buttonClass=classNames({
        'px-[15px]  rounded uppercase h-[56px]':true,
        'bg-transparent border-1 border-color-white text-white ':color==='transparent',
        'bg-orange  text-black ':color==='orange'
    })
  return (
<button className={buttonClass} onClick={onClick}>{label}</button>
  );
}
