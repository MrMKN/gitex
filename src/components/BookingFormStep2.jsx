import React from "react";
import BookingFormFields from "./BookingFormFields";

const BookingFormStep2 = ({ formData, setFormData, onNext, onPrev }) => {
  return (
    <div>
      <BookingFormFields formData={formData} setFormData={setFormData} />
      <div className="mt-6 flex justify-between">
        <button onClick={onPrev} className="bg-purple-800 text-white px-6 py-2 rounded">
          PREVIOUS
        </button>
        <button onClick={onNext} className="bg-green-700 text-white px-6 py-2 rounded">
          NEXT
        </button>
      </div>
    </div>
  );
};

export default BookingFormStep2;


