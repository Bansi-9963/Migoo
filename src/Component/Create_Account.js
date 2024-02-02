import React from 'react';
import eye from "../Images/eye-open.png";
import { Link } from 'react-router-dom';

const Create_Acct = () => {

  const handleEye = () => {
    const eye_inp1 = document.getElementById('password-input');
    if ( eye_inp1.type === 'password'){
      eye_inp1.type = 'text';
    } else {
      eye_inp1.type = 'password'
    }
  };

  const handleEye2 =() => {
    const eye_inp2 = document.getElementById('new_password-input');
    if ( eye_inp2.type === 'password'){
      eye_inp2.type = 'text';
    } else {
      eye_inp2.type = 'password'
    }
  }
  return (
    <div className="h-[862px] flex items-center justify-center">
      <div
        className="create_acct_div 2xl:h-[432px] 2xl:w-[520px] rounded-lg border-[1px] border-[#F2F2F2] pt-[24px] pr-[24px] pb-[32px] pl-[24px]"
      >
        <center>
          <h1 className="font-semibold text-[32px] leading-[38.4px]">
            Create Account
          </h1>
        </center>
        <div className="2xl:h-[208px] 2xl:w-[472px] mt-[20px]">
          <input
            type="email"
            placeholder="Email"
            className="w-full h-[49px] rounded-md border-[1px] border-[#E6E6E6] px-[16px] py-[14px] text-base leading-[20.8px] font-normal"
          />
          <div className="relative">
            <input
            id="password-input"
              type="password"
              placeholder="Password"
              className="w-full h-[49px] rounded-md border-[1px] border-[#E6E6E6] px-[16px] py-[14px] text-base leading-[20.8px] font-normal mt-[12px]"
            />
            <img src={eye} className="absolute top-[25px] right-[16px]" onClick={handleEye}/>
          </div>
          <div className="relative">
            <input
            id="new_password-input"
              type="password"
              placeholder="New Password"
              className="w-full h-[49px] rounded-md border-[1px] border-[#E6E6E6] px-[16px] py-[14px] text-base leading-[20.8px] font-normal mt-[12px]"
            />
            <img src={eye} className="absolute top-[25px] right-[16px]" onClick={handleEye2}/>
          </div>
          <div className="w-full h-[21px] mt-[16px] ">
            <div className="relative">
              <input type="checkbox" className="ssm:w-[20px] ssm:h-[20px] w-[14px] h-[14px]" />
              <span className="ssm:w-[208px] w-auto ml-[6px] h-[21px] ssm:text-[14px] text-[12px] ssm:leading-[21px] leading-[12px] text-[#666666] absolute ssm:top-[1px] top-1">
              Accept all terms & Conditions
              </span>
            </div>
          </div>
          <button className="w-full h-[45px] rounded-[43px] bg-[#E6992A] hover:bg-[#af8345ee] transition duration-300 mt-5 flex justify-center items-center text-white font-semibold text-[14px] leading-[16.8px]">
            Create Account
          </button>
          <div className="ssm:w-full h-[25px] mt-5">
            <div className="flex items-center ssm:justify-center justify-between">
              <p className="text-[14px] leading-[21px] text-[#666666] font-normal">
                Already have an account?
              </p>
              <span className="font-medium text-[14px] leading-[21px] text-[#1A1A1A] ml-[4px]">
                <Link to="/" className="hover:underline">Login</Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Create_Acct;
