import React from "react";
import BookingFormFields from "./BookingFormFields";

const BookingFormStep1 = ({
  formData,
  setFormData,
  onNext,
  onOpenModal,
  mainCategories,
  subCategories,
}) => {
  return (
    <div>
      <BookingFormFields formData={formData} setFormData={setFormData} />

      <div className="mt-6">
        <label className="text-[13px] font-semibold block mb-2">
          What products & services are you interested in? *
        </label>
        <button
          onClick={(e) => {
            e.preventDefault();
            onOpenModal();
          }}
          className="px-3 py-1 bg-red-700 text-white text-xs rounded mb-4"
        >
          SELECT SOLUTIONS/PRODUCTS
        </button>

        {mainCategories.length > 0 && (
          <>
            <div className="mb-2 font-semibold text-sm">Main Categories</div>
            <div className="flex flex-wrap gap-2 mb-4">
              {mainCategories.map((item, idx) => (
                <span
                  key={idx}
                  className="bg-purple-700 text-white text-xs px-3 py-1 rounded-full"
                >
                  {item}
                </span>
              ))}
            </div>
          </>
        )}

        {subCategories.length > 0 && (
          <>
            <div className="mb-2 font-semibold text-sm">Sub Categories</div>
            <div className="flex flex-wrap gap-2">
              {subCategories.map((item, idx) => (
                <span
                  key={idx}
                  className="bg-gray-200 text-gray-800 text-xs px-3 py-1 rounded-full"
                >
                  {item}
                </span>
              ))}
            </div>
          </>
        )}
      </div>

      <div className="mt-6 text-right">
        <button onClick={onNext} className="bg-green-700 text-white px-6 py-2 rounded">
          NEXT
        </button>
      </div>
    </div>
  );
};

export default BookingFormStep1;

