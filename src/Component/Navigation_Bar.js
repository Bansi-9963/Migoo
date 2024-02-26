import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import Dashboard from '../Images/Dashboard.png'
import order_history from '../Images/History.png'
import Wishlist from '../Images/Wishlist.png'
import ShoppingList from '../Images/Shopping_Cart.png'
import Settings from '../Images/Settings.png'
import Logout from '../Images/Logout.png'
import billing_address from '../Images/Address_book.png'
import { logout } from '../Component/AuthService'

const Navigation_Bar = () => {
  const location = useLocation()

  return (
    <div className='xl:h-[463px] lg:h-[400px] 2xl:w-[312px] xl:w-[300px] lg:w-[270px] rounded-lg border-[1px] border-[#E6E6E6] sticky top-[120px]'>
      <ul>
        <li className='pl-[20px] pt-[24px] text-[20px] font-medium leading-[30px] 2xl:h-[70px] pb-2'>
          Navigation
        </li>
        <Link to='/dashboard'>
          <li
            className={`pl-[23px] h-[56px] flex items-center hover:bg-[#F2F0ED] hover:border-l-[3px] hover: border-[#E6992A] transition duration-300 ${
              location.pathname === '/dashboard'
                ? 'bg-[#F2F0ED] border-l-[3px] border-[#E6992A]'
                : ''
            }`}
          >
            <img src={Dashboard} className='inline h-[18px] w-[18px]' />
            <span className='pl-[13px] text-base font-normal leading-6'>
              Dashboard
            </span>
          </li>
        </Link>
        <Link to='/order-history'>
          <li
            className={`pl-[23px] h-[56px] flex items-center hover:bg-[#F2F0ED] hover:border-l-[3px] hover: border-[#E6992A] transition duration-300 ${
              location.pathname === '/order-history'
                ? 'bg-[#F2F0ED] border-l-[3px] border-[#E6992A]'
                : ''
            }`}
          >
            <img src={order_history} className='inline h-[18px] w-[18px]' />
            <span className='pl-[13px] text-base font-normal leading-6'>
              Order History
            </span>
          </li>
        </Link>
        <li
          className={`pl-[23px] h-[56px] flex items-center hover:bg-[#F2F0ED] hover:border-l-[3px] hover: border-[#E6992A] transition duration-300 ${
            location.pathname === '/wishlist'
              ? 'bg-[#F2F0ED] border-l-[3px] border-[#E6992A]'
              : ''
          }`}
        >
          <img src={Wishlist} className='inline h-[18px] w-[18px]' />
          <span className='pl-[13px] text-base font-normal leading-6'>
            Wishlist
          </span>
        </li>
        <li className='pl-[23px] h-[56px] flex items-center hover:bg-[#F2F0ED] hover:border-l-[3px] hover: border-[#E6992A] transition duration-300'>
          <img src={ShoppingList} className='inline h-[18px] w-[18px]' />
          <span className='pl-[13px] text-base font-normal leading-6'>
            Shopping List
          </span>
        </li>
        <Link to='/settings'>
          <li
            className={`pl-[23px] h-[56px] flex items-center  hover:bg-[#F2F0ED] hover:border-l-[3px] hover: border-[#E6992A] transition duration-300 ${
              location.pathname === '/settings'
                ? 'bg-[#F2F0ED] border-l-[3px] border-[#E6992A]'
                : ''
            }`}
          >
            <img src={Settings} className='inline h-[18px] w-[18px]' />
            <span className='pl-[13px] text-base font-normal leading-6'>
              Settings
            </span>
          </li>
        </Link>
        <Link to='/billing-address'>
          <li
            className={`pl-[23px] h-[56px] flex items-center hover:bg-[#F2F0ED] hover:border-l-[3px] hover: border-[#E6992A] transition duration-300 ${
              location.pathname === '/billing-address'
                ? 'bg-[#F2F0ED] border-l-[3px] border-[#E6992A]'
                : ''
            }`}
          >
            <img src={billing_address} className='inline h-[18px] w-[18px]' />
            <span className='pl-[13px] text-base font-normal leading-6'>
              Address Book
            </span>
          </li>
        </Link>
        <Link to='/sign_in'>
          <li className='pl-[23px] h-[56px] flex items-center hover:bg-[#F2F0ED] hover:border-l-[3px] hover: border-[#E6992A] transition duration-300'>
            <img src={Logout} className='inline h-[18px] w-[18px]' />
            <span
              className='pl-[13px] text-base font-normal leading-6'
              onClick={logout}
            >
              Log-out
            </span>
          </li>
        </Link>
      </ul>
    </div>
  )
}

export default Navigation_Bar
