import React from 'react';

const Aftermarketcard = ({ imageUrl, heading, text }) => {
  return (
    <div className='flex flex-col bg-white border mb-[10px] md:pl-[48px] px-[22px] pt-[22px] md:pr-10 pb-2 shadow-md relative sm:w-[367px] 2xl:w-[355px] w-[240px]'>
    <div className="">
      <img src={imageUrl} alt="Image" className=" object-cover l mb-4 left-0 top-0" />
      <div>
        <h2 className="lg:text-[22px] md:text-[20px] font-bold mb-2">{heading}</h2>
        <p className="text-[#717171] xl:text-[12px] lg:text-[12px] md:text-[13px] sm:text-[12px] text-[10px] sm:pb-[30px] pb-[14px] font-medium">{text}</p>
      </div>
    </div>
    </div>
  );
};

export default Aftermarketcard;
