import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { tickets } from "../features/tickets/ticketData";
import HeroSection from "../components/HeroSection";
import SelectSolutionsModal from "../components/SelectSolutionsModel";
import StepNavigation from "../components/StepNavigation";
import RegistrationSummary from "../components/RegistrationSummary";
import RegistrationSuccess from "../components/RegistrationSuccess";
import gitexLogo from '../assets/gitex-logo.png';
import bannerImg from '../assets/banner-bg.jpg';

const BookingPage = () => {
  const { id } = useParams();
  const ticket = tickets.find((t) => t.id === id);

  const [currentStep, setCurrentStep] = useState(1);
  const [mainCategories, setMainCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});
  const [selectedSessions, setSelectedSessions] = useState([]);
  const [sessionsError, setSessionsError] = useState("");

  const totalSteps = 4;

  const selectOptions = {
    country: ["United States", "India", "United Arab Emirates", "Germany", "United Kingdom"],
    region: ["Asia", "Europe", "Middle East", "North America"],
    nationality: ["American", "Indian", "Emirati", "British", "German"],
    companyType: ["Private Limited", "Public Limited", "Sole Proprietorship", "Partnership", "LLP", "Other"],
    industry: ["Technology", "Healthcare", "Education", "Finance", "Energy"]
  };

  const handleApply = (main, sub) => {
    setMainCategories(main);
    setSubCategories(sub);
    setIsModalOpen(false);
  };

  const handleNext = () => {
    if (currentStep === 1) {
      const requiredFields = [
        "firstName",
        "lastName",
        "country",
        "email",
        "confirmEmail",
        "mobile",
        "companyName",
        "jobTitle",
        "companyType",
        "industry"
      ];

      const newErrors = {};
      requiredFields.forEach(field => {
        if (!formData[field]) {
          newErrors[field] = "This field is required.";
        }
      });
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData.email && !emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (
      formData.email &&
      formData.confirmEmail &&
      formData.email !== formData.confirmEmail
    ) {
      newErrors.confirmEmail = "Email addresses do not match.";
    }

      if (mainCategories.length === 0) {
        alert("Please select at least one product or service.");
        return;
      }

      if (selectedSessions.length === 0) {
        setSessionsError("Please select at least one session.");
        return;
      } else {
        setSessionsError("");
      }

      if (Object.keys(newErrors).length > 0) {
        setErrors(newErrors);
        return;
      }
    }

    setCurrentStep(prev => prev + 1);
  };

  const handleChange = (key, value) => {
    setFormData({ ...formData, [key]: value });
    setErrors({ ...errors, [key]: "" });
  };

  const toggleSession = (label) => {
    if (selectedSessions.includes(label)) {
      setSelectedSessions(selectedSessions.filter((item) => item !== label));
    } else {
      setSelectedSessions([...selectedSessions, label]);
    }
  };

  if (!ticket) return <div className="p-10 text-center">Ticket not found.</div>;

  if (submitted) {
    return <RegistrationSuccess onReturnHome={() => (window.location.href = "/")} />;
  }

  return (
    <>
      <HeroSection currentStep={currentStep} />

      <div className="min-h-screen bg-[url('/src/assets/image4.png')] bg-cover bg-center bg-no-repeat p-6">
        <div className="flex justify-center mb-6">
          <div className="flex gap-4 items-center">
            {[1, 2, 3, 4].map((step) => (
              <div key={step} className="flex items-center gap-2">
                <div
                  className={`w-8 h-8 flex items-center justify-center rounded-full border-2 text-sm font-bold ${
                    step === currentStep
                      ? "bg-green-600 text-white border-green-600"
                      : step < currentStep
                      ? "bg-green-600 text-white border-green-600"
                      : "bg-white text-gray-400 border-gray-300"
                  }`}
                >
                  {step < currentStep ? (
                    <span className="text-white text-base">✓</span>
                  ) : (
                    step
                  )}
                </div>
                {step !== 4 && (
                  <div className={`w-10 h-1 ${step < currentStep ? "bg-green-600" : "bg-gray-300"}`}></div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 md:flex md:gap-6">
          <div className={`${currentStep < 4 ? "md:w-2/3" : "w-full"}`}>
            {currentStep < 4 && (
              <div className="bg-gradient-to-r from-[#299D3F] to-[#123F22] w-full h-[98.63px] p-4 rounded-t-md text-white mb-6 mx-auto">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between h-full gap-2">
                  <h2 className="text-xl font-bold">
                    Registration Information {currentStep}
                  </h2>
                  <div className="bg-white/10 text-sm text-right px-4 py-2 rounded text-white font-light">
                    {ticket.title} - {ticket.price} Incl. 19% VAT
                  </div>
                </div>
              </div>
            )}

            {currentStep < 4 ? (
              <>
<form className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-4 text-sm">
  {[
    { label: "First Name *", key: "firstName" },
    { label: "Last Name *", key: "lastName" },
    { label: "Country of Residence *", key: "country", type: "select" },
    { label: "Region", key: "region", type: "select" },
    { label: "Email Address *", key: "email", type: "email" },
    { label: "Confirm Email Address *", key: "confirmEmail", type: "email" },
    { label: "Nationality", key: "nationality", type: "select" },
    {
      label: "Mobile Number *",
      key: "mobile",
      type: "custom",
      content: (
        <div className="flex gap-2">
          <select
            className="p-2 rounded bg-gray-100 text-sm"
            onChange={(e) => handleChange("countryCode", e.target.value)}
          >
            <option value="+234">+234</option>
            <option value="+91">+91</option>
            <option value="+1">+1</option>
            <option value="+44">+44</option>
            <option value="+971">+971</option>
          </select>
          <input
            type="tel"
            className="border border-gray-300 p-2 rounded w-full"
            placeholder="Enter phone number"
            value={formData["mobile"] || ""}
            onChange={(e) => {
              const value = e.target.value.replace(/\D/g, ""); // only digits
              handleChange("mobile", value);
            }}
          />
        </div>
      ),
    },
    { label: "Company Name *", key: "companyName" },
    { label: "Job Title *", key: "jobTitle" },
    { label: "Company Type *", key: "companyType", type: "select" },
    { label: "Industry *", key: "industry", type: "select" },
  ].map((field, i) => (
    <div key={i}>
      <label className="text-[13px] font-semibold mb-1 block">
        {field.label}
      </label>
      {field.type === "select" ? (
        <select
          className="border border-gray-300 p-2 rounded w-full"
          value={formData[field.key] || ""}
          onChange={(e) => handleChange(field.key, e.target.value)}
        >
          <option>Please select</option>
          {selectOptions[field.key]?.map((option, idx) => (
            <option key={idx} value={option}>
              {option}
            </option>
          ))}
        </select>
      ) : field.type === "email" ? (
        <input
          className="border border-gray-300 p-2 rounded w-full"
          type="email"
          value={formData[field.key] || ""}
          onChange={(e) => handleChange(field.key, e.target.value)}
        />
      ) : field.type === "custom" ? (
        field.content
      ) : (
        <input
          className="border border-gray-300 p-2 rounded w-full"
          value={formData[field.key] || ""}
          onChange={(e) => handleChange(field.key, e.target.value)}
        />
      )}
      {errors[field.key] && (
        <p className="text-red-500 text-xs mt-1">{errors[field.key]}</p>
      )}
    </div>
  ))}
</form>

                <div className="mt-6">
                  <div className="flex items-center justify-between mb-3">
                    <label className="text-[13px] font-semibold">
                      What products & services are you interested in? *
                    </label>
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        setIsModalOpen(true);
                      }}
                      className="px-3 py-1  bg-gradient-to-r from-[#9F1413] to-[#000000] text-white text-xs rounded"
                    >
                      SELECT SOLUTIONS/PRODUCTS
                    </button>
                  </div>

                  {mainCategories.length > 0 && (
                    <>
                      <div className="mb-2 font-semibold text-sm">Main Categories</div>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {mainCategories.map((item, idx) => (
                          <span key={idx} className="bg-purple-700 text-white text-xs px-3 py-1 rounded-full">
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
                          <span key={idx} className="bg-gray-200 text-gray-800 text-xs px-3 py-1 rounded-full">
                            {item}
                          </span>
                        ))}
                      </div>
                    </>
                  )}
                </div>

                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-2 text-sm">
                  {["Global Leaders Forum NEW (5 Days)","GITEX Main Stage","Artificial Intelligence & Robotics (5)","Future Health NEW (2 Days)","Cybersecurity (4 Days)","Digital Cities (1 Day)","Edtech (1 Day)","Energy Transition (1 Day)","Intelligent Connectivity (1 Day)","Digital Finance (1 Day)","Future Mobility (1 Day)"].map((label, idx) => (
                    <label key={idx} className="flex items-center gap-2">
                      <input type="checkbox" checked={selectedSessions.includes(label)} onChange={() => toggleSession(label)} />
                      {label}
                    </label>
                  ))}
                </div>
                {sessionsError && <p className="text-red-500 text-xs mt-1">{sessionsError}</p>}
              </>
            ) : (
              <RegistrationSummary
                onPrev={() => setCurrentStep(3)}
                onSubmit={() => setSubmitted(true)}
              />
            )}
          </div>

          {currentStep < 4 && (
            <div className="md:w-1/3 mt-8 md:mt-0">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
                <div className="bg-gradient-to-r from-[#299D3F] to-[#123F22] w-full h-[98.63px] px-6 py-4 text-white text-left bg-cover bg-left" style={{ backgroundImage: `url(${bannerImg})` }}>
                  <div className="text-xs font-semibold uppercase tracking-wider flex items-center h-full">
                    <img src={gitexLogo} alt="Gitex" className="h-[46px] w-auto object-contain" />
                  </div>
                </div>

                <div className="bg-[#1E4F2D] text-white text-[13px] font-semibold text-center shadow-sm mx-auto px-4 sm:w-[303.08px] sm:h-[39.06px] sm:leading-[39.06px] rounded-b-xl">
                  Registration Information {currentStep}
                </div>

                <div className="text-center py-6 px-4 text-gray-400 text-sm font-semibold space-y-3">
                  <div>{formData.firstName || "FULL NAME"} {formData.lastName || ""}</div>
                  <div>{formData.jobTitle || "JOB TITLE"}</div>
                  <div>{formData.companyName || "COMPANY NAME"}</div>
                  <div>{formData.country || "COUNTRY OF RESIDENCE"}</div>
                </div>

                <div className="border-t px-4 py-5 text-center">
                  <div className="text-gray-600 text-sm font-semibold mb-2">
                    BADGE CATEGORY
                  </div>
                  <div className="text-2xl font-extrabold text-[#111827] tracking-wider">
                    VISITOR
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <StepNavigation
        currentStep={currentStep}
        totalSteps={totalSteps}
        onPrev={() => setCurrentStep((prev) => prev - 1)}
        onNext={handleNext}
      />

      <HeroSection />

      {isModalOpen && (
        <SelectSolutionsModal
          onClose={() => setIsModalOpen(false)}
          onApply={handleApply}
          selectedMain={mainCategories}
          selectedSub={subCategories}
        />
      )}
    </>
  );
};

export default BookingPage;







