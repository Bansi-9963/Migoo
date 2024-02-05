import React from 'react';
import '../App.css';
import '../CSS/Order_detail.css';
import ProductImage from '../Images/Image.png';
import Productimage1 from '../Images/Gear.png';
import MyShoppingcartItem from '../Component/MyShoppingcartItem';
import MyShoppingCartMobile from '../Component/MyShoppingCartMobile';
const MyShoppingCart = () => {
   const products = [
      {
        image: `${ProductImage}`,
        text: 'Engine Part',
        originalPrice: '14.99',
       
      },
      {
         image: `${Productimage1}`,
         text: 'Engine Part',
         originalPrice: '14.99',
         
       },
     
    ];
  
    // Render mobile items
    const renderMobileItems = () => {
      return products.map((product, index) => (
        <MyShoppingCartMobile key={index} {...product} />
      ));
    };
  
    // Render table items
    const renderTableItems = () => {
      return products.map((product, index) => (
        <MyShoppingcartItem
          key={index}
          item_name={product.text}
          item_image={product.image}
          item_price={product.originalPrice}
          sub_total={`$${parseFloat(product.originalPrice).toFixed(2)}`}
        />
      ));
    };
return (
<section className="container-1 py-10 sm:py-20">
   <div className="text-gray-900 text-2xl font-medium ">My Shopping Cart</div>
   <div className="ssm:hidden block grid ssm:grid-cols-2 grid-cols-1 ssm:gap-6 gap-4 mt-4 ssm:mb-0 mb-[210px]">
   {renderMobileItems()}
   </div>
   <div className="grid grid-cols-12 gap-6 ">
      <div className="relative overflow-x-auto mt-4 rounded-md  lg:col-span-8 col-span-12 border border-gray-100 ssm:block hidden">
         <table className="w-full text-sm xl:text-base text-left rtl:text-right text-gray-500">
            <thead className=" text-gray-700 uppercase ">
               <tr className="text-sm w-full text-[#808080] border-b">
                  <th scope="col" className="px-2 sm:px-6 py-6">
                     PRODUCT
                  </th>
                  <th scope="col" className="px-2 sm:px-6 py-3">
                     PRICE
                  </th>
                  <th scope="col" className="px-2 sm:px-6 py-3">
                     QUANTITY
                  </th>
                  <th scope="col" className="px-2 sm:px-6 py-3">
                     SUBTOTAL
                  </th>
                  <th scope="col" className="px-2 sm:px-6 py-3">
                     <span className="sr-only">Edit</span>
                  </th>
               </tr>
            </thead>
            <tbody>
            {renderTableItems()}
            </tbody>
         </table>
         <div className="flex flex-row px-6 ">
            <button className="px-8 py-3.5  rounded-full bg-gray-50 text-gray-300 font-semibold my-4 text-[#4D4D4D]">Return To Shop</button>
         </div>
      </div>
      <div className="max-h-[447px] max-[447px]:fixed max-[447px]:bottom-0 max-[447px]:left-0 max-[447px]:w-full bg-white border-t border-gray-100 py-3 px-6 leading-6 ssm:mt-4 ssm:px-6 ssm:rounded-md ssm:border ssm:border-gray-100 lg:col-span-4 col-span-12">
         <div className="font-medium text-[20px]">Cart Total </div>
         <div className="divide-y-2">
            <div className="subtotal py-2 ssm:py-3 flex justify-between">
               <span className="text-[#4D4D4D] ">Subtotal:</span>
               <span className="text-[#1A1A1A] text-end">$84.00</span>
            </div>
            <div className="shipping py-2 ssm:py-3 flex justify-between">
               <span className="text-[#4D4D4D]">Shipping:</span>
               <span className="text-[#1A1A1A]">Free</span>
            </div>
            <div className="total py-2 ssm:py-3 flex justify-between">
               <span className="font-normal text-[#4D4D4D]">Total:</span>
               <span className="font-semibold text-[#1A1A1A]">$84.00</span>
            </div>
         </div>
         <button className="px-8 py-3.5 mb-2.5 text-white rounded-full bg-[#E6992A] font-semibold w-full">Proceed to checkout</button>
      </div>
   </div>
</section>
);
};
export default MyShoppingCart;