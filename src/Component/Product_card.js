import React from 'react'
import addtoCart from '../Images/Add To Cart.svg'

import { useNavigate } from 'react-router-dom'
const Product_card = ({ id, title, price, brand, mrp ,image }) => {
  const navigate = useNavigate()
  const handleclick = () => {
    // console.log("hello");
  }
  const handleCardClick = async () => {
    navigate(`/product_details/${title}`)
  }
  return (
    <div
      className='2xl:max-w-[312px]  border-2 hover:border-[#D2871C] rounded-lg'
      key={id}
      onClick={handleCardClick}
    >
      <img src={image} className='p-[5px] w-full object-contain h-[250px]' />

      <div className=' p-[16px] '>
        <div className=' flex justify-between'>
          <div>
            <p className='text-[20px]'>{title}</p>
            <div className='flex text-[16px] gap-[5px]'>
              <p>{price}</p>
              <p className='text-[#999999] line-through'>₹{mrp}</p>
            </div>
            <p className='text-[12px]'>{brand}</p>
          </div>
          <div onClick={handleclick}>
            <img src={addtoCart} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product_card
