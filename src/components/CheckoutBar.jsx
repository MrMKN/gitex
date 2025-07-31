import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTicket } from "../context/TicketContext";
import { tickets } from "../features/tickets/ticketData"; // adjust path as needed

const CheckoutBar = () => {
  const navigate = useNavigate();
  const { ticketQuantities } = useTicket();
  const [showModal, setShowModal] = useState(false);

  const total = Object.entries(ticketQuantities)
    .reduce((sum, [id, qty]) => {
      const ticket = tickets.find((t) => t.id === id);
      const price = ticket?.customFooter ? 32.5 : 0;
      return sum + price * qty;
    }, 0)
    .toFixed(2);

  const ticketSummaryList = Object.entries(ticketQuantities)
    .filter(([_, qty]) => qty > 0)
    .map(([id, qty]) => {
      const ticket = tickets.find((t) => t.id === id);
      return `${ticket?.title || "Ticket"} x ${qty}`;
    });

  const handleBuyNow = () => {
    const hasTickets = Object.values(ticketQuantities).some((qty) => qty > 0);
    if (hasTickets) {
      navigate("/booking/1");
    } else {
      alert("Please select at least one ticket before proceeding.");
    }
  };

  return (
    <>
      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-30 flex items-center justify-center bg-opacity-50 px-4">
          <div className="bg-white rounded-lg max-w-md w-full p-6 shadow-lg border-4 border-green-600">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Ticket Summary</h2>
            {ticketSummaryList.length > 0 ? (
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                {ticketSummaryList.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-500">No tickets selected.</p>
            )}
            <div className="flex justify-end mt-6">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 bg-green-700 text-white rounded hover:bg-green-800"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Checkout Bar */}
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
          <div
            className="text-xs sm:text-sm text-white/80 cursor-pointer"
            onClick={() => setShowModal(true)}
          >
            View Ticket summary
          </div>
        </div>

        <button
          className="bg-white text-green-800 px-6 py-2 rounded-lg font-semibold text-base hover:bg-green-100"
          onClick={handleBuyNow}
        >
          Buy Now
        </button>
      </div>
    </>
  );
};

export default CheckoutBar;

