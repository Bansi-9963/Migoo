import React, { useState, useEffect } from 'react';
import '../App.css';
import '../CSS/Order_detail.css';
import ProductImage from '../Images/Image.png';
import Productimage1 from '../Images/Gear.png';
import MyShoppingcartItem from '../Component/MyShoppingcartItem';
import MyShoppingCartMobile from '../Component/MyShoppingCartMobile';
import { Link } from 'react-router-dom';
const MyShoppingCart = () => {

   const [Data, setData] = useState([])
   const [productDetail, setProductDetail] = useState([])


   useEffect(() => {
      const fetchData = async () => {
         try {
            const response = await fetch('http://192.168.2.134:8000/api/cart-view/');
            const Product_Category_Data = await response.json();


            const response_data = await fetch('http://192.168.2.134:8000/api/product-detail/');
            const Product_detail_data = await response_data.json();



            const filteredData = Product_Category_Data.filter(item => {

               return item.owner_id == 3;
            })[0].basket;


            setData(filteredData);
            setProductDetail(Product_detail_data);
         } catch (error) {
            console.error('Error fetching data:', error);
         }
      };

      fetchData();
   }, []);
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
      return Data.map((product, index) => {
         const matchingItem = productDetail.find(item => product.product_id === item.id);
         if (matchingItem) {
            return (
               <MyShoppingCartMobile
                  key={index}
                  image={matchingItem.images[0].original}
                  title={matchingItem.title}
                  quantity ={product.quantity}
                  originalPrice={matchingItem.prices[0].price}
               // Pass other props as needed
               />
            );
         } else {
            return null;
         }
      });
   };



   const renderTableItems = () => {
      return Data.map((product, index) => {
         const matchingItem = productDetail.find(item => product.product_id === item.id);
         if (matchingItem) {
        
            return <MyShoppingcartItem
               key={index}
               item_name={matchingItem.title}
               item_image={matchingItem.images[0].original}
               item_price={matchingItem.prices[0].price}
               quantity={product.quantity}
               sub_total={`$${parseFloat(matchingItem.originalPrice).toFixed(2)}`}
            />;
         } else {
            return null;
         }
      });
   };

   return (
      <>
         {/* breadcrumbs */}
         <section className='container-1'>
            <div id='breadcrumbs' className='lg:h-[62px] h-11 w-full flex items-center gap-[10px]'>
               <div className='flex items-center'>
                  <div>
                     <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.875 15.2498V11.4998C9.875 11.334 9.80915 11.1751 9.69194 11.0579C9.57473 10.9406 9.41576 10.8748 9.25 10.8748H6.75C6.58424 10.8748 6.42527 10.9406 6.30806 11.0579C6.19085 11.1751 6.125 11.334 6.125 11.4998V15.2498C6.125 15.4156 6.05915 15.5745 5.94194 15.6917C5.82473 15.809 5.66576 15.8748 5.5 15.8748H1.75C1.58424 15.8748 1.42527 15.809 1.30806 15.6917C1.19085 15.5745 1.125 15.4156 1.125 15.2498V8.02324C1.1264 7.93674 1.14509 7.8514 1.17998 7.77224C1.21486 7.69308 1.26523 7.6217 1.32812 7.5623L7.57812 1.88261C7.69334 1.77721 7.84384 1.71875 8 1.71875C8.15616 1.71875 8.30666 1.77721 8.42187 1.88261L14.6719 7.5623C14.7348 7.6217 14.7851 7.69308 14.82 7.77224C14.8549 7.8514 14.8736 7.93674 14.875 8.02324V15.2498C14.875 15.4156 14.8092 15.5745 14.6919 15.6917C14.5747 15.809 14.4158 15.8748 14.25 15.8748H10.5C10.3342 15.8748 10.1753 15.809 10.0581 15.6917C9.94085 15.5745 9.875 15.4156 9.875 15.2498Z" stroke="#5F6C72" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                     </svg>
                  </div>
                  <div className='pl-2 pt-[3px]'>
                     <Link to="/">
                        <p className='text-[#5F6C72] text-base'>Home</p>
                     </Link>
                  </div>
               </div>
               <div className='pt-1'>
                  <svg width="10" height="12" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M1.5 1.25L5.25 5L1.5 8.75" stroke="#77878F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
               </div>
               <div className='pt-1'>
                  <p className='text-[#E6992A] font-medium text-base'>Shopping Cart</p>
               </div>
            </div>
         </section>

         <section className="container-1 py-5 sm:py-5">
            <div className="text-gray-900 text-2xl font-medium ">My Shopping Cart</div>
            <div className="ssm:hidden block grid ssm:grid-cols-2 grid-cols-1 ssm:gap-6 gap-4 mt-6 mb-4 ">
               {renderMobileItems()}
            </div>
            <div className="grid grid-cols-12 gap-6 mt-6 ">

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

                     <button className="px-8 py-3.5  rounded-full bg-gray-50 text-gray-300 font-semibold my-4 text-[#4f4f4f]">Return To Shop</button>
                  </div>
               </div>
               <div className=" max-h-[290px] bg-white border-t border-gray-100 py-3 px-6 leading-6 lg:mt-4 ssm:px-6 ssm:rounded-md ssm:border ssm:border-gray-100 lg:col-span-4 col-span-12">

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

                  <button className="px-8 lg:py-3.5 py-2 my-3 text-white rounded-full bg-[#E6992A] font-semibold w-full">Proceed to checkout</button>

               </div>
            </div>
         </section>
      </>
   );
};
export default MyShoppingCart;