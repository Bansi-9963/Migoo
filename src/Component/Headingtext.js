import React from 'react';

const Headingtext = ({ mainText,coloredText ,maincolor}) => {
  
  return (
    <h1 className={`text-[32px] font-bold ${maincolor}`}>
      {mainText}
      <span style={{ color: '#E6992A' }}>{coloredText}</span>
    </h1>
  );
};

export default Headingtext;
