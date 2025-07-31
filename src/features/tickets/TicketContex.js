import React, { createContext, useContext, useState } from "react";

const TicketContext = createContext();

export const TicketProvider = ({ children }) => {
  const [ticketCount, setTicketCount] = useState(0);

  const increase = () => setTicketCount((prev) => prev + 1);
  const decrease = () =>
    setTicketCount((prev) => (prev > 0 ? prev - 1 : 0));

  return (
    <TicketContext.Provider value={{ ticketCount, increase, decrease }}>
      {children}
    </TicketContext.Provider>
  );
};

export const useTicket = () => useContext(TicketContext);