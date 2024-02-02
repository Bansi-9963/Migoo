import React from "react";
import { Link, useLocation } from "react-router-dom";
import Dashboard from "../Images/Dashboard.png";
import Navigation from "../Images/Navigation.png";
import order_history from "../Images/History.png";
import Wishlist from "../Images/Wishlist.png";
import ShoppingList from "../Images/Shopping_Cart.png";
import Settings from "../Images/Settings.png";
import Logout from "../Images/Logout.png";
import Address_Book from "../Images/Address_book.png";

const Navigation_Bar = () => {
  const location = useLocation();

  return (
    <div className="2xl:h-[470px] xl:w-[312px] rounded-lg border-[1px] border-[#E6E6E6] sticky top-20">
      <ul>
        <li className="lg:pl-[23px] pl-[14px] pr-[14px] pt-[24px] text-[20px] font-medium leading-[30px] 2xl:h-[70px]">
          <img src={Navigation} className="inline h-[18px] w-[18px] lg:hidden block" />
          <span className=" lg:block hidden text-xl font-normal leading-6">
            Navigation
          </span>
        </li>
        <Link to="/dashboard">
          <li
            className={`lg:pl-[23px] pl-[14px] pr-[14px] h-[56px] flex items-center ${location.pathname === "/dashboard"
                ? "bg-[#F2F0ED] border-l-[3px] border-[#E6992A]"
                : ""
              }`}
          >
            <img src={Dashboard} className="inline h-[18px] w-[18px]" />
            <span className="pl-[13px] lg:block hidden text-base font-normal leading-6">
              Dashboard
            </span>
          </li>
        </Link>

        <Link to="/order-history">
          <li
            className={`lg:pl-[23px] pl-[14px] pr-[14px] h-[56px] flex items-center hover:bg-[#F2F0ED] hover:border-l-[3px] hover: border-[#E6992A] transition duration-300 ${location.pathname === "/order-history"
                ? "bg-[#F2F0ED] border-l-[3px] border-[#E6992A]"
                : ""
              }`}
          >
            <img src={order_history} className="inline h-[18px] w-[18px]" />
            <span className="pl-[13px] text-base font-normal leading-6 lg:block hidden">
              Order History
            </span>
          </li>
        </Link>

        <li className="lg:pl-[23px] pl-[14px] pr-[14px] h-[56px] flex items-center hover:bg-[#F2F0ED] hover:border-l-[3px] hover: border-[#E6992A] transition duration-300">
          <img src={Wishlist} className="inline h-[18px] w-[18px]" />
          <span className="pl-[13px] text-base font-normal leading-6 lg:block hidden">
            Wishlist
          </span>
        </li>
        <li className="lg:pl-[23px] pl-[14px] pr-[14px] h-[56px] flex items-center hover:bg-[#F2F0ED] hover:border-l-[3px] hover: border-[#E6992A] transition duration-300">
          <img src={ShoppingList} className="inline h-[18px] w-[18px]" />
          <span className="pl-[13px] text-base font-normal leading-6 lg:block hidden">
            Shopping List
          </span>
        </li>
        <Link to="/settings">
          <li
            className={`lg:pl-[23px] pl-[14px] pr-[14px] h-[56px] flex items-center ${location.pathname === "/settings"
                ? "bg-[#F2F0ED] border-l-[3px] border-[#E6992A]"
                : ""
              }`}
          >
            <img src={Settings} className="inline h-[18px] w-[18px]" />
            <span className="pl-[13px] text-base font-normal leading-6 lg:block hidden">
              Settings
            </span>
          </li>
        </Link>
        <Link to="/billing-address">
          <li
            className={`lg:pl-[23px] pl-[14px] pr-[14px] h-[56px] flex items-center ${location.pathname === "/billing-address"
                ? "bg-[#F2F0ED] border-l-[3px] border-[#E6992A]"
                : ""
              }`}
          >
            <img src={Address_Book} className="inline h-[18px] w-[18px]" />
            <span className="pl-[13px] text-base font-normal leading-6 lg:block hidden">
              Address Book
            </span>
          </li>
        </Link>
        <li className="lg:pl-[23px] pl-[14px] pr-[14px] h-[56px] flex items-center hover:bg-[#F2F0ED] hover:border-l-[3px] hover: border-[#E6992A] transition duration-300">
          <img src={Logout} className="inline h-[18px] w-[18px]" />
          <span className="pl-[13px] text-base font-normal leading-6 lg:block hidden">
            Log-out
          </span>
        </li>
      </ul>
    </div>
  );
};

export default Navigation_Bar;