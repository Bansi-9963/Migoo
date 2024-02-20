import React from 'react';

const Searchbycategorycard = ({ imageUrl, imagetitle, imagetext }) => {
  return (
    <div className="relative overflow-hidden shadow-md shadow-gray-400 bg-white w-full max-[375px]:w-[200px] mx-auto transition-transform transform hover:scale-105 hover:shadow-[#b6b6b6] hover:shadow-lg">
      <div className="flex justify-center p-[32px]">
        <img className="object-cover" src={imageUrl} alt={imagetext} />
      </div>
      <div className="lg:h-[70px] h-full bg-[#E6992A] transition-bg duration-300 hover:bg-[#F2C94C]">
        <p className="text-white  p-[10px] sm:text-[20px] text-[18px] leading-6 font-bold text-center">{imagetitle}</p>
      </div>
    </div>
  );
};

export default Searchbycategorycard;
