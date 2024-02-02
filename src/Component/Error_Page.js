import React from "react";
import error from "../Images/error_404.png";
import { Link } from "react-router-dom";

const Error_Page = () => {
  return (
    <div className="h-[913px] flex items-center justify-center">
      <div className="2xl:h-[571.03px] 2xl:w-[612px] ">
        <img src={error} className="mx-auto" />
        <center className="mt-[32px] font-semibold sm:text-[32px] text-[22px] sm:leading-[48px] leading-[24px]">
          Oops! page not found
        </center>
        <p className="text-center font-normal text-[16px] sm:leading-6 text-[#808080]">
          Ut consequat ac tortor eu vehicula. Aenean accumsan purus eros.
          Maecenas sagittis tortor at metus mollis
        </p>
        <button className="w-[163px] h-[45px] mt-6 bg-[#E6992A] text-[14px] flex items-center rounded-[43px] mx-auto text-white font-semibold justify-center focus: outline-none">
          <Link to="/">Back to Home</Link>
        </button>
      </div>
    </div>
  );
};

export default Error_Page;
