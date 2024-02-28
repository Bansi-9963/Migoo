import React from 'react'
import { useState, useEffect } from 'react'
import logo from '../Images/migoo-logo-white.png'
import { Link } from 'react-router-dom'
const Footer = () => {
  const [Data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'http://192.168.2.134:8000/api/product-category/'
        )
        const Product_Category_Data = await response.json()
        const firstFourItems = Product_Category_Data.slice(0, 4)
        console.log('data--------------', firstFourItems)
        setData(firstFourItems)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }
    fetchData()
  }, [])

  return (
    <footer className='bg-[#1A1A1A] xl:h-[368px] lg:h-[380px] md:h-[480px]'>
      <div className='container-1 upper-footer pt-[60px] mb-[60px] xl:h-[228.5px] flex lg:flex-row flex-col'>
        <div className='2xl:h-[167px] 2xl:w-[336px] xl:w-[306px] lg:w-[286px] h-max  lg:mx-0 mb-3 lg:mb-0'>
          <div className='mb-4'>
            <Link to='/'>
              <img
                src={logo}
                className='xl:w-[125px] xl:h-[39px] w-[150px] h-[40px] cursor-pointer'
              />
            </Link>
          </div>
          <div className='lg:mb-4 mb-2'>
            <p className='text-sm leading-[21px] font-normal text-[#808080]'>
              Morbi cursus porttitor enim lobortis molestie. Duis gravida turpis
              dui, eget bibendum magna congue nec.
            </p>
          </div>
          <div className='flex md:gap-4 gap-1 items-center'>
            <p className='text-sm font-medium leading-[21px] text-white hover:border-b-2 border-[#E6992A] pb-[6px]'>
              (219) 555-0114
            </p>
            <p className='text-base font-medium leading-[21px] text-[#808080] pb-[6px]'>
              |
            </p>
            <p className='text-sm font-medium leading-[21px] text-white hover:border-b-2 border-[#E6992A] pb-[6px]'>
              Proxy@gmail.com
            </p>
          </div>
        </div>
        <div className='flex md:justify-between md:gap-0 ssm:gap-[110px] gap-10'>
          <div className='flex md:w-[315px] lg:w-fit justify-between md:flex-row flex-col'>
            <div className='2xl:ml-28 xl:ml-24 lg:ml-16 2xl:w-[96px] 2xl:h-[164px] w-fit h-max'>
              <p className='text-base font-medium leading-6 lg:mb-5 mb-2 text-white'>
                My Account
              </p>
              <p className='text-sm text-[#999999] leading-[21px] font-normal md:mb-3 mb-2 hover:text-white hover:cursor-pointer'>
                <Link to='settings'>My Account</Link>
              </p>
              <p className='text-sm text-[#999999] leading-[21px] font-normal md:mb-3 mb-2 hover:text-white hover:cursor-pointer'>
                <Link to='order-history'>Order History</Link>
              </p>
              <p className='text-sm text-[#999999] leading-[21px] font-normal md:mb-3 mb-2 hover:text-white hover:cursor-pointer'>
                <Link to='cart'>Shopping Cart</Link>
              </p>
              <p className='text-sm text-[#999999] leading-[21px] font-normal md:mb-3 mb-2 hover:text-white hover:cursor-pointer'>
                <Link to='wishlist'>Wishlist</Link>
              </p>
            </div>
            <div className='2xl:ml-[129px] xl:ml-[109px] lg:ml-[85px] 2xl:w-130px 2xl:h-[164px] w-fit h-max'>
              <p className='text-base font-medium leading-6 lg:mb-5 mb-2 text-white'>
                Categories
              </p>
              {Data.map((item, index) => (
                <p
                  key={index}
                  className='text-sm text-[#999999] leading-[21px] font-normal md:mb-3 mb-2 hover:text-white hover:cursor-pointer'
                >
                  <Link to={`/product_category/${item.name}`}>{item.name}</Link>
                </p>
              ))}
            </div>
          </div>
          <div className='flex md:w-[315px] lg:w-fit justify-between md:flex-row flex-col'>
            <div className='2xl:ml-[106px] xl:ml-[96px] lg:ml-[75px] md:ml-10 2xl:w-[55px] 2xl:h-[131px] w-fit h-max'>
              <p className='text-base font-medium leading-6 lg:mb-5 mb-2 text-white'>
                Pages
              </p>
              <p className='text-sm text-[#999999] leading-[21px] font-normal md:mb-3 mb-2 hover:text-white hover:cursor-pointer'>
                About
              </p>
              <p className='text-sm text-[#999999] leading-[21px] font-normal md:mb-3 mb-2 hover:text-white hover:cursor-pointer'>
                Shop
              </p>
              <p className='text-sm text-[#999999] leading-[21px] font-normal md:mb-3 mb-2 hover:text-white hover:cursor-pointer'>
                <Link to='product_list'>Product</Link>
              </p>
            </div>
            <div className='xl:ml-[156.5px] lg:ml-[76.5px] 2xl:w-[122px] 2xl:h-[164px] w-fit h-max'>
              <p className='text-base font-medium leading-6 lg:mb-5 mb-2 text-white'>
                Help
              </p>
              <p className='text-sm text-[#999999] leading-[21px] font-normal md:mb-3 mb-2 hover:text-white hover:cursor-pointer'>
                Contact
              </p>
              <p className='text-sm text-[#999999] leading-[21px] font-normal md:mb-3 mb-2 hover:text-white hover:cursor-pointer'>
                Faqs
              </p>
              <p className='text-sm text-[#999999] leading-[21px] font-normal md:mb-3 mb-2 hover:text-white hover:cursor-pointer'>
                Terms & Condition
              </p>
              <p className='text-sm text-[#999999] leading-[21px] font-normal md:mb-3 mb-2 hover:text-white hover:cursor-pointer'>
                Privacy Policy
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='container-1 lower-footer xl:h-20 lg:h-16 md:h-12 h-14 flex items-center border-t-2 border-[#333] justify-center'>
        <div>
          <p className='text-sm font-normal leading-[21px] text-[#808080]'>
            Migved Solutions Private Limited © 2021. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
