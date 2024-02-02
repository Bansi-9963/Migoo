import React, { useState } from "react";
import usr_stngs_styles from "../CSS/User_Settings.module.css";
import Profile_Pic from "../Images/Russell.png";
import eye from "../Images/eye-open.png";
import eye_closed from "../Images/closed-eye.png";
import Navigation_Bar from "./Navigation_Bar";

const User_Settings = () => {
  const [prof_pic, setProf_Pic] = useState(Profile_Pic);


  const handleChange = (event) => {
    const label_pic = event.target;
    let newState;
    setProf_Pic( (currentState) => {
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
    <section className="xl:mt-[79px] xl:mb-[79px] flex">
      <div className="flex 2xl:gap-6 xl:gap-5 flex-row 2xl:h-full">
        <Navigation_Bar />
        <div>
          <div className="2xl:w-[984px] xl:w-[848px] 2xl:h-[533px] rounded-lg border-[1px] border-[#E6E6E6] flex flex-col ">
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
              <div className="2xl:w-full 2xl:h-[76px]">
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
                  className="relative top-[-35px] left-[900px]"
                  onClick={() => handleEye("current-password", "eye-1")}
                />
              </div>
            </div>
            <div className="flex flex-row 2xl:w-[938px] mx-auto gap-4">
              <div className="2xl:w-[460px] 2xl:h-[76px] 2xl:mt-6">
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
                  className="relative top-[-35px] left-[425px]"
                  onClick={() => handleEye("new-password", "eye-2")}
                />
              </div>
              <div className="2xl:w-[460px] 2xl:h-[76px] 2xl:mt-6">
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
                  className="relative top-[-35px] left-[425px]"
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default User_Settings;
