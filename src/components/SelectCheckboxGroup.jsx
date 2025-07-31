import React from "react";

const SelectCheckboxGroup = ({ options, selectedOptions, setSelectedOptions, error }) => {
  const toggleOption = (label) => {
    if (selectedOptions.includes(label)) {
      setSelectedOptions(selectedOptions.filter((item) => item !== label));
    } else {
      setSelectedOptions([...selectedOptions, label]);
    }
  };

  return (
    <div>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-2 text-sm">
        {options.map((label, idx) => (
          <label key={idx} className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={selectedOptions.includes(label)}
              onChange={() => toggleOption(label)}
            />
            {label}
          </label>
        ))}
      </div>
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
};

export default SelectCheckboxGroup;