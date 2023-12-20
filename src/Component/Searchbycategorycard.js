import React from 'react';

const Searchbycategorycard = ({ imageUrl, imagetitle, imagetext }) => {
  return (
    <div className="relative overflow-hidden shadow-md bg-white mb-2">
    <div className="flex justify-center p-[27px]">
      <img className="object-cover" src={imageUrl} alt={imagetext} />
    </div>
    <div className="px-6 py-[7px] bg-[#E6992A] ">
      <p className="text-white text-xl font-bold text-center">{imagetitle}</p>
    </div>
  </div>
  );
};

export default Searchbycategorycard;
