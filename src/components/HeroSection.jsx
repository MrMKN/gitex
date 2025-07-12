import React from 'react';
import bannerImg from '../assets/banner-bg.jpg'; // Replace with your actual bg image

const HeroSection = () => {
  return (
    <div
      className="w-full h-[214px] max-w-[1728px] bg-cover bg-center flex items-center justify-center text-white text-2xl md:text-4xl font-semibold mx-auto px-4"
      style={{ backgroundImage: `url(${bannerImg})` }}
    >
      
    </div>
  );
};

export default HeroSection;