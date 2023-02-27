import React from 'react';

import CarouselSlides from "../components/Carousel";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import NewsFeed from "../components/NewsFeed";
import Features from "../components/Features";

const LandingPage = () =>{
  return (
    <div>

      <NavBar/>
      <CarouselSlides/>

      <NewsFeed/>
      <Features/>
      <Footer/>
      
    </div>
  );
}

export default LandingPage;
