import React, { useState } from "react";

function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <header className="text-gray-600 body-font">
      <div className="container-1 max-w-screen-xl flex flex-wrap p-5 flex-col md:flex-row items-center justify-between">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <img src="../Images/image 14.svg" alt="Logo" />
        </a>
        <button
          onClick={toggleNav}
          data-collapse-toggle="navbar-default"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded={isNavOpen}
        >
          <span className="sr-only">Toggle menu</span>
          <svg
            className={`w-5 h-5 ${isNavOpen ? "transform rotate-180" : ""}`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <nav
          className={`ml-auto md:ml-0 lg:flex flex-wrap items-center text-[#4C5A67] text-[16px] font-bold ${
            isNavOpen ? "block" : "hidden"
          }`}
          id="navbar-default"
        >
          <ul className="lg:flex items-center space-x-4">
            <li className="mr-[26px] hover:text-[#E6992A]">
              <a href="#">Rental</a>
            </li>
            <li className="mr-[26px] hover:text-[#E6992A]">
              <a href="#">Resale</a>
            </li>
            <li className="mr-[26px] hover:text-[#E6992A]">
              <a href="#">Insurance</a>
            </li>
            <li className="mr-[26px] hover:text-[#E6992A]">
              <a href="#">Finance</a>
            </li>
            <li className="mr-[26px] hover:text-[#E6992A]">
              <a href="#">Spare Part</a>
            </li>
            <li>
              <button className="font-bold inline-flex items-center justify-center bg-[#E6992A] w-[82px] h-[40px] py-1 px-3 focus:outline-none hover:bg-[#F2C94C] hover:border-[#F2C94C] border border-[#E6992A] rounded text-base text-white ml-4">
                Login
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
