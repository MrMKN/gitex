import React, { createContext, useContext, useState } from "react";

const TicketContext = createContext();

export const TicketProvider = ({ children }) => {
  const [ticketQuantities, setTicketQuantities] = useState({});

  const increase = (id) => {
    setTicketQuantities((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + 1,
    }));
  };

  const decrease = (id) => {
    setTicketQuantities((prev) => ({
      ...prev,
      [id]: Math.max((prev[id] || 0) - 1, 0),
    }));
  };

  return (
    <TicketContext.Provider value={{ ticketQuantities, increase, decrease }}>
      {children}
    </TicketContext.Provider>
  );
};

export const useTicket = () => useContext(TicketContext);