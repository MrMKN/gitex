import React from "react";
import BookingFormFields from "./BookingFormFields";

const BookingFormStep3 = ({ formData, onPrev, onSubmit }) => {
  return (
    <div>
      <BookingFormFields formData={formData} readOnly />

      <div className="mt-6 flex justify-between">
        <button onClick={onPrev} className="bg-purple-800 text-white px-6 py-2 rounded">
          PREVIOUS
        </button>
        <button onClick={onSubmit} className="bg-blue-700 text-white px-6 py-2 rounded">
          SUBMIT
        </button>
      </div>
    </div>
  );
};

export default BookingFormStep3;

