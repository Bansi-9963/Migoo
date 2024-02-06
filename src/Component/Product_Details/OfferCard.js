import React from 'react'

const OfferCard = () => {

    
  return (
    <>
      <div className="grid grid-cols-7 gap-3 pl-[17px] justify-items-center  shadow-md">
        <div className=" col-span-2 place-self-start">
          <p className="pt-[15px]">Sold by</p>
          <h5 className="pb-[13px]">Migoo Spare Part</h5>
        </div>
        <div className=" py-5 px-4 ">
          <p className="text-[#D2871C] rounded-[4px] bg-[#E6992A1A] text-[14px] leading-[21px] py-[4px] px-[8px] w-[92px] h-[29px] my-auto">
            10 In Stock
          </p>
        </div>

        <div className="">
          <p className="pt-[15px] text-[12px] leading-[18px] ">Price</p>
          <h5 className="pb-[13px] text-[14px] leading-[21px]">₹ 3600</h5>
        </div>

        <div className="col-span-3  grid grid-cols-2 gap-5 justify-between">
          <button className="bg-[#E6992A] self-center px-4 hover:bg-white hover:text-[#F2C94C] py-2  text-white   w-auto    text-[10px]  font-bold rounded-[4px] hover:border-[#F2C94C] border border-[#E6992A] ">
            Add To Cart
          </button>
          <button className=" focus:outline-0 self-center text-white w-auto py-2  bg-[#E6992A] text-[10px] font-semibold rounded-[4px] lg:block hidden">
            Buy Now
          </button>
        </div>
      </div>
    </>
  );
}

export default OfferCard;
