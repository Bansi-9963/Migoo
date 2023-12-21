import React from 'react';

const Aftermarketcard = ({ imageUrl, heading, text }) => {
  return (
    <div className='flex flex-col bg-white border pl-[48px] pt-[22px] pr-10 pb-2 shadow-md relative sm:w-[367px] 2xl:w-[355px] w-[240px]'>
    <div className="">
      <img src={imageUrl} alt="Image" className=" object-cover l mb-4 left-0 top-0" />
      <div>
        <h2 className="lg:text-[22px] md:text-[20px] font-bold mb-2">{heading}</h2>
        <p className="text-[#717171] xl:text-[8px] lg:text-[8px] md:text-[11px] sm:text-[10px] text-[9px] pb-[30px]">{text}</p>
      </div>
    </div>
    </div>
  );
};

export default Aftermarketcard;
