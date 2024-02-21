import React from 'react';

const GridSVG = ({ brandimageUrl,brandimagetext }) => {
  return (
    <>
     <div className="lg:pt-[20px] hover:cursor-pointer" >
      <img className=" h-auto no-max-width lg:w-56 md:w-44 sm:w-44 w-44 max-[575px]:w-[160px] max-[540px]:w-[217px] max-[480px]:w-full md:h-30 sm:h-24 " src={brandimageUrl} alt={brandimagetext}  />
    </div>
    </>
  );
};

export default GridSVG;
