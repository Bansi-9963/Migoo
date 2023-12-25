import React from 'react';

const Searchbycategorycard = ({ imageUrl, imagetitle, imagetext }) => {
  return (
    <div className="relative overflow-hidden shadow-md bg-white w-[200px] transition-transform transform hover:scale-105 hover:shadow-[#b6b6b6] hover:shadow-lg">
      <div className="flex justify-center p-[26px]">
        <img className="object-cover" src={imageUrl} alt={imagetext} />
      </div>
      <div className="px-5 py-[6px] h-[70px] bg-[#E6992A] transition-bg duration-300 hover:bg-[#F2C94C]">
        <p className="text-white sm:text-[20px] text-[18px] leading-6 font-bold text-center">{imagetitle}</p>
      </div>
    </div>
  );
};

export default Searchbycategorycard;
