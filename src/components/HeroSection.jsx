import React from 'react';
import bannerImg from '../assets/banner-bg.jpg';

const HeroSection = ({ currentStep }) => {
  return (
    <div
      className="w-full h-[214px] max-w-[1728px] bg-cover bg-center flex items-center justify-center mx-auto px-4"
      style={{ backgroundImage: `url(${bannerImg})` }}
    >
      {/* {(currentStep === 1 || currentStep === 2) && (
        <button
          className="bg-green-400 text-black font-semibold text-sm sm:text-base md:text-lg rounded w-[180px] sm:w-[200px] md:w-[249px] h-[40px] sm:h-[46px] md:h-[52px] "
          
        >
          LOGIN
        </button>
      )} */}
    </div>
  );
};

export default HeroSection;
