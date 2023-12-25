import React from 'react';

const GridSVG = ({ brandimageUrl,brandimagetext }) => {
  return (
    <>
     <div className="lg:pt-[20px] hover:cursor-pointer" >
      <img className=" h-auto no-max-width  md:w-60 sm:w-60 w-52 md:h-30 sm:h-24 " src={brandimageUrl} alt={brandimagetext}  />
    </div>
    </>
  );
};

export default GridSVG;
