import React from 'react';

const GridSVG = ({ brandimageUrl,brandimagetext }) => {
  return (
    <>
     <div className="pt-[20px]">
      <img className="w-full h-auto" src={brandimageUrl} alt={brandimagetext} />
    </div>
    </>
  );
};

export default GridSVG;
