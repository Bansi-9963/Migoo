import React from 'react';

const Headingtext = ({ mainText,coloredText ,maincolor}) => {
  
  return (
    <h1 className={` text-2xl sm:text-[32px]  pb-2 leading-7 font-bold ${maincolor}`}>
      {mainText}
      <span style={{ color: '#E6992A' }}>{coloredText}</span>
    </h1>
  );
};

export default Headingtext;
