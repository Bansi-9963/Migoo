import React, { useState } from "react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="w-full  bg-[#FFFFFF]">
      <div id="nav-header">
        <div className="container-1 p-0 bg-[#FFFFFF] w-full py-2 sm:py-[18px]">
          <nav>
            <div className="flex justify-between items-center">
              <div>
                <a href="../">
                  <img
                    src='../Images/image 14.svg'
                    alt="Mignesh-Logo"
                    className="lg:w-auto md:w-[150px] w-[160px]"
                  />
                </a>
              </div>
              <div className="hidden lg:flex lg:gap-[26px] md:gap-[10px] md:text-[10px] text-[#4C5A67] font-bold">
                 <a
                    href="/"
                    className="hover:text-[#E6992A] text-[#4C5A67] text-[16px]  font-bold py-[11px]"
                  >
                Rental
                  
                  </a>
                  <a
                    href="/"
                    className="hover:text-[#E6992A] text-[#4C5A67] text-[16px]  font-bold  py-[11px]"
                  >
                Resale
                  
                  </a>
             
                <a
                  href=""
                  className="hover:text-[#E6992A] text-[#4C5A67] text-[16px]  font-bold py-[11px]"
                >
                  Insurance
                </a>
                <a
                  href="/"
                  className="hover:text-[#E6992A] text-[#4C5A67] text-[16px]  font-bold py-[11px]"
                >
                 Finance
                </a>
                <a
                  href="/"
                  className="hover:text-[#E6992A] text-[#4C5A67] text-[16px]  font-bold py-[11px]"
                >
                Spare Part
                </a>
                <a href="/" className="">
                <button className="font-bold inline-flex items-center justify-center bg-[#E6992A] w-[82px] h-[40px] py-1 px-3 focus:outline-none hover:bg-[#F2C94C] hover:border-[#F2C94C] border border-[#E6992A] rounded-lg text-base text-white ml-4">
                  Login
                </button>
                </a>
              </div>
              <div className="lg:hidden">
                <button
                  id="mobile-menu-button"
                  onClick={toggleMobileMenu}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </nav>
          <div
            id="mobile-menu"
            className={`${
              isMobileMenuOpen ? "block" : "hidden"
            } lg:hidden mt-2 bg-[white]`}
          >
            <a
              href=""
              className="block  text-[#4C5A67] font-bold py-2 px-2 hover:text-[#E6992A] rounded "
            >
             Rental
            </a>
              <a
                href="/about"
                className="block  text-[#4C5A67] font-bold py-2 px-2  hover:text-[#E6992A]  rounded relative"
              >
               Resale
                
              </a>
          
            <a
              href=""
              className="block  text-[#4C5A67] font-bold py-2 px-2 hover:text-[#E6992A] rounded "
            >
              Insurance
            </a>
            <a
              href="/quality"
              className="block  text-[#4C5A67] font-bold  py-2 px-2 hover:text-[#E6992A] rounded"
            >
             Finance
            </a>
            <a
              href="/contact"
              className="block text-[#4C5A67] font-bold py-2 px-2 hover:text-[#E6992A] rounded"
            >
             Spare Part
            </a>
            <a href="/quote" className="block py-2">
            <button className="font-bold inline-flex items-center justify-center bg-[#E6992A] w-[82px] h-[40px] py-1 px-3 focus:outline-none hover:bg-[#F2C94C] hover:border-[#F2C94C] border border-[#E6992A] rounded-lg text-base text-white ">
                  Login
                </button>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
