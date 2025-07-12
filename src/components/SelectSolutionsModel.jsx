import React, { useState } from "react";

const mockMainCategories = [
  "Global Leaders Forum !NEW (3 Days)",
  "GITEX Main Stage",
  "Artificial Intelligence & Robotics",
  "Future Health !NEW (2 Days)",
  "Cybersecurity (4 Days)",
  "AI Everything (4 Days)",
];

const mockSubCategories = [
  "Edge Computing",
  "Cloud Computing",
  "Cognitive Computing",
];

const SelectSolutionsModal = ({
  onClose,
  onApply,
  selectedMain = [],
  selectedSub = [],
}) => {
  const [mainCategories, setMainCategories] = useState(selectedMain);
  const [subCategories, setSubCategories] = useState(selectedSub);
  const [search, setSearch] = useState("");
  const [error, setError] = useState("");

  const totalSelections = mainCategories.length + subCategories.length;

  const toggleSelection = (item, list, setList) => {
    const isSelected = list.includes(item);
    const newTotal = isSelected
      ? totalSelections - 1
      : totalSelections + 1;

    if (!isSelected && newTotal > 5) {
      setError("You can select a maximum of 5 items in total.");
      return;
    }

    setError("");
    if (isSelected) {
      setList(list.filter((i) => i !== item));
    } else {
      setList([...list, item]);
    }
  };

  const handleApply = () => {
    if (mainCategories.length < 1 || subCategories.length < 1) {
      setError("Please select at least one item in each section.");
      return;
    }

    if (totalSelections > 5) {
      setError("You can select a maximum of 5 items in total.");
      return;
    }

    setError("");
    onApply(mainCategories, subCategories);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-opacity-60">
      <div className="bg-white w-full max-w-4xl rounded-lg overflow-hidden">
        <div className="bg-gradient-to-r from-green-600 to-green-800 text-white px-6 py-4 flex justify-between items-center">
          <h3 className="text-xl font-bold">SELECT SOLUTIONS/PRODUCTS</h3>
          <button onClick={onClose} className="text-white text-xl font-bold">×</button>
        </div>

        <div className="p-6">
          <input
            type="text"
            placeholder="Try Product/Service"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full border border-gray-300 p-2 rounded mb-4"
          />

          <p className="text-sm mb-4">
            I Am Interested In Sourcing The Following Solutions/Products? (Select Top 5) * Please Ensure You Have Chosen At Least One Category In Each Section
          </p>

          {error && (
            <div className="text-red-600 text-sm mb-4">{error}</div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {mockMainCategories
              .filter((cat) => cat.toLowerCase().includes(search.toLowerCase()))
              .map((item, idx) => (
                <label key={idx} className="flex items-center gap-2 text-sm">
                  <input
                    type="checkbox"
                    checked={mainCategories.includes(item)}
                    onChange={() =>
                      toggleSelection(item, mainCategories, setMainCategories)
                    }
                  />
                  {item}
                </label>
              ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {mockSubCategories
              .filter((cat) => cat.toLowerCase().includes(search.toLowerCase()))
              .map((item, idx) => (
                <label key={idx} className="flex items-center gap-2 text-sm">
                  <input
                    type="checkbox"
                    checked={subCategories.includes(item)}
                    onChange={() =>
                      toggleSelection(item, subCategories, setSubCategories)
                    }
                  />
                  {item}
                </label>
              ))}
          </div>
        </div>

        <div className="border-t px-6 py-4 flex justify-end gap-4">
          <button
            onClick={onClose}
            className="px-4 py-2 border border-gray-400 rounded hover:bg-gray-100"
          >
            CANCEL
          </button>
          <button
            onClick={handleApply}
            className="px-6 py-2 bg-green-700 text-white rounded hover:bg-green-800"
          >
            APPLY
          </button>
        </div>
      </div>
    </div>
  );
};

export default SelectSolutionsModal;



