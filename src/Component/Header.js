import Logo from "../Images/Migoo_Logo.png";
import Heart from "../Images/Heart.png";
import Shopping_Cart from "../Images/ShoppingCartSimple.png";
import User from "../Images/User.png";
import { useEffect } from "react";

const toggleElement = (elementId) => {
  const element = document.getElementById(elementId);
  element.classList.toggle("hidden");
};

const handleClick = () => {
  toggleElement("search_bar");
  toggleElement("Nav_Bar");
};

const handleClose = () => {
  toggleElement("search_bar");
  toggleElement("Nav_Bar");
};

const handleHamburger = () => {
  let mob_menu = document.getElementById("mobile_menu");
  if (mob_menu.classList.contains("hidden")) {
    mob_menu.classList.remove("hidden");
  } else {
    mob_menu.classList.add("hidden");
  }
};
const Header = () => {
  useEffect(() => {
    const topNav = document.getElementById("header_nav");
    const handleScroll = () => {
      const isSticky = window.scrollY > 105;
      topNav.classList.toggle("sticky", isSticky);
      topNav.classList.toggle("static", !isSticky);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header className="border-b-[1px] relative bg-white z-10" id="header_nav">
      <div className="container-1 " id="Nav_Bar">
        <div className="lg:h-[93px] md:h-[83px] h-[70px] flex justify-between items-center ">
          <div className="flex gap-10 items-center">
            <div className="xl:h-[70px] xl:w-[199px] lg:w-[159px] ssm:w-[109px] lg:h-[60px] md:w-[129px] md:h-[50px] ssm:h-10 w-[89px] h-8">
              <img
                src={Logo}
                className="xl:h-[70px] xl:w-[199px] lg:w-[159px] ssm:w-[109px] lg:h-[60px] md:w-[129px] md:h-[50px] ssm:h-10 w-[89px] h-8"
              />
            </div>
            <div className="h-[60px] lg:flex items-center hidden">
              <div className="flex xl:h-[21px] items-center gap-8">
                <div>
                  <a className="font-medium leading-[21px] text-sm">Home</a>
                </div>
                <div>
                  <a className="font-medium leading-[21px] text-sm">About Us</a>
                </div>
                <div>
                  <a className="font-medium leading-[21px] text-sm flex mt-[3px]">
                    Shop
                    <span className="h-2 mt-[7px] ml-2">
                      <svg
                        width="12"
                        height="8"
                        viewBox="0 0 12 8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1.33268 1.6665L5.99935 6.33317L10.666 1.6665"
                          stroke="#666666"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </a>
                </div>
                <div>
                  <a className="font-medium leading-[21px] text-sm flex mt-[3px]">
                    Pages
                    <span className="h-2 mt-[7px] ml-2">
                      <svg
                        width="12"
                        height="8"
                        viewBox="0 0 12 8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1.33268 1.6665L5.99935 6.33317L10.666 1.6665"
                          stroke="#666666"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </a>
                </div>
                <div>
                  <a className="font-medium leading-[21px] text-sm">
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-[194px] lg:h-8 flex lg:gap-6 md:gap-4 gap-3 relative items-center">
            <div onClick={handleClick}>
              <svg
                width="28"
                height="28"
                viewBox="0 0 20 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.16667 16.3333C12.8486 16.3333 15.8333 13.3486 15.8333 9.66667C15.8333 5.98477 12.8486 3 9.16667 3C5.48477 3 2.5 5.98477 2.5 9.66667C2.5 13.3486 5.48477 16.3333 9.16667 16.3333Z"
                  stroke="#1A1A1A"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M17.5 18L13.875 14.375"
                  stroke="#1A1A1A"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div>
              <img
                src={Shopping_Cart}
                className="lg:w-8 md:w-7 lg:h-8 md:h-7 w-6 h-6"
              />
            </div>
            <div>
              <img
                src={Heart}
                className="lg:w-8 md:w-7 lg:h-8 md:h-7 w-6 h-6"
              />
            </div>
            <div className="hidden lg:block">
              <img src={User} className="lg:w-8 md:w-7 lg:h-8 md:h-7 w-6 h-6" />
            </div>
            <div
              className="block lg:hidden md:w-7 md:h-7 w-6 h-6 md:mt-[3px] mt-[2px]"
              onClick={handleHamburger}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                id="menu-icon"
                viewBox="0 0 44 42"
              >
                <g transform="translate(-1047.87 -323)">
                  <path
                    d="M-37.13,325h40"
                    transform="translate(1087 6)"
                    fill="none"
                    stroke="#000"
                    strokeLinecap="round"
                    strokeWidth="2"
                  ></path>
                  <path
                    d="M-37.13,325h40"
                    transform="translate(1087 18)"
                    fill="none"
                    stroke="#000"
                    strokeLinecap="round"
                    strokeWidth="2"
                  ></path>
                  <path
                    d="M-37.13,325h40"
                    transform="translate(1087 30)"
                    fill="none"
                    stroke="#000"
                    strokeLinecap="round"
                    strokeWidth="2"
                  ></path>
                </g>
              </svg>
            </div>
            <div className="w-4 h-4 bg-[#E6992A] rounded-full absolute lg:left-[68px] lg:bottom-4 md:bottom-3  md:left-[60px] md:top-0 left-[52px] top-[-2px]">
              <p
                className="flex  justify-center text-[11px] font-bold text-white"
                id="badge"
              >
                0
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="relative container-1 pt-4 mb-4 hidden" id="search_bar">
        <div className="flex justify-between gap-5">
          <div className="relative w-full shadow" id="srch_inp">
            <input
              id="search"
              type="text"
              className="w-full h-10 border-[#E6E6E6] border-[1px] rounded-md focus:outline-none pl-3"
            />
            <span className="absolute md:w-20 w-16 h-10 bg-[#E6992A] flex items-center justify-center text-white top-0 right-0 rounded-r-md font-semibold text-sm">
              Search
            </span>
          </div>
          <div onClick={handleClose}>
            <svg
              width="40"
              height="40"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              data-astro-cid-red7taoy=""
            >
              <rect
                width="48"
                height="48"
                fill="none"
                fillOpacity="1"
                data-astro-cid-red7taoy=""
              ></rect>
              <path
                d="M14 14L34 34"
                stroke="#000"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
                data-astro-cid-red7taoy=""
              ></path>
              <path
                d="M14 34L34 14"
                stroke="#000"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
                data-astro-cid-red7taoy=""
              ></path>
            </svg>
          </div>
        </div>
      </div>
      {/* Mobile Hamburger */}
      <div
        id="mobile_menu"
        className="hidden absolute w-full z-[20] bg-white h-[100vh]"
      >
        <div className="container-1">
          <div className="border-b-[1px]">
            <p className="text-xl pt-3 pb-3">Home</p>
          </div>
          <div className="border-b-[1px]">
            <p className="text-xl pt-3 pb-3">About Us</p>
          </div>
          <div className="w-full flex justify-between items-center border-b-[1px]">
            <p className="text-xl pt-3 pb-3">Shop</p>
            <div className="mr-2">
              <svg
                width="18"
                height="18"
                viewBox="0 0 12 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.33268 1.6665L5.99935 6.33317L10.666 1.6665"
                  stroke="#666666"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </div>
          </div>
          <div className="w-full flex justify-between items-center border-b-[1px]">
            <p className="text-xl pt-3 pb-3">Pages</p>
            <div className="mr-2">
              <svg
                width="18"
                height="18"
                viewBox="0 0 12 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.33268 1.6665L5.99935 6.33317L10.666 1.6665"
                  stroke="#666666"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </div>
          </div>
          <div className="border-b-[1px]">
            <p className="text-xl pt-3 pb-3">Contact Us</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
