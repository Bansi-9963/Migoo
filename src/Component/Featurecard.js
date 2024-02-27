import React from 'react'
import Cardbutton from './Cardbutton'
import '../CSS/Home.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Featurecard = ({
  image,
  text,
  brandName,
  originalPrice,
  discountedPrice,
  discountPercentage,
  productCode
}) => {
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
  }

  const navigate = useNavigate()

  const handleButtonClickCart = () => {
    navigate('/cart')
  }
  const handleButtonClickBuy = () => {
    navigate(`/product_details/${text}`)
  }

  return (
    <div className='relative rounded-lg overflow-hidden shadow-md shadow-gray-400 2xl:w-[300px] max-[324px]:w-[100%] xl:w-[259px] lg:w-[292px] md:w-[314px] sm:w-[270px] msm:w-[236px] mssm:w-[210px] mssm:max-w-[300px] max-w-[230px] w-full bg-white mb-2 '>
      <div className='aspect-square flex items-center'>
        <img className='w-full object-cover' src={image} alt={text} />

        <div className='absolute top-2 right-2'>
          <div
            className='ssm:w-9 ssm:h-9 mssm:w-8 mssm:h-8 h-7 w-7  rounded-full bg-white p-1 flex items-center justify-center test'
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {isHovered ? (
              <svg
                width='21'
                height='18'
                viewBox='0 0 21 18'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M10.5 18C10.3938 18 10.2876 17.9728 10.1924 17.9183C10.0891 17.8592 7.63343 16.4462 5.14255 14.3171C3.66624 13.0552 2.48778 11.8036 1.63999 10.5971C0.542906 9.03595 -0.00879439 7.53429 0.000105988 6.1338C0.0105239 4.50418 0.599466 2.97162 1.65857 1.8184C2.73556 0.645753 4.17282 0 5.7057 0C7.67022 0 9.46633 1.09062 10.5 2.81829C11.5338 1.09066 13.3299 0 15.2944 0C16.7426 0 18.1243 0.582666 19.1851 1.64068C20.3493 2.80175 21.0107 4.44227 20.9999 6.14153C20.991 7.53958 20.4289 9.03896 19.3294 10.598C18.479 11.8038 17.3022 13.0549 15.8317 14.3164C13.3499 16.4453 10.9119 17.8583 10.8093 17.9174C10.7154 17.9715 10.6087 18 10.5 18Z'
                  fill='#E6992A'
                />
              </svg>
            ) : (
              <svg
                width='21'
                height='18'
                viewBox='0 0 17 14'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M14.8849 1.37528C14.0986 0.488407 13.0079 0 11.8136 0C10.134 0 9.07058 0.997241 8.47429 1.83385C8.31958 2.05094 8.18797 2.26861 8.07748 2.47345C7.96698 2.26861 7.8354 2.05094 7.68067 1.83385C7.08437 0.997241 6.02097 0 4.34131 0C3.14705 0 2.05631 0.488438 1.27003 1.37531C0.520059 2.22132 0.106995 3.35438 0.106995 4.56574C0.106995 5.88434 0.624858 7.11077 1.73674 8.42532C2.73047 9.60022 4.16008 10.8113 5.81554 12.2136C6.43241 12.7362 7.07033 13.2766 7.74947 13.8673L7.76987 13.8851C7.85791 13.9617 7.9677 14 8.07748 14C8.18726 14 8.29704 13.9617 8.38509 13.8851L8.40548 13.8673C9.08462 13.2766 9.72254 12.7362 10.3395 12.2136C11.9949 10.8113 13.4245 9.60026 14.4182 8.42532C15.5301 7.11074 16.048 5.88434 16.048 4.56574C16.048 3.35438 15.6349 2.22132 14.8849 1.37528ZM9.73362 11.5069C9.20184 11.9574 8.65456 12.421 8.07748 12.9197C7.50043 12.421 6.95311 11.9574 6.42124 11.5068C3.18139 8.76232 1.04104 6.94918 1.04104 4.56574C1.04104 3.58057 1.37122 2.66553 1.97078 1.98922C2.57722 1.30523 3.41907 0.92853 4.34131 0.92853C5.62185 0.92853 6.44963 1.71277 6.91852 2.37066C7.33912 2.96071 7.55859 3.55553 7.63343 3.78385C7.66397 3.87701 7.72337 3.95817 7.80313 4.01573C7.88288 4.07329 7.97892 4.10428 8.07748 4.10428C8.17603 4.10428 8.27207 4.07329 8.35183 4.01573C8.43159 3.95817 8.49098 3.87701 8.52152 3.78385C8.59637 3.55553 8.81584 2.96071 9.23643 2.37063C9.70532 1.71277 10.5331 0.92853 11.8136 0.92853C12.7359 0.92853 13.5777 1.30523 14.1841 1.98922C14.7837 2.66553 15.1139 3.58057 15.1139 4.56574C15.1139 6.94918 12.9736 8.76232 9.73362 11.5069Z'
                  fill='#E6992A'
                />
              </svg>
            )}
          </div>
        </div>
      </div>
      <div className='px-[14px]  pt-4 pb-[9px] lg:h-[100px]  md:h-[93px] h-[90px]'>
        <div className='flex mb-[5px] justify-between items-baseline'>
          <div className='font-bold sm:text-[16px] text-[14px] m w-[130px]'>
            {text}
          </div>
          <div className='flex items-center'>
            <img
              src='../Images/Rectangle 98.svg' // Adjust the path accordingly
              alt='Icon'
              className='w-[14px] h-[14px]'
            />
            <span className='sm:text-[10px] ml-1 font-bold text-[8px] w-[64px]'>
              Fulfilled by
            </span>
          </div>
        </div>
        <p className='text-[#000000] font-bold sm:text-[12px] text-[12px] mb-[5px]'>
          ₹{discountedPrice}{' '}
          <span className='text-[#8A8A8A] sm:text-[12px] text-[12px] font-bold pl-[11px] line-through mr-[10px]'>
            ₹{originalPrice}
          </span>{' '}
          <span className='rounded-lg bg-[#f0c4c4f2] text-[#EA4B48] text-[9px] font-medium px-[8px] py-[1px]'>
            {discountPercentage}% off
          </span>
        </p>

        <div className='flex justify-between items-center'>
          <p className='text-[#717171] font-medium text-[10px] mr-2'>
            {brandName}
          </p>
          <p className='text-[#717171] font-medium text-[10px] '>
            {productCode}
          </p>
        </div>
      </div>
      <div className='flex justify-between px-[14px] gap-[10px] pb-4'>
        <button
          className='bg-[#E6992A] hover:bg-white hover:text-[#F2C94C] text-white xl:w-[130px] sm:w-[150px] w-full sm:text-[14px] text-[13px] mssm:text-[12px] font-bold sm:py-[5px] py-[3px] rounded-xl  hover:border-[#F2C94C] border border-[#E6992A]'
          onClick={handleButtonClickBuy}
        >
          Buy Now
        </button>

        <button
          className='bg-[#E6992A] hover:bg-white hover:text-[#F2C94C] text-white xl:w-[130px] sm:w-[150px] w-full sm:text-[14px] text-[13px] mssm:text-[12px] font-bold sm:py-[5px] py-[3px] rounded-xl  hover:border-[#F2C94C] border border-[#E6992A]'
          onClick={handleButtonClickCart}
        >
          Add to Cart
        </button>
      </div>
    </div>
  )
}

export default Featurecard
