import React, { useState } from "react";
import bannerImg from "../assets/banner-bg.jpg";

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
  "5G & Networking",
  "Quantum Computing",
  "Data Science",
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
    const newTotal = isSelected ? totalSelections - 1 : totalSelections + 1;

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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
      <div className="bg-white w-[95%] max-w-4xl mx-auto rounded-lg overflow-hidden">
        {/* Header */}
        <div
          className="bg-gradient-to-r from-[#16F25C] to-[#04270F] px-6 py-4 text-white flex justify-between items-center bg-cover bg-left"
          style={{ backgroundImage: `url(${bannerImg})` }}
        >
          <h3 className="text-xl font-bold">SELECT SOLUTIONS/PRODUCTS</h3>
          <button onClick={onClose} className="text-2xl font-bold hover:opacity-80">
            ×
          </button>
        </div>

        {/* Body */}
        <div className="p-6 space-y-4">
          {/* Search */}
          <input
            type="text"
            placeholder="Try Product/Service"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-600"
          />

          {/* Info text */}
          <p className="text-sm text-gray-700">
            I Am Interested In Sourcing The Following Solutions/Products?
            <span className="text-xs text-gray-500">
              (Select Top 5) * Please Ensure You Have  <br /> Chosen At Least One Category In Each Section
            </span>
          </p>

          {error && <div className="text-red-600 text-sm">{error}</div>}

          {/* Two Column Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Main Categories */}
            <div>
              <div className="space-y-3">
                {mockMainCategories
                  .filter((cat) => cat.toLowerCase().includes(search.toLowerCase()))
                  .slice(0, 6)
                  .map((item, idx) => (
                    <label key={idx} className="flex items-center gap-2 text-sm cursor-pointer">
                      <input
                        type="checkbox"
                        checked={mainCategories.includes(item)}
                        onChange={() =>
                          toggleSelection(item, mainCategories, setMainCategories)
                        }
                        className="w-4 h-4 accent-green-700"
                      />
                      {item}
                    </label>
                  ))}
              </div>
            </div>

            {/* Sub Categories */}
            <div>
              <div className="space-y-3">
                {mockSubCategories
                  .filter((cat) => cat.toLowerCase().includes(search.toLowerCase()))
                  .slice(0, 6)
                  .map((item, idx) => (
                    <label key={idx} className="flex items-center gap-2 text-sm cursor-pointer">
                      <input
                        type="checkbox"
                        checked={subCategories.includes(item)}
                        onChange={() =>
                          toggleSelection(item, subCategories, setSubCategories)
                        }
                        className="w-4 h-4 accent-green-700"
                      />
                      {item}
                    </label>
                  ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 flex justify-end gap-4 bg-white">
          <button
            onClick={onClose}
            className="px-5 py-2 border border-gray-400 text-black rounded hover:bg-gray-100 font-semibold"
          >
            CANCEL
          </button>
          <button
            onClick={handleApply}
            className="px-6 py-2 bg-green-700 text-white rounded hover:bg-green-800 font-semibold"
          >
            APPLY
          </button>
        </div>
      </div>
    </div>
  );
};

export default SelectSolutionsModal;



