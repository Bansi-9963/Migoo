import React from 'react';
import Productimage from '../Images/Image.png';
import Productimage1 from '../Images/Gear.png';
const MyWishListItem = (props) => {
const isOutOfStock = props.stock_status === 'Out Of Stock';
return (
<tr className={`bg-white border-b  hover:bg-gray-50 text-gray-900 text-base font-normal leading- ${isOutOfStock ? 'out-of-stock-style' : ''}`}>
<th scope="row" className="px-6 sm:px-6 py-2.5 whitespace-nowrap  flex lg:flex-row flex-col-reverse">
   <img src={props.item_image} alt="Product Image" className="w-[100px] h-[100px]" />
   <p className="self-start lg:self-center lg:pl-6 xl:pl-10">
      {props.item_name}
   </p>
</th>
<td className="px-2 sm:px-6 lg:px-12 xl:px-20 py-4  self-center">
   {props.item_price}<br className="sm:hidden block"/>
   <span className="text-gray-400 text-base font-normal leading-6 line-through">{props.item_price2}</span>
</td>
<td className="px-2 sm:px-4 lg:px-12 xl:px-20 py-4  self-center">
   <span className={`py-1 px-2 rounded-md ${isOutOfStock ? 'bg-red-600 bg-opacity-20 text-branding-error' : 'bg-yellow-300 bg-opacity-20 text-branding-success-dark'} text-sm font-normal leading-7`}>
   {isOutOfStock ?  props.stock_status : props.stock_status}
   </span>
</td>
<td className="px-2 sm:px-4    py-4 text-right self-center">
   <div className="flex gap-5">
      <div className={`px-4 md:px-8 py-3.5 btn text-white rounded-full ${isOutOfStock ? 'bg-[#F2F2F2] font-semibold' : 'bg-[#E6992A] font-semibold'} lg:hidden block`}>
      <svg xmlns="http://www.w3.org/2000/svg" height="16" width="18" viewBox="0 0 576 512">
         <path fill="#ffffff" d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/>
      </svg>
   </div>
   {isOutOfStock ? (
   <button className="px-8 py-3.5 focus:outline-0 text-[#B3B3B3] rounded-full bg-[#F2F2F2] font-semibold lg:block hidden">
   Add To Cart
   </button>
   ) : (
   <button className="px-8 py-3.5 focus:outline-0 text-white rounded-full bg-[#E6992A] font-semibold lg:block hidden">Add To Cart</button>
   )}
   <div className="self-center">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
         <g clipPath="url(#clip0_476_1809)">
            <path d="M12 23C18.0748 23 23 18.0748 23 12C23 5.92525 18.0748 1 12 1C5.92525 1 1 5.92525 1 12C1 18.0748 5.92525 23 12 23Z" stroke="#CCCCCC" strokeMiterlimit="10" />
            <path d="M16 8L8 16" stroke="#666666" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M16 16L8 8" stroke="#666666" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
         </g>
         <defs>
            <clipPath id="clip0_476_1809">
               <rect width="24" height="24" fill="white" />
            </clipPath>
         </defs>
      </svg>
   </div>
   </div>
</td>
</tr>
);
};
export default MyWishListItem;