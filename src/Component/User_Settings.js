import React, { useState, useEffect } from "react";
import usr_stngs_styles from "../CSS/User_Settings.module.css";
import Profile_Pic from "../Images/Russell.png";
import eye from "../Images/eye-open.png";
import eye_closed from "../Images/closed-eye.png";
import Navigation_Bar from "./Navigation_Bar";
import { Link } from "react-router-dom";
const User_Settings = () => {
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
  const [prof_pic, setProf_Pic] = useState(Profile_Pic);


  const handleChange = (event) => {
    const label_pic = event.target;
    let newState;
    setProf_Pic((currentState) => {
      newState = URL.createObjectURL(label_pic.files[0]);
      return newState;
    })
  }

  const handleEye = (inputIndex, eyeImgId) => {
    const eye_inp = document.getElementById(`${inputIndex}`);
    const eye_img = document.getElementById(`${eyeImgId}`);
    if (eye_inp.type === "password" && eye_img.src === eye) {
      eye_img.src = eye_closed;
      eye_inp.type = "text";
    } else {
      eye_img.src = eye;
      eye_inp.type = "password";
    }
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
            <p className='text-[#E6992A] font-medium text-base'>Settings</p>
          </div>
        </div>
      </section>
      <section className="sm:my-20 my-10  container-1 flex ssm:flex-row flex-col lg:gap-6 gap-4 ">
        {screenWidth >= 1024 ? <Navigation_Bar /> : null}
        <div>
          {/* <div className="2xl:w-[984px] xl:w-[848px] 2xl:h-[533px] rounded-lg border-[1px] border-[#E6E6E6] flex flex-col ">
            <div
              className={`${usr_stngs_styles.acct_settings} 2xl:h-[62px] xl:h-[57px]  flex items-center`}
            >
              <h2 className="pl-6 font-medium text-[20px] leading-[30px]">
                Account Settings
              </h2>
            </div>
            <div className="flex 2xl:gap-[112px] items-center">
              <form className="2xl:w-[512px] xl:w-[412px]">
                <div className="2xl:w-[512px] 2xl:h-[76px] 2xl:mt-6 xl:pl-6">
                  <p className="text-[14px] font-normal leading-[21px]">
                    First Name
                  </p>
                  <input
                    type="text"
                    placeholder="Dianne"
                    className="w-full h-[49px] mt-[6px] rounded-md border-[1px] border-[#E6E6E6] flex items-center pl-[16px] focus:border-[#E6992A] focus:outline-none"
                  />
                </div>
                <div className="2xl:w-[512px] 2xl:h-[76px] 2xl:mt-[16px] xl:pl-6">
                  <p className="text-[14px] font-normal leading-[21px]">
                    Last Name
                  </p>
                  <input
                    type="text"
                    placeholder="Russell"
                    className="w-full h-[49px] mt-[6px] rounded-md border-[1px] border-[#E6E6E6] flex items-center pl-[16px] focus:border-[#E6992A] focus:outline-none"
                  />
                </div>
                <div className="2xl:w-[512px] 2xl:h-[76px] 2xl:mt-[16px] xl:pl-6">
                  <p className="text-[14px] font-normal leading-[21px]">
                    Email
                  </p>
                  <input
                    type="email"
                    placeholder="dianne.russell@gmail.com"
                    className="w-full h-[49px] mt-[6px] rounded-md border-[1px] border-[#E6E6E6] flex items-center pl-[16px] focus:border-[#E6992A] focus:outline-none"
                  />
                </div>
                <div className="2xl:w-[512px] 2xl:h-[76px] 2xl:mt-[16px] xl:pl-6">
                  <p className="text-[14px] font-normal leading-[21px]">
                    Phone Number
                  </p>
                  <input
                    type="tel"
                    pattern="[0-9]{10}"
                    placeholder="9876543210"
                    className="w-full h-[49px] mt-[6px] rounded-md border-[1px] border-[#E6E6E6] flex items-center pl-[16px] focus:border-[#E6992A] focus:outline-none"
                  />
                </div>
                <div className="xl:pl-6 2xl:mt-6">
                  <button className="bg-[#E6992A] flex items-center h-[45px] rounded-[43px] px-8 text-white font-semibold leading-[16.8px] text-[14px]">
                    Save Changes
                  </button>
                </div>
              </form>
              <div className="2xl:h-[289px] 2xl:w-[224px]">
                <div className="2xl:w-[224px] 2xl:h-[224px]">
                  <img src={prof_pic} className="2xl:w-[224px] 2xl:h-[224px] rounded-[120px] bg-cover"/>
                </div>
                <div className="h-[45px] w-[159px] mx-auto mt-5">
                  <label
                    id="Profile_Pic_Label"
                    htmlFor="input-file"
                    className="flex cursor-pointer items-center justify-center h-[45px] w-[159px] border-[2px] border-[#E6992A] text-[#E6992A] font-semibold text-[14px] leading-[16.8px] rounded-[43px]"
                  >
                    Choose Image
                  </label>
                  <input
                    type="file"
                    accept="image/jpeg, image/jpg, image/png"
                    id="input-file"
                    className="hidden"
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="2xl:w-[984px] 2xl:h-[533px] rounded-lg border-[1px] border-[#E6E6E6] flex flex-col  2xl:mt-[27px]">
            <div
              className={`${usr_stngs_styles.acct_settings} 2xl:h-[62px] flex items-center`}
            >
              <h2 className="pl-6 font-medium text-[20px] leading-[30px]">
                Billing Address
              </h2>
            </div>
            <div className="flex flex-row 2xl:w-[938px] mx-auto gap-4">
              <div className="2xl:w-[302px] 2xl:h-[76px] 2xl:mt-6">
                <p className="text-[14px] font-normal leading-[21px]">
                  First Name
                </p>
                <input
                  type="text"
                  placeholder="Dianne"
                  className="w-full h-[49px] mt-[6px] rounded-md border-[1px] border-[#E6E6E6] flex items-center pl-[16px] focus:border-[#E6992A] focus:outline-none"
                />
              </div>
              <div className="2xl:w-[302px] 2xl:h-[76px] 2xl:mt-6">
                <p className="text-[14px] font-normal leading-[21px]">
                  Last Name
                </p>
                <input
                  type="text"
                  placeholder="Dianne"
                  className="w-full h-[49px] mt-[6px] rounded-md border-[1px] border-[#E6E6E6] flex items-center pl-[16px] focus:border-[#E6992A] focus:outline-none"
                />
              </div>
              <div className="2xl:w-[302px] 2xl:h-[76px] 2xl:mt-6">
                <p className="text-[14px] font-normal leading-[21px] inline">
                  Company Name
                </p>
                <span className="2xl:ml-1 text-[#808080]">(optional)</span>
                <input
                  type="text"
                  placeholder="Dianne"
                  className="w-full h-[49px] mt-[6px] rounded-md border-[1px] border-[#E6E6E6] flex items-center pl-[16px] focus:border-[#E6992A] focus:outline-none"
                />
              </div>
            </div>
            <div className="flex flex-row 2xl:w-[938px] mx-auto mt-4">
              <div className="2xl:w-full 2xl:h-[76px]">
                <p className="text-[14px] font-normal leading-[21px]">
                  Street Address
                </p>
                <input
                  type="text"
                  placeholder="Street Address"
                  className="w-full h-[49px] mt-[6px] rounded-md border-[1px] border-[#E6E6E6] flex items-center pl-[16px] focus:border-[#E6992A] focus:outline-none"
                />
              </div>
            </div>
            <div className="flex flex-row 2xl:w-[938px] mx-auto gap-4">
              <div className="2xl:w-[302px] 2xl:h-[76px] 2xl:mt-6">
                <p className="text-[14px] font-normal leading-[21px]">
                  Country / Region
                </p>
                <select
                  name="country"
                  id="country"
                  className="w-full h-[49px] mt-[6px] text-[#666] rounded-md border-[1px] bg-transparent border-[#E6E6E6] flex items-center pl-[16px] focus:border-[#E6992A] focus:outline-none"
                >
                  <option value="volvo">United States</option>
                </select>
              </div>
              <div className="2xl:w-[302px] 2xl:h-[76px] 2xl:mt-6">
                <p className="text-[14px] font-normal leading-[21px]">States</p>
                <select
                  name="states"
                  id="states"
                  className="w-full h-[49px] mt-[6px] text-[#666] rounded-md border-[1px] bg-transparent border-[#E6E6E6] flex items-center pl-[16px] focus:border-[#E6992A] focus:outline-none"
                >
                  <option value="volvo">Washington DC</option>
                </select>
              </div>
              <div className="2xl:w-[302px] 2xl:h-[76px] 2xl:mt-6">
                <p className="text-[14px] font-normal leading-[21px]">
                  Zip Code
                </p>
                <input
                  type="text"
                  placeholder="200333"
                  className="w-full h-[49px] mt-[6px] rounded-md border-[1px] border-[#E6E6E6] flex items-center pl-[16px] focus:border-[#E6992A] focus:outline-none"
                />
              </div>
            </div>
            <div className="flex flex-row 2xl:w-[938px] mx-auto gap-4 mt-4">
              <div className="2xl:w-[460px] 2xl:h-[76px] ">
                <p className="text-[14px] font-normal leading-[21px]">Email</p>
                <input
                  type="email"
                  placeholder="dianne.russell@gmail.com"
                  className="w-full h-[49px] mt-[6px] rounded-md border-[1px] border-[#E6E6E6] flex items-center pl-[16px] focus:border-[#E6992A] focus:outline-none"
                />
              </div>
              <div className="2xl:w-[460px] 2xl:h-[76px] ">
                <p className="text-[14px] font-normal leading-[21px]">Phone</p>
                <input
                  type="tel"
                  placeholder="(603) 555-0123"
                  className="w-full h-[49px] mt-[6px] rounded-md border-[1px] border-[#E6E6E6] flex items-center pl-[16px] focus:border-[#E6992A] focus:outline-none"
                />
              </div>
            </div>
            <div className="flex flex-row 2xl:w-[938px]">
              <div className="2xl:pl-6 2xl:mt-6">
                <button className="bg-[#E6992A] flex items-center h-[45px] rounded-[43px] px-8 text-white font-semibold leading-[16.8px] text-[14px]">
                  Save Changes
                </button>
              </div>
            </div>
          </div>
          <div className="2xl:w-[984px] 2xl:h-[349px] rounded-lg border-[1px] border-[#E6E6E6] flex flex-col  2xl:mt-[21px]">
            <div
              className={`${usr_stngs_styles.acct_settings} 2xl:h-[62px] flex items-center`}
            >
              <h2 className="pl-6 font-medium text-[20px] leading-[30px]">
                Change Password
              </h2>
            </div>
            <div className="flex flex-row 2xl:w-[938px] mx-auto mt-4">
              <div className="2xl:w-full 2xl:h-[76px] relative">
                <p className="text-[14px] font-normal leading-[21px]">
                  Current Password
                </p>
                <input
                  id="current-password"
                  type="password"
                  className="w-full h-[49px] mt-[6px] rounded-md border-[1px] border-[#E6E6E6] flex items-center pl-[16px] focus:border-[#E6992A] focus:outline-none"
                />
                <img
                  id="eye-1"
                  src={eye}
                  className="absolute top-[40px] right-3"
                  onClick={() => handleEye("current-password", "eye-1")}
                />
              </div>
            </div>
            <div className="flex flex-row 2xl:w-[938px] mx-auto gap-4">
              <div className="2xl:w-[460px] 2xl:h-[76px] 2xl:mt-6 relative">
                <p className="text-[14px] font-normal leading-[21px]">
                  New Password
                </p>
                <input
                  id="new-password"
                  type="password"
                  className="w-full h-[49px] mt-[6px] rounded-md border-[1px] border-[#E6E6E6] flex items-center pl-[16px] focus:border-[#E6992A] focus:outline-none"
                />
                <img
                  id="eye-2"
                  src={eye}
                  className="absolute top-[40px] right-3"
                  onClick={() => handleEye("new-password", "eye-2")}
                />
              </div>
              <div className="2xl:w-[460px] 2xl:h-[76px] 2xl:mt-6 relative">
                <p className="text-[14px] font-normal leading-[21px]">
                  Confirm Password
                </p>
                <input
                  id="confirm-password"
                  type="password"
                  className="w-full h-[49px] mt-[6px] rounded-md border-[1px] border-[#E6E6E6] flex items-center pl-[16px] focus:border-[#E6992A] focus:outline-none"
                />
                <img
                  id="eye-3"
                  src={eye}
                  className="absolute top-[40px] right-3"
                  onClick={() => handleEye("confirm-password", "eye-3")}
                />
              </div>
            </div>

            <div className="flex flex-row 2xl:w-[938px]">
              <div className="2xl:pl-6 2xl:mt-6">
                <button className="bg-[#E6992A] flex items-center h-[45px] rounded-[43px] px-8 text-white font-semibold leading-[16.8px] text-[14px]">
                  Change Password
                </button>
              </div>
            </div>
          </div> */}
          {/* {screenWidth >= 1024 ? <Navigation_Bar /> : null} */}
          <div className=" rounded-lg border-[1px] border-[#E6E6E6] flex flex-col ">

            <h2 className="pl-6 sm:py-4 py-3  font-medium text-[20px] leading-[30px] border-[1px] border-[#E6E6E6] ">
              Account Settings
            </h2>

            <div className="flex md:flex-row flex-col-reverse  border-t-1  border-[#E6E6E6] px-6">
              <form className="py-6 md:w-[50%] w-full">
                <div className="">
                  <p className="text-[14px] font-normal leading-[21px]">
                    First Name
                  </p>
                  <input
                    type="text"
                    placeholder="Dianne"
                    className="w-full  mt-[8px] rounded-md border-[1px] border-[#E6E6E6] flex items-center pl-[16px] focus:border-[#E6992A] focus:outline-none"
                  />
                </div>
                <div className="mt-4">
                  <p className="text-[14px] font-normal leading-[21px]">
                    Last Name
                  </p>
                  <input
                    type="text"
                    placeholder="Russell"
                    className="w-full  mt-[8px] rounded-md border-[1px] border-[#E6E6E6] flex items-center pl-[16px] focus:border-[#E6992A] focus:outline-none"
                  />
                </div>
                <div className="mt-4">
                  <p className="text-[14px] font-normal leading-[21px]">
                    Email
                  </p>
                  <input
                    type="email"
                    placeholder="dianne.russell@gmail.com"
                    className="w-full  mt-[8px] rounded-md border-[1px] border-[#E6E6E6] flex items-center pl-[16px] focus:border-[#E6992A] focus:outline-none"
                  />
                </div>
                <div className="mt-4">
                  <p className="text-[14px] font-normal leading-[21px]">
                    Phone Number
                  </p>
                  <input
                    type="tel"
                    pattern="[0-9]{10}"
                    placeholder="9876543210"
                    className="w-full  mt-[8px] rounded-md border-[1px] border-[#E6E6E6] flex items-center pl-[16px] focus:border-[#E6992A] focus:outline-none"
                  />
                </div>
                <div className="mt-6 flex md:justify-start justify-center">
                  <button className="bg-[#E6992A] flex items-center py-3.5 rounded-[43px] px-8 text-white font-semibold leading-[16.8px] text-[14px]">
                    Save Changes
                  </button>
                </div>
              </form>
              <div className="flex justify-center items-center flex-col md:w-[50%] w-full md:pt-0 pt-6">
                <div className="">
                  <img src={prof_pic} className="lg:w-[224px] lg:h-[224px]  w-[170px] h-[170px] rounded-[120px] bg-cover" />
                </div>
                <div className=" mt-5">
                  <label
                    id="Profile_Pic_Label"
                    htmlFor="input-file"
                    className="flex cursor-pointer items-center justify-center py-3.5 px-8 border-[2px] border-[#E6992A] text-[#E6992A] font-semibold text-[14px] leading-[16.8px] rounded-[43px]"
                  >
                    Choose Image
                  </label>
                  <input
                    type="file"
                    accept="image/jpeg, image/jpg, image/png"
                    id="input-file"
                    className="hidden"
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-lg border-[1px] border-[#E6E6E6] flex flex-col my-7  ">
            <h2 className="pl-6 sm:py-4 py-3  font-medium text-[20px] leading-[30px] border-[1px] border-[#E6E6E6] ">
              Billing Address
            </h2>
            <form className="py-6 px-6 w-full">
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
                <div className="md:col-span-6 ssm:col-span-6 col-span-12" >
                  <p className="text-[14px] font-normal leading-[21px]">
                    GST No
                  </p>
                  <input
                    type="text"
                    placeholder="29GGGGG1314R9Z6"
                    className="w-full  mt-[6px] rounded-md border-[1px] border-[#E6E6E6] flex items-center pl-[16px] focus:border-[#E6992A] focus:outline-none"
                  />
                </div>
                <div className="lg:col-span-6 col-span-12 flex justify-center items-center">

                  <button className="bg-[#E6992A] py-3.5 px-8 flex items-center  rounded-[43px] px-8 text-white font-semibold leading-[16.8px] text-[14px]">
                    Save Changes
                  </button>

                </div>
              </div>
            </form>
          </div>
          <div className=" rounded-lg border-[1px] border-[#E6E6E6]  ">
            <h2 className="pl-6 sm:py-4 py-3 font-medium text-[20px] leading-[30px] border-[1px] border-[#E6E6E6] ">
              Change Password
            </h2>
            <form className="py-6 px-6 w-full">
              <div className=" grid grid-cols-12 gap-4">

                <div className="col-span-12 relative">
                  <p className="text-[14px] font-normal leading-[21px]">
                    Current Password
                  </p>
                  <input
                    id="current-password"
                    type="password"
                    className="w-full  mt-[6px] rounded-md border-[1px] border-[#E6E6E6] flex items-center pl-[16px] focus:border-[#E6992A] focus:outline-none"
                  />
                  <img
                    id="eye-1"
                    src={eye}
                    className="absolute top-[40px] right-3"
                    onClick={() => handleEye("current-password", "eye-1")}
                  />
                </div>
                <div className="md:col-span-6 col-span-12 relative">
                  <p className="text-[14px] font-normal leading-[21px]">
                    New Password
                  </p>
                  <input
                    id="new-password"
                    type="password"
                    className="w-full mt-[6px] rounded-md border-[1px] border-[#E6E6E6] flex items-center pl-[16px] focus:border-[#E6992A] focus:outline-none"
                  />
                  <img
                    id="eye-2"
                    src={eye}
                    className="absolute top-[40px] right-3"
                    onClick={() => handleEye("new-password", "eye-2")}
                  />
                </div>
                <div className="md:col-span-6 col-span-12 relative">
                  <p className="text-[14px] font-normal leading-[21px]">
                    Confirm Password
                  </p>
                  <input
                    id="confirm-password"
                    type="password"
                    className="w-full  mt-[6px] rounded-md border-[1px] border-[#E6E6E6] flex items-center pl-[16px] focus:border-[#E6992A] focus:outline-none"
                  />
                  <img
                    id="eye-3"
                    src={eye}
                    className="absolute top-[40px] right-3"
                    onClick={() => handleEye("confirm-password", "eye-3")}
                  />
                </div>
                <div className="lg:col-span-3 col-span-12 flex md:justify-start justify-center items-center">
                  <button className="bg-[#E6992A] flex items-center h-[45px] rounded-[43px] px-8 text-white font-semibold leading-[16.8px] text-[14px]">
                    Change Password
                  </button>
                </div>
              </div>
            </form>



          </div>
        </div>

      </section>
    </>
  );
};

export default User_Settings;
