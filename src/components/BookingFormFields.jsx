import React from "react";

const BookingFormFields = ({ formData, setFormData, readOnly = false }) => {
  const handleChange = (field, value) => {
    if (!readOnly) {
      setFormData((prev) => ({ ...prev, [field]: value }));
    }
  };

  const fields = [
    { label: "First name *", name: "firstName" },
    { label: "Last name *", name: "lastName" },
    { label: "Country of residence *", name: "country", type: "select" },
    { label: "Region", name: "region", type: "select" },
    { label: "Email address *", name: "email", type: "email" },
    { label: "Confirm email address *", name: "confirmEmail", type: "email" },
    { label: "Nationality", name: "nationality" },
    {
      label: "Mobile number *",
      name: "mobile",
      type: "custom",
      content: (
        <div className="flex gap-2">
          <span className="border p-2 rounded bg-gray-100 flex items-center">+234</span>
          <input
            className="border border-gray-300 p-2 rounded w-full"
            value={formData.mobile || ""}
            readOnly={readOnly}
            onChange={(e) => handleChange("mobile", e.target.value)}
          />
        </div>
      ),
    },
    { label: "Company name *", name: "company" },
    { label: "Job title *", name: "jobTitle" },
    { label: "Company type *", name: "companyType", type: "select" },
    { label: "Industry *", name: "industry", type: "select" },
  ];

  return (
    <form className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-4 text-sm">
      {fields.map((field, i) => (
        <div key={i}>
          <label className="text-[13px] font-semibold mb-1 block">{field.label}</label>
          {field.type === "select" ? (
            <select
              className="border border-gray-300 p-2 rounded w-full"
              value={formData[field.name] || ""}
              disabled={readOnly}
              onChange={(e) => handleChange(field.name, e.target.value)}
            >
              <option>Please select</option>
            </select>
          ) : field.type === "email" ? (
            <input
              type="email"
              className="border border-gray-300 p-2 rounded w-full"
              value={formData[field.name] || ""}
              readOnly={readOnly}
              onChange={(e) => handleChange(field.name, e.target.value)}
            />
          ) : field.type === "custom" ? (
            field.content
          ) : (
            <input
              className="border border-gray-300 p-2 rounded w-full"
              value={formData[field.name] || ""}
              readOnly={readOnly}
              onChange={(e) => handleChange(field.name, e.target.value)}
            />
          )}
        </div>
      ))}
    </form>
  );
};

export default BookingFormFields;
