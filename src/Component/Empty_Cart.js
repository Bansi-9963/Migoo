import React from "react";
import empty_cart from "../Images/Empty_Cart.png";

const Empty_Cart = () => {
  return (
    <div className="xl:py-[140px] lg:py-[100px] md:py-[80px] py-16 flex items-center justify-center">
      <div className="xl:h-[571.03px] xl:w-[612px] ">
        <img src={empty_cart} className="mx-auto xl:w-[520px] xl:h-[383px] lg:w-[460px] lg:h-[353px] md:w-[420px] md:h-[309.34px]" />
        <center className="md:mt-[59px] mt-8 font-semibold sm:text-[34px] md:text-[30px] text-2xl sm:leading-[33.39px] leading-[30px]">
          Your cart is empty and sad :(
        </center>
        <p className="text-center font-normal text-[16px] sm:leading-[15.71px] text-[#807D7E] sm:mt-[12px] mt-1">
          Add something to make it happy!
        </p>
      </div>
    </div>
  );
};

export default Empty_Cart;
