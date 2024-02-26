import React , { useState } from 'react';
const OrderdetailItem = (props) => {
   
 
 
return (
<tr className="bg-white hover:bg-gray-50 border-b">
   <th
      scope="row"
      className="px-2 sm:px-4 md:px-6 py-2.5 font-medium text-gray-900 whitespace-nowrap flex  xl:flex-row md:flex-col-reverse md:flex-row flex-col-reverse"
      >
      <img src={props.item_image} alt="Product Image"  className="sm:w-[100px]  w-[60px] sm:h-[100px] h-[70px]"/>
      <p className="text-gray-900 text-sm font-normal leading-6 xl:self-center xl:pl-3 pl-0">{props.item_name}</p>
   </th>
   <td className="px-2 sm:px-4 md:px-6 py-4 text-gray-900 text-sm font-medium leading-6 self-center">
      ${props.item_price}
   </td>
   <td className="px-2 sm:px-4 md:px-6 py-4 text-gray-900 text-sm font-medium leading-6 self-center">
      X{props.qty}
   </td>
   <td className="px-2 sm:px-4 md:px-6 py-4 text-gray-900 text-sm font-medium leading-6 self-center">
   ${props.subtotal}
   </td>

</tr>
);
};
export default OrderdetailItem;