import React , { useState } from 'react';
const MyShoppingcartItem = (props) => {
   const [quantity, setQuantity] = useState(0);

   const decrement = () => {
       if (quantity > 0) {
           setQuantity(quantity - 1);  
       }
   };

   const increment = () => {
       setQuantity(quantity + 1);
   };
 
   const subtotal = props.item_price * quantity;
return (
<tr className="bg-white hover:bg-gray-50 border-b">
   <th
      scope="row"
      className="px-2 sm:px-4 md:px-6 py-2.5 font-medium text-gray-900 whitespace-nowrap flex  xl:flex-row md:flex-col-reverse md:flex-row flex-col-reverse"
      >
      <img src={props.item_image} alt="Product Image"  className="sm:w-[100px]  w-[60px] sm:h-[100px] h-[70px]"/>
      <p className="text-gray-900 text-base font-normal leading-6 xl:self-center xl:pl-3 pl-0">{props.item_name}</p>
   </th>
   <td className="px-2 sm:px-4 md:px-6 py-4 text-gray-900 text-base font-medium leading-6 self-center">
      ${props.item_price}
   </td>
   <td className="px-2 sm:px-4 md:px-6 py-4 text-gray-900 text-base font-medium leading-6 self-center">
   <div className="py-1 px-1 inline-block bg-white border border-gray-200 rounded-[170px]  ">
            <div className="flex items-center gap-x-1.5">
                <button
                    data-action="decrement"
                    className="bg-[#F2F2F2] border border-gray-300 md:p-2.5 p-1.5 focus:ring-[#E6992A] focus:ring-2 focus:outline-none rounded-full m-1"
                    onClick={decrement}
                >
                    <svg
                        className="w-3 h-3 text-black"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 18 2"
                    >
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h16" />
                    </svg>
                </button>
                <input
                    type="number"
                    className="p-0 w-5 bg-transparent border-0 text-gray-800 text-center focus:ring-0 dark:text-black"
                    name="custom-input-number"
                    value={quantity}
                    readOnly
                />
                <button
                    data-action="increment"
                    className="bg-[#F2F2F2] border border-gray-300 md:p-2.5 p-1.5 focus:ring-[#E6992A] focus:ring-2 focus:outline-none rounded-full m-1"
                    onClick={increment}
                >
                    <svg
                        className="w-3 h-3 text-black"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 18 18"
                    >
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16" />
                    </svg>
                </button>
            </div>
        </div>
   </td>
   <td className="px-2 sm:px-4 md:px-6 py-4 text-gray-900 text-base font-medium leading-6 self-center">
   ${subtotal.toFixed(2)}
   </td>
   <td className="px-2 sm:px-4 md:px-6 py-4 text-gray-900 text-base font-medium leading-6 self-center">
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
   </td>
</tr>
);
};
export default MyShoppingcartItem;