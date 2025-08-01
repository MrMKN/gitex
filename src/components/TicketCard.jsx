import { useTicket } from "../context/TicketContext";
import defaultBg from "../assets/ticket-bg1.png";
import titleBg from "../assets/banner-bg.jpg";
import { useNavigate } from "react-router-dom";

const TicketCard = ({
  id,
  title = "Visitor 3 Day Access Ticket",
  features = [],
  price = "FREE",
  isExclusive = false,
  disabledFeatures = [],
  bgImage = defaultBg,
  titleGradient = "from-green-600 to-green-900",
  customFooter = false,
}) => {
  const navigate = useNavigate();
  const { ticketQuantities, increase, decrease } = useTicket();
  const quantity = ticketQuantities[id] || 0;

  const handleBuyNow = () => {
    navigate(`/booking/${id}`);
  };

  return (
    <div
      className="relative w-full max-w-[502px] h-[428px] rounded-[20px] p-6 text-white overflow-hidden flex flex-col justify-between shadow-xl bg-cover bg-center bg-black"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      {/* Left Half Circle Notch */}
      <div className="absolute left-[-26px] top-1/2 -translate-y-1/2 w-[52px] h-[52px] bg-white rounded-full z-20"></div>

      {/* Right Half Circle Notch */}
      <div className="absolute right-[-26px] top-1/2 -translate-y-1/2 w-[52px] h-[52px] bg-white rounded-full z-20"></div>

      {/* Exclusive Ribbon */}
      {isExclusive && (
        <div className="absolute top-0 left-0 w-[160px] h-[180px] z-20 overflow-hidden pointer-events-none">
          <div className="absolute -top-[40px] -left-[88px] w-[260px] rotate-[-45deg] bg-gradient-to-b from-[#16F25C] to-[#04270F] shadow-md flex items-center justify-center h-[70px]">
            <div className="text-[11px] font-bold uppercase tracking-widest text-white leading-tight text-center ml-[-60px] mt-6">
              <div>BEST</div>
              <div>SELLER</div>
            </div>
          </div>
        </div>
      )}

      <div>
        {/* Title Header */}
        <div className="-mx-6 -mt-6 h-[85px] relative rounded-t-[20px] overflow-hidden">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${titleBg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div className={`absolute inset-0 bg-gradient-to-r ${titleGradient} opacity-80`} />
          <div
            className={`relative px-6 py-4 z-10 ${
              isExclusive ? "ml-8 sm:ml-6 md:ml-10" : ""
            }`}
          >
            <h3 className="text-lg font-bold uppercase">{title}</h3>
            <a href="#" className="text-yellow-400 font-semibold text-sm mt-1 inline-block">
              VIEW DETAILS →
            </a>
          </div>
        </div>

        {/* Description */}
        <p className="mt-4 text-sm leading-relaxed">
          Visitor Passes provide{" "}
          <span className="text-green-400 font-semibold">3 DAYS ACCESS</span> to
          GITEX NIGERIA exhibition and all free conference
        </p>

        {/* Features */}
        <div className="mt-4 flex flex-wrap gap-2">
          {features.map((item, index) => {
            if (typeof item === "object" && item.type === "image") {
              return (
                <div
                  key={index}
                  className="w-[169.44px] h-[61.18px] md:w-[140px] md:h-[50px] sm:w-[120px] sm:h-[40px] flex items-center justify-center mt-4"
                >
                  {item.images.map((src, i) => (
                    <img
                      key={i}
                      src={src}
                      alt={`logo-${i}`}
                      className="w-full h-full object-contain"
                    />
                  ))}
                </div>
              );
            }

            const isDisabled = disabledFeatures.includes(item);
            return (
              <div
                key={index}
                className={`px-3 py-1 rounded-full text-sm flex items-center gap-2 ${
                  isDisabled
                    ? "bg-white/5 text-white/40 line-through"
                    : "bg-white/10 text-white"
                }`}
              >
                <svg
                  className={`w-5 h-5 rounded-full text-black p-[2px] ${
                    isDisabled ? "bg-white/10 opacity-30" : "bg-green-600"
                  }`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>{item}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Footer */}
      {customFooter ? (
        <div className="pt-6 w-full border-t flex justify-between items-center gap-2 flex-wrap border-white/20">
          {/* Price section */}
          <div className="flex items-center gap-2">
            <div className="text-[14px] font-semibold text-red-500 line-through">USD 45</div>
            <div className="bg-black text-white text-sm font-bold px-2 py-[4px] rounded-md leading-none border">
              32.5
            </div>
            <div className="text-white text-xs opacity-60 leading-none">Incl. 20% VAT</div>
          </div>

          {/* Quantity controls */}
          <div className="flex items-center rounded-md overflow-hidden h-7 border">
            <button
              className="bg-black text-white px-2 text-sm font-semibold  h-7hover:opacity-80"
              onClick={() => decrease(id)}
            >
              −
            </button>
            <div className="bg-white text-black w-10 text-center text-sm font-bold flex items-center justify-center h-7">
              {quantity}
            </div>
            <button
              className="bg-black text-white px-2 text-sm font-semibold hover:opacity-80"
              onClick={() => increase(id)}
            >
              +
            </button>
          </div>
        </div>
      ) : (
        <div className="flex justify-between border-t items-center pt-6 border-white/20">
          <div>
            <div className="text-lg font-semibold">{price}</div>
            <div className="text-xs text-white/70">INCL. 19% VAT</div>
          </div>
          {/* <button
            onClick={handleBuyNow}
            className="bg-white text-black font-bold px-5 py-2 rounded-md hover:bg-gray-200 text-sm"
          >
            BUY NOW
          </button> */}

                    <div className="flex items-center rounded-md overflow-hidden h-7 border">
            <button
              className="bg-black text-white px-2 text-sm font-semibold  h-7hover:opacity-80"
              onClick={() => decrease(id)}
            >
              −
            </button>
            <div className="bg-white text-black w-10 text-center text-sm font-bold flex items-center justify-center h-7">
              {quantity}
            </div>
            <button
              className="bg-black text-white px-2 text-sm font-semibold hover:opacity-80"
              onClick={() => increase(id)}
            >
              +
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TicketCard;





