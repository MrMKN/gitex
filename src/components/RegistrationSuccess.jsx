import React from "react";
import HeroSection from "./HeroSection";

const RegistrationSuccess = ({ onReturnHome }) => {
  return (
    <>
    <HeroSection/>
    <div className="min-h-screen flex items-center justify-center bg-[url('/src/assets/image4.png')] px-4">
      <div className="bg-white max-w-xl w-full rounded-lg shadow-md border-t-4 border-green-700 text-center py-10 px-6">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
          THANK YOU!
        </h1>
        <p className="text-gray-800 text-base sm:text-lg font-medium mb-2">
          Your Registration Has Been Submitted Successfully
        </p>
        <p className="text-gray-600 text-sm sm:text-base mb-6">
          A confirmation email with your event details will be sent to you shortly. Please check your inbox (and spam folder).
        </p>
        <button
          onClick={onReturnHome}
          className="bg-green-700 hover:bg-green-800 text-white font-semibold py-2 px-5 rounded text-sm"
        >
          Return To Homepage
        </button>
      </div>
    </div>
    <HeroSection/>
    </>
  );
};

export default RegistrationSuccess;
