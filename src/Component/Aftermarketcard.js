import React from 'react';

const Aftermarketcard = ({ imageUrl, heading, text }) => {
  return (
    <div className='flex flex-col bg-white border mb-[10px] pl-[41px] pr-[22px] pt-[22px] pb-2 shadow-md relative 2xl:w-[311px] w-full'>
    <div className="">
      <img src={imageUrl} alt="Image" className=" object-cover l mb-4 left-0 top-0" />
      <div>
        <h2 className="lg:text-[22px] md:text-[20px] font-bold mb-[5px]">{heading}</h2>
        <p className="text-[#717171] text-[10px] sm:pb-[30px] pb-[14px] font-medium">{text}</p>
      </div>
    </div>
    </div>
  );
};

export default Aftermarketcard;
