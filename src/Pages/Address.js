
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navigation_Bar from "../Component/Navigation_Bar"
import Address from "../Component/Address_Card"
import Add from "../Images/add.png"

export default function Addresses() {
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

  const [showForm, setShowForm] = useState(false);

  const handleForm = () => {
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };
  return (
    <>
      {/* breadcrumbs */}
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
            <p className='text-[#E6992A] font-medium text-base'>Address Book</p>
          </div>
        </div>
      </section>
      <div className="flex ssm:flex-row flex-col gap-6 ssm:my-20 my-10  mid:justify-center container-1">

        {screenWidth >= 1024 ? <Navigation_Bar /> : null}


        <div className="flex flex-col gap-4 w-full">
          <div className="h-[50px] border-solid border-[1px] border-[#E6E6E6] rounded-lg flex items-center w-full hover:bg-[#F2F0ED] hover:cursor-pointer" onClick={handleForm}>
            <div className="pl-7">
              <img src={Add} className="w-4 h-4" />
            </div>
            <div>
              <p className="text-base font-semibold pl-2">Add New Address</p>
            </div>
          </div>
          {showForm && (
            <div className="fixed top-0 left-0 w-full h-full bg-[black] bg-opacity-70 flex justify-center items-center z-[10]">
              <div className="bg-white p-6 rounded-md shadow-md w-1/3">
                <div className="flex flex-col">
                  <div className="flex justify-between items-center">
                    <h2 className="text-lg font-semibold">Add New Address</h2>
                    <button onClick={handleCloseForm}>❌</button>
                  </div>
                  <input type="text" placeholder="Enter Your Name" required className="w-full h-[49px] mt-[6px] rounded-md border-[1px] border-[#E6E6E6] flex items-center pl-[16px] focus:outline-none">
                  </input>
                </div>
              </div>
            </div>
          )}
          <div className="flex flex-wrap gap-4 sticky top-20  sm:flex-row sm:gap-9 md:gap-4 mid:justify-center  w-full">
            <Address />
            <Address />
          </div>
        </div>
      </div>
    </>
  )
}