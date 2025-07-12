import React from 'react';

import HeroSection from '../components/HeroSection';
import TicketGrid from '../features/tickets/TicketGrid';
import CheckoutBar from '../components/CheckoutBar';

const Home = () => {
  return (
    <>
      
      <HeroSection />
      <TicketGrid />
      <HeroSection />
      <CheckoutBar />
    </>
  );
};

export default Home;