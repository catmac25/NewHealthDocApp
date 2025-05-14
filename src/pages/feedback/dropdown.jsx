import React, { useState } from "react";

const DropDown = ({ options, selectedOptions, onSelectChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggles the dropdown visibility
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const handleClick = (option) => {
    let update;
    if (selectedOptions.includes(option)) {
      // Remove option if already selected
      update = selectedOptions.filter((item) => item !== option);
    } else {
      // Add option to selected options if not already selected
      update = [...selectedOptions, option];
    }
    // Update the parent component state
    onSelectChange(update);
  };

  return (
    <div>
      {/* Dropdown button */}
      <button
      type="button"
        onClick={toggle}
        className="border h-10 bg-green-600 w-35 rounded-xl shadow-xl text-white font-bold border-green-800 hover:bg-blue-100 hover:text-black"
      >
        Select
      </button>

      {/* Dropdown menu */}
      {isOpen && (
        <div>
          <br />
          {options.map((option, index) => (
            <div key={index} onClick={() => handleClick(option)} className="flex items-center gap-x-2">
              <input
                type="checkbox"
                checked={selectedOptions.includes(option)} // Checkbox is checked if option is in selectedOptions
                onChange={() => handleClick(option)} // Handle click to toggle selection
              />
              <span>{option}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropDown;
