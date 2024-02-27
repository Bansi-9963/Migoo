import Navigation_Bar from './Navigation_Bar'
import Order_Row from './Order_Row'
import Profile_Pic from '../Images/Russell.png'
import { Link } from 'react-router-dom'
import React, { useState, useEffect } from 'react'

const User_Dashboard = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)
  const [userData, setuserData] = useState([])
  const [userProfileData, setProfileData] = useState([])
  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://192.168.2.134:8000/api/billing-address/`
        )
        const data = await response.json()
        console.log('data---', data)

        setuserData(data)
      } catch (error) {
        console.error('Error fetching additional data:', error)
      }
    }

    fetchData()
  }, [])
  return (
    <>
      {/* breadcrumbs */}
      <section className='container-1'>
        <div
          id='breadcrumbs'
          className='lg:h-[62px] h-11 w-full flex items-center gap-[10px]'
        >
          <div className='flex items-center'>
            <div>
              <svg
                width='16'
                height='17'
                viewBox='0 0 16 17'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M9.875 15.2498V11.4998C9.875 11.334 9.80915 11.1751 9.69194 11.0579C9.57473 10.9406 9.41576 10.8748 9.25 10.8748H6.75C6.58424 10.8748 6.42527 10.9406 6.30806 11.0579C6.19085 11.1751 6.125 11.334 6.125 11.4998V15.2498C6.125 15.4156 6.05915 15.5745 5.94194 15.6917C5.82473 15.809 5.66576 15.8748 5.5 15.8748H1.75C1.58424 15.8748 1.42527 15.809 1.30806 15.6917C1.19085 15.5745 1.125 15.4156 1.125 15.2498V8.02324C1.1264 7.93674 1.14509 7.8514 1.17998 7.77224C1.21486 7.69308 1.26523 7.6217 1.32812 7.5623L7.57812 1.88261C7.69334 1.77721 7.84384 1.71875 8 1.71875C8.15616 1.71875 8.30666 1.77721 8.42187 1.88261L14.6719 7.5623C14.7348 7.6217 14.7851 7.69308 14.82 7.77224C14.8549 7.8514 14.8736 7.93674 14.875 8.02324V15.2498C14.875 15.4156 14.8092 15.5745 14.6919 15.6917C14.5747 15.809 14.4158 15.8748 14.25 15.8748H10.5C10.3342 15.8748 10.1753 15.809 10.0581 15.6917C9.94085 15.5745 9.875 15.4156 9.875 15.2498Z'
                  stroke='#5F6C72'
                  strokeWidth='1.5'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            </div>
            <div className='pl-2 pt-[3px]'>
              <Link to='/'>
                <p className='text-[#5F6C72] text-base'>Home</p>
              </Link>
            </div>
          </div>
          <div className='pt-1'>
            <svg
              width='10'
              height='12'
              viewBox='0 0 6 10'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M1.5 1.25L5.25 5L1.5 8.75'
                stroke='#77878F'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </div>
          <div className='pt-1'>
            <p className='text-[#E6992A] font-medium text-base'>
              User Dashboard
            </p>
          </div>
        </div>
      </section>
      <section className='sm:my-[79px] my-10   container-1   flex ssm:flex-row flex-col lg:gap-6 gap-4 '>
        {screenWidth >= 1024 ? <Navigation_Bar /> : null}

        <div className='flex flex-col lg:gap-[27px] gap-[20px] w-full'>
          <div className='flex sm:flex-row flex-col gap-6'>
            {/* {userProfileData.map(data => (
              <div className='lg:w-[55%] md:w-[45%] sm:w-[35%] w-full  rounded-lg border-[1px] border-[#E6E6E6]'>
                <div className='pt-2.5 pb-3 flex justify-center'>
                  <img src={Profile_Pic} className='w-[120px] h-[120px]' />
                </div>
                <div className='mt-2'>
                  <h1 className='font-medium text-xl leading-[30px] text-center'>
                    Dianne Russell
                  </h1>
                  <p className='mt-[2px] text-sm font-normal leading-[21px] text-[#808080] text-center'>
                    Customer
                  </p>
                </div>
                <div className='my-[9px]'>
                  <Link to='/settings'>
                    <h4 className='text-base leading-6 text-[#E6992A] font-medium text-center'>
                      Edit Profile
                    </h4>
                  </Link>
                </div>
              </div>
            ))} */}

            {userData.map((data, index) => (
              <div
                key={index}
                className='rounded-lg border-[1px] border-[#E6E6E6] py-[26px] sm:pl-8 pl-5 lg:w-[45%] md:w-[55%] sm:w-[65%] w-full'
              >
                <h2 className='uppercase text-[#999] text-sm leading-[14px] tracking-[0.42px] font-medium'>
                  Billing Address
                </h2>
                <div className='mt-3.5'>
                  <h1 className='text-[18px] leading-[27px] font-medium'>
                    {data.first_name} {data.last_name}
                  </h1>
                  <p className='text-[#666] leading-[21px] font-normal text-sm mt-4 2xl:w-[264px]'>
                    {data.line1} {data.line2} {data.line3} {data.line4}{' '}
                    {data.postcode} {data.state} {data.country}
                  </p>
                  <p className='text-base leading-6 font-normal text-[#1A1A1A] mt-3'>
                    dainne.ressell@gmail.com
                  </p>
                  <p className='mt-[6px] text-base leading-6 font-normal text-[#1A1A1A]'>
                    (+91) 9876543210
                  </p>
                </div>
                <h2 className='text-base leading-6 text-[#E6992A] font-medium mt-5'>
                  Edit Address
                </h2>
              </div>
            ))}
          </div>

          <div className='overflow-x-hidden w-full  '>
            <div className='border-2 border-[#E6E6E6] rounded-md'>
              <div className='flex mssm:flex-row flex-col justify-between items-center px-6 sm:py-4 py-3 '>
                <h2 className='text-xl font-medium leading-[30px] text-[#1A1A1A]'>
                  Recent Order History
                </h2>
                <Link to='/order-history'>
                  <h3 className='text-base text-[#E6992A] leading-6 font-medium'>
                    View All
                  </h3>
                </Link>
              </div>
              <div className='overflow-x-auto'>
                <table className='data-table  w-full'>
                  <thead className='bg-[#F2F2F2]'>
                    <tr className='text-[#4D4D4D]'>
                      <th className='column-header py-3 px-[24px] pl-[24px] text-start'>
                        ORDER ID
                      </th>
                      <th className='column-header py-3 px-[24px] text-start'>
                        DATE
                      </th>
                      <th className='column-header py-3 px-[24px] text-start'>
                        TOTAL
                      </th>
                      <th className='column-header py-3 px-[24px] text-start'>
                        STATUS
                      </th>
                      <th className='column-header py-3 px-[24px] text-start '>
                        {' '}
                        <span className='hidden'>View</span>
                      </th>
                      {/* Add more table headers as needed */}
                    </tr>
                  </thead>
                  <tbody>
                    <Order_Row />
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default User_Dashboard
