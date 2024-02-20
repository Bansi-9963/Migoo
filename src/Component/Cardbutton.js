import React from 'react'

function Cardbutton(props) {
  return (
   <>
     <button className="bg-[#E6992A] hover:bg-white hover:text-[#F2C94C] text-white xl:w-[130px] sm:w-[150px] w-full sm:text-[14px] text-[13px] mssm:text-[12px] font-bold sm:py-[5px] py-[3px] rounded-xl  hover:border-[#F2C94C] border border-[#E6992A] ">
          {props.buttonText}
        </button>
   </>
  )
}

export default Cardbutton
