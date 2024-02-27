import React from 'react'
import { useNavigate } from 'react-router-dom'
const MyWishListMobile = ({
  image,
  text,
  status,
  originalPrice,
  discountedPrice,
  discountPercentage,
  productCode
}) => {
  const isOutOfStock = status === 'Out Of Stock'
  const navigate = useNavigate()

  const handleButtonClickCart = () => {
    navigate('/cart')
  }

  return (
    <div className='relative rounded-lg overflow-hidden shadow-sm sm:w-[100%] w-[100%] bg-white mb-2 flex'>
      <div className=' px-[14px] w-[40%] pt-8 flex justify-center'>
        <img className='w-[100px] h-[100px] ' src={image} alt={text} />
        <div className='absolute top-0 right-2'>
          <div className='w-8 h-8 rounded-full bg-white p-1 flex items-center justify-center test'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
            >
              <g clipPath='url(#clip0_476_1809)'>
                <path
                  d='M12 23C18.0748 23 23 18.0748 23 12C23 5.92525 18.0748 1 12 1C5.92525 1 1 5.92525 1 12C1 18.0748 5.92525 23 12 23Z'
                  stroke='#CCCCCC'
                  strokeMiterlimit='10'
                />
                <path
                  d='M16 8L8 16'
                  stroke='#666666'
                  strokeWidth='1.5'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  d='M16 16L8 8'
                  stroke='#666666'
                  strokeWidth='1.5'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </g>
              <defs>
                <clipPath id='clip0_476_1809'>
                  <rect width='24' height='24' fill='white' />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
      </div>
      <div className='px-[14px] pt-8 pb-[9px] w-[60%]'>
        <div className='flex mb-2 justify-between'>
          <div className='text-gray-900 sm:text-lg text-base font-semibold leading-6 w-[104px]'>
            {text}
          </div>
        </div>

        <p className='text-gray-900 text-base font-normal leading-6 mb-2'>
          {discountedPrice}{' '}
          <span className='text-gray-400 text-base font-normal leading-6 pl-[11px] line-through'>
            {originalPrice}
          </span>{' '}
        </p>

        <div className='flex justify-between items-center mb-2'>
          <span
            className={`py-1 px-2 rounded-md ${
              isOutOfStock
                ? 'bg-red-600 bg-opacity-20 text-branding-error'
                : 'bg-yellow-300 bg-opacity-20 text-branding-success-dark'
            } text-sm font-normal leading-5`}
          >
            {status}
          </span>
        </div>
        <div
        
          className={`px-4 md:px-8 py-2.5 btn text-white rounded-full flex justify-center  ${
            isOutOfStock
              ? 'bg-[#F2F2F2] font-semibold'
              : 'bg-[#E6992A] font-semibold '
          } lg:hidden block`}
        >
          <svg
          onClick={handleButtonClickCart} 
            xmlns='http://www.w3.org/2000/svg'
            height='16'
            width='18'
            viewBox='0 0 576 512'
          >
            <path
              fill='#ffffff'
              d='M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z'
            />
          </svg>
        </div>
      </div>
    </div>
  )
}
export default MyWishListMobile
