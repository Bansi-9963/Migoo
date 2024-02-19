import Navigation_Bar from "./Navigation_Bar";
import Order_Row from "./Order_Row";
import Profile_Pic from "../Images/Russell.png";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";

const User_Dashboard = () => {
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
  return (
    <section className="sm:my-[79px] my-10   container-1   flex ssm:flex-row flex-col lg:gap-6 gap-4 ">
      {screenWidth >= 1024 ? <Navigation_Bar /> : null}
      {/* <div className="flex flex-col gap-[27px]">
        <div className="flex flex-row gap-6">
          <div className="2xl:w-[536px] 2xl:h-[278px] rounded-lg border-[1px] border-[#E6E6E6]">
            <div className="2xl:w-[147px] 2xl:h-[214px] mx-auto my-[32px]">
              <div>
                <img
                  src={Profile_Pic}
                  className="2xl:w-[120px] 2xl:h-[120px] mx-auto"
                />
              </div>
              <div className="mt-2">
                <h1 className="font-medium text-xl leading-[30px] text-center">
                  Dianne Russell
                </h1>
                <p className="mt-[2px] text-sm font-normal leading-[21px] text-[#808080] text-center">
                  Customer
                </p>
              </div>
              <div className="mt-[9px]">
                <Link to="/settings">
                  <h4 className="text-base leading-6 text-[#E6992A] font-medium text-center">
                    Edit Profile
                  </h4>
                </Link>
              </div>
            </div>
          </div>
          <div className="2xl:w-[424px] 2xl:h-[278px] rounded-lg border-[1px] border-[#E6E6E6]">
            <div className="py-[32px] pl-8">
              <h2 className="uppercase text-[#999] text-sm leading-[14px] tracking-[0.42px] font-medium">
                Billing Address
              </h2>
              <div className="mt-3">
                <h1 className="text-[18px] leading-[27px] font-medium">
                  Dainne Russell
                </h1>
                <p className="text-[#666] leading-[21px] font-normal text-sm mt-[14px] 2xl:w-[264px]">
                  4140 Parker Rd. Allentown, New Mexico 31134
                </p>
                <p className="text-base leading-6 font-normal text-[#1A1A1A]">
                  dainne.ressell@gmail.com
                </p>
                <p className="mt-[6px] text-base leading-6 font-normal text-[#1A1A1A]">
                  (+91) 9876543210
                </p>
              </div>
              <h2 className="text-base leading-6 text-[#E6992A] font-medium mt-[19px]">
                Edit Address
              </h2>
            </div>
          </div>
        </div>
        <div className="2xl:w-[984px] 2xl:h-[404px] rounded-lg border-[1px] border-[#E6E6E6]">
          <div className="2xl:h-[55px] flex justify-between items-center px-6">
            <h2 className="text-xl font-medium leading-[30px] text-[#1A1A1A]">
              Recent Order History
            </h2>
            <h3 className="text-base text-[#E6992A] leading-6 font-medium">
              View All
            </h3>
          </div>
          <table className="w-full">
            <thead className="bg-[#F2F2F2] 2xl:h-9">
              <tr className="w-full 2xl:h-9 text-left flex items-center gap-2">
                <th className="2xl:w-[210px] pl-6 p-0 text-[#4D4D4D] text-[12px] font-medium leading-[12px] tracking-[0.36px]">ORDER ID</th>
                <th className="2xl:w-[180px] p-0 text-[#4D4D4D] text-[12px] font-medium leading-[12px] tracking-[0.36px]">DATE</th>
                <th className="2xl:w-[210px] p-0 text-[#4D4D4D] text-[12px] font-medium leading-[12px] tracking-[0.36px]">TOTAL</th>
                <th className="2xl:w-[210px] p-0 text-[#4D4D4D] text-[12px] font-medium leading-[12px] tracking-[0.36px]">STATUS</th>
                <th className="2xl:w-[100px] p-0 text-[#4D4D4D] text-[12px] font-medium leading-[12px] tracking-[0.36px]"><span className="hidden">View Detail</span></th>
              </tr>
            </thead>
            <tbody className="mt-3 align-top 2xl:w-[936px]">
              <Order_Row />
            </tbody>
          </table>
        </div>
      </div> */}
       <div className="flex flex-col lg:gap-[27px] gap-[20px] w-full">
        <div className="flex sm:flex-row flex-col gap-6">
          <div className="lg:w-[55%] md:w-[45%] sm:w-[35%] w-full  rounded-lg border-[1px] border-[#E6E6E6]">
           
              <div className="pt-2.5 pb-3 flex justify-center">
                <img
                  src={Profile_Pic}
                  className="w-[120px] h-[120px]"
                />
              </div>
              <div className="mt-2">
                <h1 className="font-medium text-xl leading-[30px] text-center">
                  Dianne Russell
                </h1>
                <p className="mt-[2px] text-sm font-normal leading-[21px] text-[#808080] text-center">
                  Customer
                </p>
              </div>
              <div className="my-[9px]">
                <Link to="/settings">
                  <h4 className="text-base leading-6 text-[#E6992A] font-medium text-center">
                    Edit Profile
                  </h4>
                </Link>
              </div>
         
          </div>
          <div className="rounded-lg border-[1px] border-[#E6E6E6] py-[26px] sm:pl-8 pl-5 lg:w-[45%] md:w-[55%] sm:w-[65%] w-full">
           
              <h2 className="uppercase text-[#999] text-sm leading-[14px] tracking-[0.42px] font-medium">
                Billing Address
              </h2>
              <div className="mt-3.5">
                <h1 className="text-[18px] leading-[27px] font-medium">
                  Dainne Russell
                </h1>
                <p className="text-[#666] leading-[21px] font-normal text-sm mt-4 2xl:w-[264px]">
                  4140 Parker Rd. Allentown, New Mexico 31134
                </p>
                <p className="text-base leading-6 font-normal text-[#1A1A1A] mt-3">
                  dainne.ressell@gmail.com
                </p>
                <p className="mt-[6px] text-base leading-6 font-normal text-[#1A1A1A]">
                  (+91) 9876543210
                </p>
              </div>
              <h2 className="text-base leading-6 text-[#E6992A] font-medium mt-5">
                Edit Address
              </h2>
         
          </div>
        </div>
        {/* <div className="2xl:w-[984px] 2xl:h-[404px] rounded-lg border-[1px] border-[#E6E6E6]">
          <div className="2xl:h-[55px] flex justify-between items-center px-6">
            <h2 className="text-xl font-medium leading-[30px] text-[#1A1A1A]">
              Recent Order History
            </h2>
            <h3 className="text-base text-[#E6992A] leading-6 font-medium">
              View All
            </h3>
          </div>
          <table className="w-full">
            <thead className="bg-[#F2F2F2] 2xl:h-9">
              <tr className="w-full 2xl:h-9 text-left flex items-center gap-2">
                <th className="2xl:w-[210px] pl-6 p-0 text-[#4D4D4D] text-[12px] font-medium leading-[12px] tracking-[0.36px]">ORDER ID</th>
                <th className="2xl:w-[180px] p-0 text-[#4D4D4D] text-[12px] font-medium leading-[12px] tracking-[0.36px]">DATE</th>
                <th className="2xl:w-[210px] p-0 text-[#4D4D4D] text-[12px] font-medium leading-[12px] tracking-[0.36px]">TOTAL</th>
                <th className="2xl:w-[210px] p-0 text-[#4D4D4D] text-[12px] font-medium leading-[12px] tracking-[0.36px]">STATUS</th>
                <th className="2xl:w-[100px] p-0 text-[#4D4D4D] text-[12px] font-medium leading-[12px] tracking-[0.36px]"><span className="hidden">View Detail</span></th>
              </tr>
            </thead>
            <tbody className="mt-3 align-top 2xl:w-[936px]">
              <Order_Row />
            </tbody>
          </table>
        </div> */}






      <div className="overflow-x-hidden w-full  ">
      <div className="border-2 border-[#E6E6E6] rounded-md">
      <div className="flex mssm:flex-row flex-col justify-between items-center px-6 sm:py-4 py-3 ">
            <h2 className="text-xl font-medium leading-[30px] text-[#1A1A1A]">
              Recent Order History
            </h2>
            <Link to="/order-history">
            <h3 className="text-base text-[#E6992A] leading-6 font-medium">
              View All
            </h3>
            </Link>
          </div>
            <div className='overflow-x-auto'>
            <table className="data-table  w-full">
              <thead className="bg-[#F2F2F2]">
                <tr className="text-[#4D4D4D]">
                  <th className="column-header py-3 px-[24px] pl-[24px] text-start">ORDER ID</th>
                  <th className="column-header py-3 px-[24px] text-start">DATE</th>
                  <th className="column-header py-3 px-[24px] text-start">TOTAL</th>
                  <th className="column-header py-3 px-[24px] text-start">STATUS</th>
                  <th className="column-header py-3 px-[24px] text-start "> <span className='hidden'>View</span></th>
                  {/* Add more table headers as needed */}
                </tr>
              </thead>
              <tbody>
              <Order_Row />
              </tbody>
            </table>
            </div>
            
      </div>
    </div>
      </div>
    </section>
  );
};

export default User_Dashboard;
