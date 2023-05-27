import React from 'react';
import AboutUsPage from './SubMain/AboutUsPage';
import ContactPage from './SubMain/ContactPage';
import Footer from './SubMain/Footer';
import HowItWorksPage from './SubMain/HowItWorksPage';
import ReviewsPage from './SubMain/ReviewsPage';
import SearchMain from './SubMain/SearchMain';

export default function Main() {
  return (
    <div>
      <SearchMain/>
      <AboutUsPage/>
      <HowItWorksPage />
      <ReviewsPage />
      <ContactPage />
      <Footer/>
  
  </div>
  );
}
