import React from "react";
import empty_cart from "../Images/Empty_Cart.png";

const Empty_Cart = () => {
  return (
    <div className="h-[913px] flex items-center justify-center">
      <div className="2xl:h-[571.03px] 2xl:w-[612px] ">
        <img src={empty_cart} className="mx-auto" />
        <center className="mt-[59px] font-semibold sm:text-[34px] text-[30px] sm:leading-[33.39px] leading-[30px]">
          Your cart is empty and sad :(
        </center>
        <p className="text-center font-normal text-[16px] sm:leading-[15.71px] text-[#807D7E] sm:mt-[12px] mt-2">
          Add something to make it happy!
        </p>
      </div>
    </div>
  );
};

export default Empty_Cart;
