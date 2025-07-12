import React from 'react';

import { useNavigate } from 'react-router-dom';

const CheckoutBar = () => {
  const navigate = useNavigate();

  const handleBuyNow = () => {
    navigate('/booking/1'); 
  };
  return (
    <div
      className="w-full max-w-[1728px] h-[120px] text-white px-6 flex items-center justify-end gap-10 fixed z-20 bottom-0 left-1/2 -translate-x-1/2"
      style={{ backgroundImage: 'linear-gradient(to right, #299D3F, #123F22)' }}
    >
      <div className="text-right">
        <div className="text-sm md:text-base">
          Total: <span className="font-bold text-white text-lg md:text-xl">EUR 0</span> <span className="opacity-90">Incl. 19% VAT</span>
        </div>
        <div className="text-sm text-white/80  cursor-pointer">
          View Ticket summary
        </div>
      </div>

      <button className="bg-white text-green-800 px-6 py-2 rounded-lg font-semibold text-base hover:bg-green-100" onClick={handleBuyNow}>
        Buy Now
      </button>
    </div>
  );
};

export default CheckoutBar;