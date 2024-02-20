import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "../App.css";
import '../CSS/Order_detail.css';
import "../CSS/ProgressBar.css";
import ProductImage from "../Images/Product/Image.png";
import Productimage1 from "../Images/Product/Gear.png";
import OrderDetailItem from "./OrderDetailItem";
import OrderDetailMobile from "./OrderDetailMobile";
import Navigation_Bar from "./Navigation_Bar";


const Order_Detail = () => {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const { orderId } = useParams();
    // console.log("dcfdvcfrd", orderId)

    const [activeStep, setActiveStep] = useState(1);
    const handleStepClick = (step) => {
        setActiveStep(step);
    };

    const products = [
        {
            image: `${ProductImage}`,
            text: "Engine Part",
            originalPrice: "14.99",
            qty: "5",
        },
        {
            image: `${Productimage1}`,
            text: "Engine Part",
            originalPrice: "14.99",
            qty: "5",
        },
    ];
    // Render mobile items
    const renderMobileItems = () => {
        return products.map((product, index) => <OrderDetailMobile key={index} {...product} />);
    };
    // Render table items
    const renderTableItems = () => {
        return products.map((product, index) => (
            <OrderDetailItem key={index} item_name={product.text} item_image={product.image} item_price={product.originalPrice} sub_total={`$${parseFloat(product.originalPrice).toFixed(2)}`} qty={product.qty} />
        ));
    };
    return (
        <>
        <section className="container-1">
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
                        <p className='text-[#E6992A] font-medium text-base'>Order Detail</p>
                    </div>
                </div>
            </section>
       <section className="ssm:my-5 my-5 flex ssm:flex-row flex-col lg:gap-6 gap-4 container-1 ">
            {screenWidth >= 1024 ? <Navigation_Bar /> : null}
            <div className="Order_Detail border-[1px] border-[#E6E6E6] w-full rounded-lg">
                <div className="flex flex-row justify-between py-4 md:px-6 px-3 border-b-[1px]  border-[#E6E6E6] ">
                    <div className="flex ssm:flex-row flex-col gap-[8px] sm:items-center items-start self-center">
                        <span className="md:text-xl text-lg font-medium md:leading-8 leading-5">Order Details</span>
                        <span className="text-center hidden md:block">.</span>
                        <span className="text-[#4D4D4D] text-sm">April 24, 2021</span>
                        <span className="text-center hidden md:block">.</span>
                        <span className="text-[#4D4D4D] text-sm">3 Products</span>
                    </div>
                    <Link to="/dashboard" className="flex">
                        <div className="self-center  text-base font-medium leading-6 text-[#E6992A]">

                            Back to List

                        </div>
                    </Link>
                </div>
                <div className="md:px-6 px-3 grid grid-cols-12 md:gap-6 gap-3 md:py-9 py-5">
                    <div className="col-span-12 justify-self-center">
                        <ul className="order_progress one  flex ">
                            <li className="flex flex-col items-center" key={1} onClick={() => handleStepClick(1)}>
                                <div
                                    className={`progress after:content-[''] after:block after:absolute  after:h-[5px] after:bg-gray-200 after:right-[37px] w-[40px] h-[40px] rounded-full   grid place-items-center text-white relative cursor-pointer 2xl:ml-[50px] 2xl:mr-[85px] xl:mx-[84px]  lg:ml-[20px] lg:mr-[75px] md:mx-[55px] mx-[42px] sm:my-[14px] my-[20px]  border-dashed one after:w-0 after:h-0 ${activeStep >= 1 ? "active bg-[#E6992A] " : "bg-white"
                                        }`}
                                >
                                    <p className="text-sm text-[#E6992A]">01</p>
                                    <i className={`uil hidden uil-check ${activeStep >= 1 ? "text-[20px]" : ""}`}></i>
                                </div>
                                <p className="text text-sm text-[#9D6618] font-normal">Order received</p>
                            </li>
                            <li className="flex flex-col items-center" key={2} onClick={() => handleStepClick(2)}>
                                <div
                                    className={`progress after:content-[''] after:block after:absolute 2xl:after:w-[170px]  xl:after:w-[170px] lg:after:w-[150px] md:after:w-[110px] after:w-[85px] after:h-[5px] after:bg-gray-200 after:right-[37px] w-[40px] h-[40px] rounded-full  sm:my-[14px] my-[20px] grid place-items-center text-white relative cursor-pointer  2xl:mx-[85px] xl:mx-[84px]  lg:mx-[75px] md:mx-[55px] mx-[42px] border-2 border-dashed border-[#E6992A] two ${activeStep >= 2 ? "active bg-[#E6992A] " : "bg-white"
                                        }`}
                                >
                                    <p className="text-sm text-[#E6992A]">02</p>
                                    <i className={`uil hidden uil-check ${activeStep >= 2 ? "text-[20px]" : ""}`}></i>
                                </div>
                                <p className="text text-sm text-[#9D6618] font-normal">Processing</p>
                            </li>
                            <li className="flex flex-col items-center" key={3} onClick={() => handleStepClick(3)}>
                                <div
                                    className={`progress after:content-[''] after:block after:absolute 2xl:after:w-[170px]  xl:after:w-[170px] lg:after:w-[150px] md:after:w-[110px] after:w-[85px] after:h-[5px] after:bg-gray-200 after:right-[37px] w-[40px] h-[40px] rounded-full  my-[14px] grid place-items-center text-white relative cursor-pointer 2xl:mx-[85px] xl:mx-[84px]  lg:mx-[75px] md:mx-[55px] mx-[42px] border-dashed border-2 border-[#E6992A] three ${activeStep >= 3 ? "active bg-[#E6992A] " : "bg-white"
                                        }`}
                                >
                                    <p className="text-sm text-[#E6992A]">03</p>
                                    <i className={`uil hidden uil-check ${activeStep >= 3 ? "text-[20px]" : ""}`}></i>
                                </div>
                                <p className="text text-sm text-[#9D6618] font-normal">On the way</p>
                            </li>
                            <li className="flex flex-col items-center" key={4} onClick={() => handleStepClick(4)}>
                                <div
                                    className={`progress after:content-[''] after:block after:absolute 2xl:after:w-[170px]  xl:after:w-[170px] lg:after:w-[150px] md:after:w-[110px] after:w-[85px] after:h-[5px] after:bg-gray-200 after:right-[37px] w-[40px] h-[40px] rounded-full  my-[14px] grid place-items-center text-white relative cursor-pointer 2xl:mx-[85px] xl:mx-[84px]  lg:mx-[75px] md:mx-[55px] mx-[42px] border-dashed border-2 border-[#E6992A] three ${activeStep >= 4 ? "active bg-[#E6992A] " : "bg-white"
                                        }`}
                                >
                                    <p className="text-sm text-[#E6992A]">04</p>
                                    <i className={`uil hidden uil-check ${activeStep >= 4 ? "text-[20px]" : ""}`}></i>
                                </div>
                                <p className="text text-sm text-[#9D6618] font-normal">Delivered</p>
                            </li>
                        </ul>
                    </div>
                    <div className="lg:col-span-8 sm:col-span-6 col-span-12 grid grid-cols-12 border-[1px] border-[#E6E6E6] rounded-lg divide-y-[1px] md:divide-x-[1px] divide-[#E6E6E6] ">
                        <div className="lg:col-span-6 col-span-12">
                            <h1 className="text-[#999] text-sm border-b-[1px] border-[#E6E6E6]  md:py-[18px] py-2.5 px-5 ">BILLING ADDRESS</h1>
                            <p className="text-base pt-3.5 px-5 ">Dainne Russell</p>
                            <p className="text-sm text-[#666] px-5 pt-2">4140 Parker Rd. Allentown, New Mexico 31134</p>
                            <p className="text-xs text-[#999] px-5 md:pt-9 pt-5">EMAIL</p>
                            <p className="text-sm px-5 ">dainne.ressell@gmail.com</p>
                            <p className="text-xs text-[#999] px-5 pt-2">PHONE</p>
                            <p className="text-sm  px-5 pb-5">(671) 555-0110</p>
                        </div>
                        <div className="lg:col-span-6 col-span-12">
                            <h1 className="text-[#999] text-sm border-b-[1px] border-[#E6E6E6] md:py-[18px] py-2.5 px-5 ">SHIPPING ADDRESS</h1>
                            <p className="text-base pt-3.5 px-5 ">Dainne Russell</p>
                            <p className="text-sm text-[#666] px-5 pt-2">4140 Parker Rd. Allentown, New Mexico 31134</p>
                            <p className="text-xs text-[#999] px-5 md:pt-9 pt-5">EMAIL</p>
                            <p className="text-sm px-5 ">dainne.ressell@gmail.com</p>
                            <p className="text-xs text-[#999] px-5 pt-2">PHONE</p>
                            <p className="text-sm  px-5 pb-5">(671) 555-0110</p>
                        </div>
                    </div>
                    <div className="lg:col-span-4 sm:col-span-6 col-span-12  ">
                        <div className="border-[1px] border-[#E6E6E6] rounded-lg ">
                            <div className=" py-[18px] px-5 flex lg:flex-row flex-col w-full justify-between lg:divide-y-0 divide-y-2 lg:divide-x-2 divide-[#E6E6E6] border-b-[1px] border-[#E6E6E6]">
                                <div className="flex lg:flex-col flex-row justify-between">
                                    <p className="text-xs text-[#999]  font-medium pb-1.5 lg:pb-0">ORDER ID :</p>
                                    <p className="text-sm text-[#1A1A1A] lg:pt-2.5">#735</p>
                                </div>
                                <div className="lg:pl-5 2xl:pl-10 flex lg:flex-col flex-row justify-between">
                                    <p className="text-xs text-[#999]  font-medium pt-1.5 lg:pt-0">PAYMENT METHOD :</p>
                                    <p className="text-sm text-[#1A1A1A] pt-2.5">Paypal</p>
                                </div>
                            </div>
                            <div className="divide-y-2 py-[18px] px-5">
                                <div className="subtotal py-2 ssm:py-3 flex justify-between text-sm">
                                    <span className="text-[#666]  ">Subtotal:</span>
                                    <span className="text-[#1A1A1A] text-end">$365.00</span>
                                </div>
                                <div className="shipping py-2 ssm:py-3 flex justify-between text-sm">
                                    <span className="text-[#666]">Discount:</span>
                                    <span className="text-[#1A1A1A]">20%</span>
                                </div>
                                <div className="shipping py-2 ssm:py-3 flex justify-between text-sm">
                                    <span className="text-[#666]">Shipping:</span>
                                    <span className="text-[#1A1A1A]">Free</span>
                                </div>
                                <div className="total py-2 ssm:py-3 flex justify-between text-lg">
                                    <span className="font-normal text-[#1A1A1A]">Total:</span>
                                    <span className="font-semibold text-[#E6992A]">$84.00</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="ssm:hidden block grid  grid-cols-1 ssm:gap-6 divide-x-2  divide-[#E6E6E6] mt-4 ">{renderMobileItems()}</div>
                    <div className="relative overflow-x-auto mt-4   border border-gray-100 ssm:block hidden">
                        <table className="w-full text-sm xl:text-base text-left rtl:text-right text-gray-500">
                            <thead className=" text-gray-700 uppercase bg-[#F2F2F2] ">
                                <tr className="text-sm w-full text-[#4D4D4D] border-b">
                                    <th scope="col" className="text-sm px-2 sm:px-5 py-3">
                                        PRODUCT
                                    </th>
                                    <th scope="col" className="text-sm px-2 sm:px-5 py-3">
                                        PRICE
                                    </th>
                                    <th scope="col" className="text-sm px-2 sm:px-5 py-3">
                                        QUANTITY
                                    </th>
                                    <th scope="col" className="text-sm px-2 sm:px-5 py-3">
                                        SUBTOTAL
                                    </th>
                                </tr>
                            </thead>
                            <tbody>{renderTableItems()}</tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
};
export default Order_Detail;
