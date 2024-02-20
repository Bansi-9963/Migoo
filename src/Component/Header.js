import Logo from "../Images/Migoo_Logo.png";
import Heart from "../Images/Heart.png";
import Shopping_Cart from "../Images/ShoppingCartSimple.png";
import User from "../Images/User.png";
import { useEffect } from "react";
import Dashboard from "../Images/Dashboard.png";
import order_history from "../Images/History.png";
import Wishlist from "../Images/Wishlist.png";
import ShoppingList from "../Images/Shopping_Cart.png";
import Settings from "../Images/Settings.png";
import Logout from "../Images/Logout.png";

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
  let user_options = document.getElementById("user_dash");
  user_options.classList.add("hidden");
  if (mob_menu.classList.contains("hidden")) {
    mob_menu.classList.remove("hidden");
  } else {
    mob_menu.classList.add("hidden");
  }
};

const handleUser = () => {
  let user_options = document.getElementById("user_dash");
  let mob_menu = document.getElementById("mobile_menu");
  mob_menu.classList.add("hidden");
  if (user_options.classList.contains("hidden")) {
    user_options.classList.remove("hidden");
  } else {
    user_options.classList.add("hidden");
  }
}
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
    <header className="relative bg-white z-10 h-[83px] md:h-auto" id="header_nav">
      <div className="container-1 relative z-[999] bg-white" id="Nav_Bar" >
        <div className="lg:h-[93px] md:h-[83px] h-[70px] flex justify-between items-center ">
          <div className="flex gap-10 items-center">
            <div className="xl:h-[70px] xl:w-[199px] lg:w-[159px] ssm:w-[109px] lg:h-[60px] md:w-[129px] md:h-[50px] ssm:h-10 w-[89px] h-8">
              <img
                src={Logo}
                className="xl:h-[70px] xl:w-[199px] lg:w-[159px] ssm:w-[109px] lg:h-[60px] md:w-[129px] md:h-[50px] ssm:h-10 w-[89px] h-8"
              />
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
            <div className="hidden lg:block">
              <img
                src={Heart}
                className="lg:w-8 md:w-7 lg:h-8 md:h-7 w-6 h-6"
              />
            </div>
            <div onClick={handleUser} className="lg:pointer-events-none pointer-events-auto cursor-pointer">
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
      {/* menu bar header */}
      <div className="h-[60px] lg:flex items-center hidden container-1 justify-between">
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
        <div className="flex gap-2 items-center">
          <div>
            <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.4355 2.375C15.9189 2.77396 17.2714 3.55567 18.3576 4.64184C19.4438 5.72801 20.2255 7.08051 20.6244 8.56388" stroke="#1A1A1A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M13.5303 5.75684C14.4201 5.99622 15.2314 6.46518 15.883 7.11675C16.5345 7.76832 17.0035 8.57964 17.2429 9.46946" stroke="#1A1A1A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M7.115 11.6517C8.02238 13.5074 9.5263 15.0048 11.3859 15.9042C11.522 15.9687 11.6727 15.9965 11.8229 15.985C11.9731 15.9735 12.1178 15.923 12.2425 15.8385L14.9812 14.0133C15.1022 13.9325 15.2414 13.8832 15.3862 13.8697C15.5311 13.8563 15.677 13.8792 15.8107 13.9363L20.9339 16.1325C21.1079 16.2065 21.2532 16.3349 21.3479 16.4986C21.4426 16.6622 21.4815 16.8522 21.4589 17.0399C21.2967 18.3069 20.6784 19.4713 19.7196 20.3153C18.7608 21.1592 17.5273 21.6248 16.25 21.6249C12.3049 21.6249 8.52139 20.0577 5.73179 17.2681C2.94218 14.4785 1.375 10.695 1.375 6.74992C1.37512 5.47271 1.84074 4.23933 2.68471 3.28069C3.52867 2.32206 4.6931 1.70389 5.96 1.54192C6.14771 1.51928 6.33769 1.55824 6.50134 1.65293C6.66499 1.74761 6.79345 1.8929 6.86738 2.06692L9.06537 7.19442C9.1219 7.32691 9.14485 7.4713 9.13218 7.61478C9.11951 7.75826 9.07162 7.89639 8.99275 8.01692L7.17275 10.7977C7.09015 10.9229 7.04141 11.0674 7.03129 11.2171C7.02117 11.3667 7.05001 11.5165 7.115 11.6517V11.6517Z" stroke="#1A1A1A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div className="text-[#1A1A1A] font-medium text-sm">
            (219) 555-0114
          </div>
        </div>
      </div>
      {/* search bar */}
      <div className="relative container-1 pt-5 mb-4 hidden" id="search_bar">
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
      {/* user icon dashboard */}
      <div id="user_dash" className="hidden absolute w-full z-[20] bg-white h-[100vh]">
        <div className="container-1">
          <div className="border-b-[1px] flex items-center gap-3">
            <p><img src={Dashboard} className="w-5 h-5" /></p>
            <p className="text-xl pt-3 pb-3">Dashboard</p>
          </div>
          <div className="border-b-[1px] flex items-center gap-3">
            <p><img src={order_history} className="w-5 h-5" /></p>
            <p className="text-xl pt-3 pb-3">Order History</p>
          </div>
          <div className="border-b-[1px] flex items-center gap-3">
            <p><img src={Wishlist} className="w-5 h-5" /></p>
            <p className="text-xl pt-3 pb-3">Wishlist</p>
          </div>
          <div className="border-b-[1px] flex items-center gap-3">
            <p><img src={ShoppingList} className="w-5 h-5" /></p>
            <p className="text-xl pt-3 pb-3">Shopping List</p>
          </div>
          <div className="border-b-[1px] flex items-center gap-3">
            <p><img src={Settings} className="w-5 h-5" /></p>
            <p className="text-xl pt-3 pb-3">Settings</p>
          </div>
          <div className="border-b-[1px] flex items-center gap-3">
            <p><img src={Logout} className="w-5 h-5" /></p>
            <p className="text-xl pt-3 pb-3">Log-Out</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;