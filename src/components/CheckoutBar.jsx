import React from "react";
import { useNavigate } from "react-router-dom";
import { useTicket } from "../context/TicketContext";
import { tickets } from "../features/tickets/ticketData"; // adjust path as needed

const CheckoutBar = () => {
  const navigate = useNavigate();
  const { ticketQuantities } = useTicket();

  const total = Object.entries(ticketQuantities).reduce((sum, [id, qty]) => {
    const ticket = tickets.find((t) => t.id === id);
    const price = ticket?.customFooter ? 32.5 : 0;
    return sum + price * qty;
  }, 0).toFixed(2);

  const ticketSummary = Object.entries(ticketQuantities)
    .filter(([_, qty]) => qty > 0)
    .map(([id, qty]) => {
      const ticket = tickets.find((t) => t.id === id);
      return `${ticket?.title || "Ticket"} x ${qty}`;
    })
    .join(", ");

  const handleBuyNow = () => {
    navigate("/booking/1");
  };

  return (
    <div
      className="w-full max-w-[1728px] h-[120px] text-white px-6 flex items-center justify-end gap-10 fixed z-20 bottom-0 left-1/2 -translate-x-1/2"
      style={{ backgroundImage: "linear-gradient(to right, #299D3F, #123F22)" }}
    >
      <div className="text-right">
        <div className="text-xs sm:text-sm md:text-base">
          Total:{" "}
          <span className="font-bold text-white text-sm sm:text-base md:text-lg">
            EUR {total}
          </span>{" "}
          <span className="opacity-90 text-xs sm:text-sm">Incl. 19% VAT</span>
        </div>
        <div className="text-xs sm:text-sm text-white/80 cursor-pointer">
          View Ticket summary: {ticketSummary || "No tickets selected"}
        </div>
      </div>

      <button
        className="bg-white text-green-800 px-6 py-2 rounded-lg font-semibold text-base hover:bg-green-100"
        onClick={handleBuyNow}
      >
        Buy Now
      </button>
    </div>
  );
};

export default CheckoutBar;

