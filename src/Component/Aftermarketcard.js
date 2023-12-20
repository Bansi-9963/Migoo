import React from 'react';

const Aftermarketcard = ({ imageUrl, heading, text }) => {
  return (
    <div className='flex flex-col bg-white border pl-[48px] pt-[22px] pr-10 pb-2 shadow-md  relative'>
    <div className="">
      <img src={imageUrl} alt="Image" className=" object-cover l mb-4 left-0 top-0" />
      <div>
        <h2 className="text-[22px] font-bold mb-2">{heading}</h2>
        <p className="text-[#717171] text-[8px] pb-[30px]">{text}</p>
      </div>
    </div>
    </div>
  );
};

export default Aftermarketcard;
