import React, { useState } from 'react';
import Productimage from '../Images/Image.png';
import Productimage1 from '../Images/Gear.png';
import "../CSS/Order_detail.css"
const BillingInformation = (props) => {
const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [errors, setErrors] = useState({});
const validateForm = () => {
let errors = {};
if (name.trim() === '') {
errors.name = 'Name is required';
}
if (email.trim() === '') {
errors.email = 'Email is required';
} else if (!/\S+@\S+\.\S+/.test(email)) {
errors.email = 'Email is not valid';
}
if (password.trim() === '') {
errors.password = 'Password is required';
} else if (password.length < 8) {
errors.password = 'Password must be at least 8 characters';
}
setErrors(errors);
return Object.keys(errors).length === 0;
};
const handleSubmit = (e) => {
e.preventDefault();
if (validateForm()) {
console.log('Form submitted successfully');
} else {
console.log('Form submission failed');
}
};
return (


   <section className="container-1 py-10 sm:py-20">
     <div className="grid grid-cols-12  gap- 0 sm:gap-6">
       <div className="xl:col-span-8 lg:col-span-7 col-span-12">
       <div className="min-h-full  lg:pb-9 pb-0 px-0 lg:px-4 sm:px-6 lg:px-8">
            <div className="w-full space-y-8">
               <h2 className="sm:text-3xl text-2xl font-medium">Billing Information</h2>
               <form className="mt-7 w-full">
            <div className="grid grid-cols-12 gap-4 ">
              <div className="md:col-span-4 ssm:col-span-6 col-span-12 ">
                <p className="text-[14px] font-normal leading-[21px]">
                  First Name
                </p>
                <input
                  type="text"
                  placeholder="Dianne"
                  className="w-full mt-[6px] rounded-md border-[1px] border-[#E6E6E6] flex items-center pl-[16px] focus:border-[#E6992A] focus:outline-none"
                />
              </div>
              <div className="md:col-span-4 ssm:col-span-6 col-span-12">
                <p className="text-[14px] font-normal leading-[21px]">
                  Last Name
                </p>
                <input
                  type="text"
                  placeholder="Dianne"
                  className="w-full mt-[6px] rounded-md border-[1px] border-[#E6E6E6] flex items-center pl-[16px] focus:border-[#E6992A] focus:outline-none"
                />
              </div>
              <div className="md:col-span-4 ssm:col-span-6 col-span-12">
                <p className="text-[14px] font-normal leading-[21px] ">
                  Company Name <span className="2xl:ml-1 text-[#808080]">(optional)</span>
                </p>

                <input
                  type="text"
                  placeholder="Dianne"
                  className="w-full  mt-[6px] rounded-md border-[1px] border-[#E6E6E6] flex items-center pl-[16px] focus:border-[#E6992A] focus:outline-none"
                />
              </div>
              <div className="md:col-span-12 ssm:col-span-6 col-span-12">
                <p className="text-[14px] font-normal leading-[21px]">
                  Street Address
                </p>
                <input
                  type="text"
                  placeholder="Street Address"
                  className="w-full mt-[6px] rounded-md border-[1px] border-[#E6E6E6] flex items-center pl-[16px] focus:border-[#E6992A] focus:outline-none"
                />
              </div>
              <div className="md:col-span-4 ssm:col-span-6 col-span-12">
                <p className="text-[14px] font-normal leading-[21px]">
                  Country / Region
                </p>
                <select
                  name="country"
                  id="country"
                  className="w-full py-2 px-3 mt-[6px] text-[#666] rounded-md border-[1px] bg-transparent border-[#E6E6E6] flex items-center pl-[16px] focus:border-[#E6992A] focus:outline-none"
                >
                  <option value="volvo">United States</option>
                </select>
              </div>
              <div className="md:col-span-4 ssm:col-span-6 col-span-12">
                <p className="text-[14px] font-normal leading-[21px]">States</p>
                <select
                  name="states"
                  id="states"
                  className="w-full  py-2 px-3 mt-[6px] text-[#666] rounded-md border-[1px] bg-transparent border-[#E6E6E6] flex items-center pl-[16px] focus:border-[#E6992A] focus:outline-none"
                >
                  <option value="volvo">Washington DC</option>
                </select>
              </div>
              <div className="md:col-span-4 ssm:col-span-6 col-span-12">
                <p className="text-[14px] font-normal leading-[21px]">
                  Zip Code
                </p>
                <input
                  type="text"
                  placeholder="200333"
                  className="w-full  mt-[6px] rounded-md border-[1px] border-[#E6E6E6] flex items-center pl-[16px] focus:border-[#E6992A] focus:outline-none"
                />
              </div>
              <div className="md:col-span-6 ssm:col-span-6 col-span-12" >
                <p className="text-[14px] font-normal leading-[21px]">Email</p>
                <input
                  type="email"
                  placeholder="dianne.russell@gmail.com"
                  className="w-full  mt-[6px] rounded-md border-[1px] border-[#E6E6E6] flex items-center pl-[16px] focus:border-[#E6992A] focus:outline-none"
                />
              </div>
              <div className="md:col-span-6 ssm:col-span-6 col-span-12">
                <p className="text-[14px] font-normal leading-[21px]">Phone</p>
                <input
                  type="tel"
                  placeholder="(603) 555-0123"
                  className="w-full  mt-[6px] rounded-md border-[1px] border-[#E6E6E6] flex items-center pl-[16px] focus:border-[#E6992A] focus:outline-none"
                />
              </div>
              <div className="md:col-span-12 col-span-6  self-center">
                        <div className="flex items-center">
                           <input
                              id="shipToDifferentAddress"
                              name="shipToDifferentAddress"
                              type="checkbox"
                              className="h-4 w-4 text-gray-700 mb-0 border-gray-300 rounded"
                              />
                           <label htmlFor="shipToDifferentAddress" className="ml-2 mb-0 block text-sm text-[#1A1A1A]">
                           Ship to a different address
                           </label>
                        </div>
                     </div>
              <div className="lg:col-span-6 col-span-12 flex justify-center items-center">

                

              </div>
            </div>
          </form>
            </div>
         </div>
       </div>
       <div className="cart-summary xl:col-span-4 lg:col-span-5 col-span-12 min-w-md min-w-lg:justify-self-center">
         <div className="rounded-md border border-gray-100 p-6 text-[#1A1A1A)] leading-6">
      
         <div className="cart-total pb-1.5 font-medium text-[20px] ">Order summary</div>
         <div className="divide-y-2 pb-6">
            <div className="subtotal flex justify-between  ">
               <div className="flex flex-row ">
                  <img src={Productimage1} alt="Product Image"  className="w-[60px] h-[60px]"/>
                  <p className="text-gray-900 text-base font-normal leading-6 self-center pl-3 ">
                  Heavy Gear Box 
                  <br className="sm:hidden block"/>
                   <span className="text-gray-900 text-base font-normal leading-6 self-center pl-1.5 ">X</span>
                  <span className="text-gray-900 text-base font-normal leading-6 self-center">5</span>
                  </p>
                 
               </div>
               <span className="text-[#1A1A1A] text-end align-self-center">$70.00</span>
            </div>
            <div className="subtotal flex justify-between  ">
               <div className="flex flex-row ">
                  <img src={Productimage} alt="Product Image"  className="w-[60px] h-[60px]"/>
                  <p className="text-gray-900 text-base font-normal leading-6 self-center pl-3 ">
                  Engine Part <br className="sm:hidden block"/>
                  <span className="text-gray-900 text-base font-normal leading-6 self-center pl-1.5 ">X</span>
                  <span className="text-gray-900 text-base font-normal leading-6 self-center  ">1</span>
                  </p>
                  
               </div>
               <span className="text-[#1A1A1A] text-end align-self-center">$14.00</span>
            </div>
         </div>
         <div className="divide-y-2 ">
            <div className="subtotal pb-3 flex justify-between  ">
               <span className="text-[#4D4D4D] ">Subtotal:</span>
               <span className="text-[#1A1A1A] text-end">$84.00</span>
            </div>
            <div className="shipping py-3 flex justify-between">
               <span  className="text-[#4D4D4D]">Shipping:</span>
               <span className="text-[#1A1A1A]">Free</span>
            </div>
            <div className="total text-base  pt-3 pb-[24px] flex justify-between">
               <span className="font-normal text-[16px] text-[#4D4D4D]">Total:</span>
               <span className="font-semibold text-[16px] text-[#1A1A1A]">$84.00</span>
            </div>
         </div>
         <div className="cart-total  pb-4 font-medium text-[20px] ">Payment Method</div>
         <div className="payment-option py-1 flex items-center justify-between">
            <label htmlFor="cashOnDelivery" className="flex items-center cursor-pointer">
            <input
               id="cashOnDelivery"
               name="paymentMethod"
               type="radio"
               className="h-4 w-4 text-gray-700 border-gray-300 rounded-full"
               />
            <span className="ml-1.5 text-sm text-gray-900">Cash on Delivery</span>
            </label>
         </div>

         <div className="payment-option py-1 flex items-center justify-between">
            <label htmlFor="pay-via-upi" className="flex items-center cursor-pointer">
            <input
               id="pay-via-upi"
               name="paymentMethod"
               type="radio"
               className="h-4 w-4 text-gray-700 border-gray-300 rounded-full"
               />
            <span className="ml-1.5 text-sm text-gray-900">Pay Via UPI</span>
            </label>
         </div>
         <div className="payment-option py-1 flex items-center justify-between">
            <label htmlFor="mobilePayment" className="flex items-center cursor-pointer">
            <input
               id="mobilePayment"
               name="paymentMethod"
               type="radio"
               className="h-4 w-4 text-gray-700 border-gray-300 rounded-full"
               />
            <span className="ml-1.5 text-sm text-gray-900">Mobile Wallet</span>
            </label>
         </div>
         <button className="px-8 py-3.5 mt-4  text-white rounded-full bg-[#E6992A] font-semibold w-full">Place Order</button>
       
 
          
         </div>
       </div>
 
    
       <div className="xl:col-span-8 lg:col-span-7 col-span-12 lg:hidden mb-10">
         <div className="col-span-12 mt-2 mb-2">
           <h2 className="text-2xl font-medium ">Additional Info</h2>
         </div>
         <div className="col-span-12 ">
                        <label htmlFor="order_notes" className="block text-sm font-medium text-[#1A1A1A] sm:mb-[10px] mb-2">
                        Order Notes <span className="text-[#808080]">(optional)</span>
                        </label>
                        <textarea
                           id="order_notes"
                           name="order_notes"
                           autoComplete="order_notes"
                           required
                           className="appearance-none  relative block w-full px-3 py-3.5 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-[#E6992A] focus:border-[#E6992A] focus:z-10 sm:text-base text-sm"
                           placeholder="Notes about your order, e.g. special notes for delivery"
                           ></textarea>
                     </div>
       </div>
     </div>
   </section>
 );

};
export default BillingInformation;