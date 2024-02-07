import React from "react";
import product_detail_style from "../../CSS/Product_Details.module.css";

const OfferCard = () => {
  return (
    <>
      <div className="grid grid-cols-3 ssm:grid-cols-12 gap-2 ssm:gap-3 pl-[17px] pr-[24px]  py-3 ssm:py-0 justify-items-center  shadow-md">
        <div className=" ssm:col-span-3 place-self-start">
          <p
            className={`${product_detail_style.text_xs} text-[#333333] pt-[15px]`}
          >
            Sold by
          </p>
          <h5
            className={`${product_detail_style.text_xs} text-black ssm:pb-[13px]`}
          >
            Migoo Spare Part
          </h5>
        </div>
        <div className=" py-3 ssm:py-5 ssm:col-span-2 self-start ">
          <p className="text-[#D2871C] rounded-[4px] bg-[#E6992A1A] text-[10px] leading-[15px] py-[6px] px-1 sm:px-5 w-[60px] sm:w-[92px] h-[29px] my-auto">
            10 In Stock
          </p>
        </div>

        <div className="ssm:col-span-2 justify-self-end">
          <p
            className={`${product_detail_style.text_xs} text-[#333333] font-normal pt-[15px] `}
          >
            Price
          </p>
          <h5
            className={`${product_detail_style.small_text} text-black font-normal ssm:pb-[13px] `}
          >
            ₹ 3600
          </h5>
        </div>

        <div className="ssm:col-span-5 col-span-3 grid grid-cols-2 2xl:gap-5 gap-4 w-full ssm:gap-2 ssm:justify-self-end justify-self-center justify-between">
          <button className="bg-[#E6992A] self-center px-2 hover:bg-white hover:text-[#F2C94C] py-2  text-white   w-full    text-[12px] ssm:text-[8px] sm:text-[10px]  font-bold rounded-[4px] hover:border-[#F2C94C] border border-[#E6992A] ">
            Add To Cart
          </button>
          <button className="  self-center text-white w-auto py-2 hover:bg-white bg-[#E6992A] text-[12px] ssm:text-[8px]  sm::text-[10px] hover:text-[#F2C94C] font-semibold rounded-[4px] hover:border-[#F2C94C] border border-[#E6992A] ">
            Buy Now
          </button>
        </div>
      </div>
    </>
  );
};

export default OfferCard;
