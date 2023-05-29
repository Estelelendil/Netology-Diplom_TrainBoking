import React from 'react';

export default function ContactPage() {
  return (
    <div className='w-full flex bg-[#2D2B2F] h-[425px] gap-[254px] justify-center'>\
      <div className='flex flex-col gap-[32px] mt-[49px]'>
        <h2 className='text-white font-semibold text-30 '>Свяжитесь с нами</h2>
        <div className='flex w-full gap-[36px]'>
        <div className="bg-[url('img/contacts1.png')] bg-no-repeat bg-center w-[30px] h-[30px]"></div>
        <p className='w-[400px] text-white text-24'>8 (800) 000 00 00 </p>
      </div>

      <div className='flex w-full gap-[36px]'>
        <div className="bg-[url('img/contacts2.png')] bg-no-repeat bg-center w-[30px] h-[30px]"></div>
        <p className='w-[400px] text-white text-24'>inbox@mail.ru </p>
      </div>

      <div className='flex w-full gap-[36px]'>
        <div className="bg-[url('img/contacts3.png')] bg-no-repeat bg-center w-[30px] h-[30px]"></div>
        <p className='w-[400px] text-white text-24'>tu.train.tickets</p>
      </div>

      <div className='flex w-full gap-[36px]'>
        <div className="bg-[url('img/contacts4.png')] bg-no-repeat bg-center w-[30px] h-[30px]"></div>
        <p className='w-[400px] text-white text-24'>г. Москва 
          ул. Московская 27-35
          555 555</p>
      </div>
      </div>
      <div className='flex flex-col gap-[32px] mt-[49px]'>
    <h2 className='text-white font-semibold text-30 '>Подписка</h2>
    </div>
    </div>
  );
}
