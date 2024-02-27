import React from 'react'
import { useNavigate } from 'react-router-dom'

const Searchbycategorycard = ({name, imageUrl, imagetitle, imagetext }) => {
  const navigate = useNavigate()
  const handleCardClick = async () => {
    navigate(`/product_category/${name}`)
  }
  return (
    <div
      onClick={handleCardClick}
      className='relative overflow-hidden shadow-md shadow-gray-400 hover:cursor-pointer  bg-white  xl:w-full md:w-[220px] msm:w-[250px] ssm:w-[200px]  max-[475px]:w-[250px] mx-auto transition-transform transform hover:scale-105 hover:shadow-[#b6b6b6] hover:shadow-lg'
    >
      <div className='flex justify-center p-[32px] h-[200px] overflow-hidden'>
        <img className='object-cover' src={imageUrl} alt={imagetext} />
      </div>
      <div className='bg-[#E6992A] transition-bg duration-300 hover:bg-[#F2C94C] h-[70px] flex items-center	 justify-center	'>
        <p className='text-white  p-[10px] sm:text-[20px] text-[18px] leading-6 font-bold text-center h-auto'>
          {imagetitle}
        </p>
      </div>
    </div>
  )
}

export default Searchbycategorycard
