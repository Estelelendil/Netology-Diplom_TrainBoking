import React from 'react';
import HeaderMenu from './HeaderMenu';
import AboutUsPage from './SubMain/AboutUsPage';
import ContactPage from './SubMain/ContactPage';
import Footer from './SubMain/Footer';
import HowItWorksPage from './SubMain/HowItWorksPage';
import ReviewsPage from './SubMain/ReviewsPage';
import SearchMain from './SubMain/SearchMain';

export default function Main() {
  return (
    <div>
      <div className="h-[993px] flex flex-col justify-between bg-[url('img/search.png')] bg-cover border-b-8 border-orange">

          <HeaderMenu />
          <div className=' flex justify-center p-l-[50px] gap-[120px]'>
            <div clasName="flex flex-col ">
                <h1 className=' mt-[162px] text-white text-72 font-thin'>Вся жизнь -
              </h1>
              <h1 className='text-white text-72 font-bold'>путешествие!</h1>
            </div>
            <SearchMain/>
          </div>
      </div>
      <AboutUsPage/>
      <HowItWorksPage />
      <ReviewsPage />
      <ContactPage />
      <Footer/>
  
  </div>
  );
}
