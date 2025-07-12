import React, { useState } from 'react';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    country: '',
    region: '',
    email: '',
    confirmEmail: '',
    nationality: '',
    mobileNumber: '',
    companyName: '',
    jobTitle: '',
    companyType: '',
    industry: '',
    products: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      products: checked
        ? [...prev.products, value]
        : prev.products.filter((item) => item !== value),
    }));
  };

  return (
    <div className="max-w-7xl mx-auto p-6 bg-green-50 rounded-lg shadow-lg">
      {/* Progress Bar */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex space-x-2">
          {[1, 2, 3, 4].map((step) => (
            <div
              key={step}
              className={`w-8 h-8 flex items-center justify-center rounded-full ${
                step === 1 ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-600'
              }`}
            >
              {step}
            </div>
          ))}
          <div className="flex-1 h-1 bg-gray-200">
            <div className="h-1 bg-green-600 w-1/4"></div>
          </div>
        </div>
      </div>

      {/* Header and Ticket Info */}
      <div className="flex flex-col md:flex-row justify-between bg-green-600 text-white p-4 rounded-t-lg mb-4">
        <div>
          <h2 className="text-xl font-bold">Registration Information 1</h2>
          <p className="text-sm">PREMIUM TICKET - FREE! Incl. 19% VAT</p>
        </div>
        <div className="flex items-center space-x-2">
          <img src="https://via.placeholder.com/50" alt="GITEX AI Logo" className="h-6" />
          <span>Registration Information 1</span>
        </div>
      </div>

      {/* Form Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Column - Form Fields */}
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              name="firstName"
              placeholder="First name *"
              className="p-2 border rounded"
              value={formData.firstName}
              onChange={handleChange}
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last name *"
              className="p-2 border rounded"
              value={formData.lastName}
              onChange={handleChange}
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <select
              name="country"
              className="p-2 border rounded"
              value={formData.country}
              onChange={handleChange}
            >
              <option>Please select</option>
            </select>
            <select
              name="region"
              className="p-2 border rounded"
              value={formData.region}
              onChange={handleChange}
            >
              <option>Please select</option>
            </select>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <input
              type="email"
              name="email"
              placeholder="Email address *"
              className="p-2 border rounded"
              value={formData.email}
              onChange={handleChange}
            />
            <input
              type="email"
              name="confirmEmail"
              placeholder="Confirm Email address"
              className="p-2 border rounded"
              value={formData.confirmEmail}
              onChange={handleChange}
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <select
              name="nationality"
              className="p-2 border rounded"
              value={formData.nationality}
              onChange={handleChange}
            >
              <option>Please select</option>
            </select>
            <div className="flex items-center">
              <select className="p-2 border rounded flex-1">
                <option>Mobile number *</option>
              </select>
              <input
                type="text"
                name="mobileNumber"
                placeholder="+234"
                className="p-2 border rounded w-20 ml-2"
                value={formData.mobileNumber}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              name="companyName"
              placeholder="Company name *"
              className="p-2 border rounded"
              value={formData.companyName}
              onChange={handleChange}
            />
            <input
              type="text"
              name="jobTitle"
              placeholder="Job title *"
              className="p-2 border rounded"
              value={formData.jobTitle}
              onChange={handleChange}
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <select
              name="companyType"
              className="p-2 border rounded"
              value={formData.companyType}
              onChange={handleChange}
            >
              <option>Please select</option>
            </select>
            <select
              name="industry"
              className="p-2 border rounded"
              value={formData.industry}
              onChange={handleChange}
            >
              <option>Please select</option>
            </select>
          </div>
          <div>
            <p className="mb-2">What products & services are you interested in?</p>
            <div className="space-y-2">
              {[
                'Global Leaders Forum NEW (5 Days)',
                'GITEX Main Stage & NEW (5 Days)',
                'Artificial Intelligence NEW (5 Days)',
                'Future Health NEW (2 Days)',
                'Cybersecurity (4 Days)',
                'Future Mobility (1 Day)',
              ].map((item) => (
                <label key={item} className="flex items-center">
                  <input
                    type="checkbox"
                    value={item}
                    onChange={handleCheckboxChange}
                    className="mr-2"
                  />
                  {item}
                </label>
              ))}
            </div>
            <button className="mt-2 bg-red-900 text-white px-4 py-2 rounded">
              SELECT SOLUTIONS/PRODUCTS
            </button>
          </div>
        </div>

        {/* Right Column - Badge Info */}
        <div className="bg-white p-4 rounded-lg shadow-md space-y-4">
          <h3 className="text-lg font-semibold">FULL NAME</h3>
          <input
            type="text"
            placeholder="Job title"
            className="w-full p-2 border rounded"
          />
          <input
            type="text"
            placeholder="Company name"
            className="w-full p-2 border rounded"
          />
          <input
            type="text"
            placeholder="Country of residence"
            className="w-full p-2 border rounded"
          />
          <div className="text-center bg-green-600 text-white p-4 rounded-lg">
            <h3 className="text-xl font-bold">BADGE CATEGORY</h3>
            <p className="text-2xl">VISITOR</p>
          </div>
        </div>
      </div>

      {/* Next Button */}
      <div className="mt-6 text-right">
        <button className="bg-green-600 text-white px-6 py-2 rounded">
          NEXT
        </button>
      </div>
    </div>
  );
};

export default RegistrationForm;