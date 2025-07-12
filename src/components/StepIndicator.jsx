import React from "react";

const StepIndicator = ({ currentStep }) => {
  return (
    <div className="flex justify-center mb-6">
      <div className="flex gap-4 items-center">
        {[1, 2, 3, 4].map((step) => (
          <div key={step} className="flex items-center gap-2">
            <div
              className={`w-8 h-8 flex items-center justify-center rounded-full border-2 text-sm font-bold ${
                step === currentStep
                  ? "bg-green-600 text-white border-green-600"
                  : step < currentStep
                  ? "bg-green-100 text-green-700 border-green-700"
                  : "bg-white text-gray-400 border-gray-300"
              }`}
            >
              {step}
            </div>
            {step !== 4 && <div className="w-10 h-1 bg-gray-300"></div>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default StepIndicator;
