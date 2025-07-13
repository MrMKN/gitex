import React from 'react';
import TicketCard from '../../components/TicketCard';
import { tickets } from './ticketData';

const TicketGrid = () => {
  return (
    <section className="py-10 px-4 max-w-[1728px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
      {tickets.map((ticket, i) => (
        <TicketCard key={i} {...ticket} />
      ))}
    </section>
  );
};

export default TicketGrid;