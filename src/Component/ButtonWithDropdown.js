import React, { useState } from 'react';

const ButtonWithDropdown = ({ buttonText, dropdownOptions, buttonColor }) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleOptionClick = (option) => {
    // Handle dropdown item click as needed
    console.log(`Selected option: ${option}`);
    setDropdownOpen(false); // Close the dropdown after selecting an option
  };

  return (
    <div className="relative text-left inline-flex xl:w-[213px] lg:w-[48%] w-full flex-col 2xl:mr-[14px] xl:mr-[27px] lg:mr-[10px]  xl-pb-0 pb-3">
      <button
        type="button"
        onClick={handleDropdownToggle}
        className={`inline-flex items-center  h-[50px] justify-between p-2 border border-transparent ${buttonColor} text-white rounded-lg hover:bg-[#D9D9D9] hover:bg-opacity-60 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500`}
        
      >
        <span className="font-bold text-base ">{buttonText}</span>
        <img
          className="h-3 w-3 ml-2"
          src="/Images/Group (2).svg" // Adjust the path based on your file structure
          alt="Dropdown Icon"
        />
      </button>

      {isDropdownOpen && (
        <div className="origin-top-right xl:absolute right-0 mt-2 xl:w-48 lg:w-full rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            {dropdownOptions.map((option, index) => (
              <button
                key={index}
                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                onClick={() => handleOptionClick(option)}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ButtonWithDropdown;
