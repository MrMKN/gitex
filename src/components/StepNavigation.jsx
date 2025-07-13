import React from "react";

const StepNavigation = ({ currentStep, totalSteps, onPrev, onNext }) => {
  return (
    <div className="mt-6 flex justify-center gap-4 mb-10">
      {currentStep > 1 && currentStep < totalSteps && (
        <button
          onClick={onPrev}
          className="text-white px-6 py-2 rounded"
          style={{
            background: "linear-gradient(to right, #5C2F66, #25102C)",
          }}
        >
          PREVIOUS
        </button>
      )}

      {currentStep < totalSteps && (
        <button
          onClick={onNext}
          className="bg-gradient-to-r from-[#299D3F] to-[#123F22] text-white px-6 py-2 rounded"
        >
          {currentStep === totalSteps - 1 ? "NEXT" : "NEXT"}
        </button>
      )}
    </div>
  );
};

export default StepNavigation;