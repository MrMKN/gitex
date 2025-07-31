import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import BookingPage from "./pages/BookingPage"; // you’ll create this  
import { TicketProvider } from "./context/TicketContext";

const App = () => {
  return (
    <TicketProvider>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/booking/:id" element={<BookingPage />} />
      </Routes>
    </Router>
    </TicketProvider>
  );
};

export default App;
