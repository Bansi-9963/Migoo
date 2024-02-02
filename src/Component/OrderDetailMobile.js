import React ,{ useState } from "react";
const OrderDetailMobile = ({
  image,
  text,
  originalPrice,
  qty
 
}) => {

 
   const subtotal = originalPrice * qty;
  return (
    <div className="relative  overflow-hidden border border-gray-100  ssm:block flex">
      <div className="h-[100px] w-[110px] px-2">
        <img className="w-full h-full object-contain" src={image} alt={text} />
        
      </div>
      <div className="px-[14px] pt-4 pb-[9px] text-gray-900 text-sm font-normal leading-6">
        <div className=" mb-1 ">
          <div className="text-lg font-semibold w-[104px]">{text}</div>
        </div>
        <p className="mb-2 flex  items-baseline">
          ${originalPrice}
          <div className="py-1 px-1 inline-block   ml-3">
            X{qty}
          </div>
        </p>
        <div className="flex justify-between items-center mb-2">
          <span className="mb-2 ">SubTotal: ${subtotal.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
};
export default OrderDetailMobile;