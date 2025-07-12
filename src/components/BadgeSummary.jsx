const BadgeSummary = ({ formData }) => {
  return (
    <div className="border rounded shadow-sm p-4 bg-white">
      <div className="bg-green-600 text-white text-sm font-semibold py-2 px-4 rounded-t">
        Registration Information
      </div>
      <div className="p-4 text-sm text-center">
        <div className="mb-2">{formData.firstName || "FULL NAME"}</div>
        <div className="mb-2">{formData.jobTitle || "JOB TITLE"}</div>
        <div className="mb-2">{formData.company || "COMPANY NAME"}</div>
        <div className="mb-2">{formData.country || "COUNTRY"}</div>
        <div className="border-t pt-4 mt-4 font-bold text-lg text-center">
          BADGE CATEGORY <br />
          <span className="text-2xl">VISITOR</span>
        </div>
      </div>
    </div>
  );
};
