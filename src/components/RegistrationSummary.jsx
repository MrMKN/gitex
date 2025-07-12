import React, { useState } from "react";

const RegistrationSummary = ({ onPrev, onSubmit }) => {
  const [promo, setPromo] = useState("");
  const [promoApplied, setPromoApplied] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [consentAccepted, setConsentAccepted] = useState(false);

  const handleApply = () => {
    if (promo.trim() !== "") setPromoApplied(true);
  };

  const handleRemove = () => {
    setPromo("");
    setPromoApplied(false);
  };

  return (
    <div className="bg-white p-6 rounded shadow-md text-sm mx-auto w-full">
      {/* Header */}
      <div className="bg-green-700 text-white px-4 py-2 rounded mb-4 font-bold text-lg">
        Registration Summary
      </div>

      {/* Ticket Info */}
      <div className="mb-4 flex justify-between items-start sm:items-center flex-col sm:flex-row">
        <div className="font-semibold">PREMIUM TICKET X 2</div>
        <div className="text-sm text-right sm:text-left mt-2 sm:mt-0">
          <div className="line-through text-gray-400">FREE 0.16</div>
          <div className="text-green-700 font-semibold">
            FREE 0.16{" "}
            <span className="bg-green-200 text-green-800 text-xs px-1 py-0.5 rounded ml-1">
              -15%
            </span>
          </div>
          <div className="text-xs text-gray-500">INCL. 19% VAT</div>
        </div>
      </div>

      {/* Promo Code Section */}
      <div className="bg-green-100 border border-green-300 p-4 rounded mb-4">
        <div className="mb-2 font-semibold text-green-900">Have a promo code?</div>

        <div className="flex flex-col sm:flex-row w-full gap-2">
          <input
            type="text"
            placeholder="Enter Promo code"
            className="p-2 flex-grow rounded border border-gray-300 bg-gray-200 text-gray-700"
            value={promo}
            onChange={(e) => setPromo(e.target.value)}
            disabled={promoApplied}
          />
          {!promoApplied && (
            <button
              className="bg-gradient-to-r from-[#9F1413] to-[#000000] text-white px-4 py-2 rounded font-semibold text-sm"
              onClick={handleApply}
            >
              APPLY
            </button>
          )}
        </div>

        {promoApplied && (
          <div className="mt-4">
            <p className="text-green-800 font-medium mb-2">
              Promo code <strong>"{promo}"</strong> applied successfully! Applied to 2 lowest-priced tickets!
            </p>

            <div className="space-y-1 text-gray-800 text-sm bg-white border border-green-200 rounded p-4 relative">
              <p>
                Promo code applied:{" "}
                <span className="text-green-700 font-semibold">{promo}</span>
              </p>
              <p>
                Promo code applied:{" "}
                <span className="text-green-700">15% (EUR 0.06 incl. VAT)</span>
              </p>
              <p>
                Applied to:{" "}
                <a href="#" className="text-green-700 underline">
                  2 lowest-priced tickets
                </a>
              </p>

              <div className="absolute top-4 right-4">
                <button
                  onClick={handleRemove}
                  className="border border-red-600 text-red-600 px-5 py-1 rounded font-semibold hover:bg-red-50 text-sm"
                >
                  REMOVE
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Student Ticket Info */}
      <div className="mb-2 flex justify-between items-center">
        <div className="text-sm">Student Ticket Access On Day 3 Only</div>
        <div className="text-sm text-right font-medium">
          EUR 50.40 SUBJECT TO APPROVAL Incl. 19%
        </div>
      </div>

      {/* Total + Buttons */}
      <div className="flex justify-between items-center mb-6 flex-col sm:flex-row gap-4 sm:gap-0">
        <div className="font-bold text-center sm:text-left w-full sm:w-auto">
          Total:{" "}
          <span className="line-through text-gray-400 mr-1">EUR 300</span>
          <span className="text-lg">EUR 150</span>{" "}
          <span className="text-sm text-gray-600">Incl. 19% VAT</span>
        </div>

        <div className="flex gap-2 justify-center sm:justify-end w-full sm:w-auto">
          <button
            onClick={onPrev}
            className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded text-sm font-semibold"
          >
            BACK
          </button>
          <button
            onClick={() => {
              if (termsAccepted && consentAccepted) {
                onSubmit(); // will show success page from parent
              } else {
                alert("Please accept both checkboxes.");
              }
            }}
            className="bg-green-700 hover:bg-green-800 text-white px-5 py-2 rounded text-sm font-semibold"
          >
            NEXT
          </button>
        </div>
      </div>

      {/* Checkbox 1 */}
      <div className="flex items-start mb-4">
        <input
          type="checkbox"
          checked={termsAccepted}
          onChange={() => setTermsAccepted(!termsAccepted)}
          className="mt-1 mr-2"
        />
        <p className="text-sm text-gray-800">
          I have read and accept the{" "}
          <a href="#" className="text-red-600 underline">
            terms and conditions
          </a>
          ,{" "}
          <a href="#" className="text-red-600 underline">
            Privacy Policy
          </a>
          , and consent that attendees under the age of 21 will not be admitted,
          and admission to the exhibition is restricted to trade and business
          professionals only, and students above 16 and below 18 can attend only
          if accompanied by school or faculty member{" "}
          <span className="text-red-600">*</span>
        </p>
      </div>

      {/* Checkbox 2 */}
      <div className="flex items-start mb-6">
        <input
          type="checkbox"
          checked={consentAccepted}
          onChange={() => setConsentAccepted(!consentAccepted)}
          className="mt-1 mr-2"
        />
        <p className="text-sm text-gray-800">
          I hereby consent the use of my data by the organiser, exhibitors and
          sponsors of DWTC & KAOUN International to delivering services and for
          marketing purposes. I am aware that I can object to the sending of
          newsletters at any time <span className="text-red-600">*</span>
        </p>
      </div>

      {/* Final Submit Buttons */}
      <div className="mt-6 flex justify-center gap-4">
        <button
          onClick={onPrev}
          className="bg-gradient-to-r from-[#5C2F66] to-[#25102C] text-white px-6 py-2 rounded"
        >
          PREVIOUS
        </button>
        <button
          onClick={() => {
            if (termsAccepted && consentAccepted) {
              onSubmit(); // go to success page
            } else {
              alert("Please accept both checkboxes.");
            }
          }}
          className=" bg-gradient-to-r from-[#299D3F] to-[#123F22] text-white px-6 py-2 rounded"
        >
          NEXT
        </button>
      </div>
    </div>
  );
};

export default RegistrationSummary;


