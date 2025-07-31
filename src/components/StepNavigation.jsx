import React from "react";

const StepNavigation = ({ currentStep, totalSteps, onPrev, onNext, canProceed = true }) => {
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
          onClick={canProceed ? onNext : undefined}
          disabled={!canProceed}
          className="bg-gradient-to-r from-[#299D3F] to-[#123F22] text-white px-6 py-2 rounded"
          style={{
            opacity: canProceed ? 1 : 0.5,
            cursor: canProceed ? "pointer" : "not-allowed",
          }}
        >
          {currentStep === totalSteps - 1 ? "NEXT" : "NEXT"}
        </button>
      )}
    </div>
  );
};

export default StepNavigation;