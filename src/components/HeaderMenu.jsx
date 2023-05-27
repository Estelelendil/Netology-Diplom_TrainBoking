import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from './Logo';

export default function HeaderMenu() {
  return (
<div className='w-fulln flex flex-col'>
  <Logo/>
  <div className='w-full bg-[#292929]'>

<NavLink className='menu__item' to='/'>O Нас</NavLink >
<NavLink className='menu__item' to='/how-it-works'>Как это работает</NavLink>
<NavLink className='menu__item' to='/reviews'>Отзывы</NavLink>
<NavLink className='menu__item' to='/contacts'>Контакты</NavLink>
  </div>
</div>
  );
}
