import React, { useState, useEffect, useContext } from 'react'
import slider from '../Images/Product_Details/slider.png'
import prodict_image from '../Images/Product_Details/product_image.png'
import client1 from '../Images/Product_Details/client1.png'
import clien2 from '../Images/Product_Details/client2.png'
import clien3 from '../Images/Product_Details/client3.png'

import Featurecard from '../Component/Featurecard'
import FeaturcardScroll from '../Component/FeaturcardScroll'

import OfferCard from '../Component/Product_Details/OfferCard'
import Customer_review from '../Component/Product_Details/Customer_review'
import { useParams } from 'react-router-dom'
import product_detail_style from '../CSS/Product_Details.module.css'
import { UserContext } from '../App'
import LeaveRating from '../Component/LeaveRating'

const ProductDetails = () => {
  const [featureData, setFeatureData] = useState([])
  const [datareview, setdatareview] = useState([])
  const [showAllReviews, setShowAllReviews] = useState(false)
  const [showPopup, setShowPopup] = useState(false)

  // Function to toggle showing all reviews
  const handleLoadMoreClick = () => {
    setShowAllReviews(true)
  }

  // Function to toggle showing only first 4 reviews
  const handleShowLessClick = () => {
    setShowAllReviews(false)
  }

  // Function to toggle the visibility of the popup
  const togglePopup = () => {
    setShowPopup(!showPopup)
  }
  const { text } = useParams()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://192.168.2.134:8000/api/product-detail/`
        )
        const data = await response.json()
        // console.log('data-------------------->>>>>', data)
        const matchedItems = data.filter(
          item => item.title.trim().toLowerCase() === text.trim().toLowerCase()
        )
        console.log(matchedItems)
        setFeatureData(matchedItems)
      } catch (error) {
        console.error('Error fetching additional data:', error)
      }
    }

    const fetchreview = async () => {
      try {
        const response = await fetch(
          `http://192.168.2.134:8000/api/product-reviews/`
        )
        const data = await response.json()

        // Format the date_created field in the data
        const formattedData = data.map(review => {
          const date = new Date(review.date_created)
          const options = { month: 'short', day: '2-digit', year: 'numeric' }
          const formattedDate = date.toLocaleDateString('en-US', options)

          // Calculate time difference
          const currentTime = new Date()
          const timeDifference = Math.abs(currentTime - date)
          const minutesDifference = Math.floor(timeDifference / 60000) // Convert milliseconds to minutes

          let formattedTimeDifference
          if (minutesDifference < 60) {
            formattedTimeDifference = `${minutesDifference} min ago`
          } else {
            const daysDifference = Math.floor(minutesDifference / (60 * 24))
            formattedTimeDifference = `${daysDifference} days ago`
          }

          return {
            ...review,
            formattedDate,
            formattedTimeDifference
          }
        })

        // Set the formatted data to state
        setdatareview(formattedData)
        console.log('Formatted data:', formattedData)
      } catch (error) {
        console.error('Error fetching additional data:', error)
      }
    }

    fetchData()
    fetchreview()
  }, [text])

  const today = new Date()
  const formattedToday = today.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: '2-digit'
  })
  console.log(formattedToday)

  return (
    <>
      {featureData.map((category, index) => (
        <section className='container-1' key={index}>
          <div className='grid lg:grid-cols-2 grid-cols-1 gap-6   '>
            <div className='flex gap-3 items-center justify-center lg:items-start '>
              {/* Image-Slider Div */}
              <div className='Slider h-auto 2xl:h-[556px] xl:h-[494px] lg:h-[404px] w-auto'>
                <div>
                  <svg
                    className='mt-[8px] mb-[28px] mx-auto lg:mb-[20px] xl:mb-[28px] 2xl:mb-[33px] '
                    width='16'
                    height='9'
                    viewBox='0 0 16 9'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M15 8L8 1L1 8'
                      stroke='#999999'
                      stroke-width='1.5'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                    />
                  </svg>
                </div>

                <div className='grid gap-[12px] 2xl:w-[80px]  '>
                  <img
                    src={
                      'http://192.168.2.134:8000/media/' +
                      category.images[0].original
                    }
                    className='w-auto h-auto 2xl:w-[80px] 2xl:h-[80px] '
                  />

                  <img
                    src={
                      'http://192.168.2.134:8000/media/' +
                      category.images[0].original
                    }
                    className='w-auto h-auto 2xl:w-[80px] 2xl:h-[80px]'
                  ></img>
                  <img
                    src={
                      'http://192.168.2.134:8000/media/' +
                      category.images[0].original
                    }
                    className='w-auto h-auto 2xl:w-[80px] 2xl:h-[80px] '
                  ></img>
                  <img
                    src={
                      'http://192.168.2.134:8000/media/' +
                      category.images[0].original
                    }
                    className='w-auto h-auto 2xl:w-[80px] 2xl:h-[80px] '
                  ></img>
                  <img
                    src={
                      'http://192.168.2.134:8000/media/' +
                      category.images[0].original
                    }
                    className='w-auto h-auto 2xl:w-[80px] 2xl:h-[80px]'
                  ></img>
                </div>

                <div>
                  <svg
                    className='xl:mt-[40px] mt-[28px] lg:mt-[20px]  mx-auto lg:mb-[10px]'
                    width='16'
                    height='9'
                    viewBox='0 0 16 9'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M15 1L8 8L1 1'
                      stroke='#999999'
                      stroke-width='1.5'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                    />
                  </svg>
                </div>
              </div>

              {/* Product-Image Div */}
              <div className='Product-Image  xl:h-[556px]  '>
                <img
                  src={
                    'http://192.168.2.134:8000/media/' +
                    category.images[0].original
                  }
                  className='2xl:max-w-[556px]    2xl:h-[556px] w-auto '
                ></img>
              </div>
            </div>

            {/* Product-Details Div */}
            <div className='Product-Details  2xl:w-[647px] w-auto '>
              <div className='border-b '>
                <div>
                  <div className='flex gap-[8px]'>
                    <h2 className='font-semibold  xl:text-[36px] md:text-[28px] text-[24px] md:leading-[32px] leading-[28px] xl:leading-[43px]'>
                      {category.title}
                    </h2>
                    <p
                      className={`${product_detail_style.small_text}  text-[#9D6618] rounded-[4px] bg-[#E6992A33] py-[4px] px-[8px] w-[92px] h-[29px] my-auto`}
                    >
                      {category.prices[0].num_in_stock} In Stock
                    </p>
                  </div>

                  <div className='flex gap-3 mt-3'>
                    <div className='flex items-center  '>
                      <svg
                        width='16'
                        height='15'
                        viewBox='0 0 16 15'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M8.31008 11.9111L11.8566 14.1577C12.31 14.4446 12.8725 14.0177 12.7381 13.4884L11.7138 9.45805C11.6848 9.34579 11.6882 9.22764 11.7234 9.11718C11.7586 9.00673 11.8243 8.90846 11.9129 8.83368L15.0933 6.18711C15.5106 5.83949 15.2958 5.14593 14.7586 5.11105L10.6056 4.84105C10.4938 4.83312 10.3866 4.79359 10.2964 4.72707C10.2061 4.66055 10.1367 4.56977 10.096 4.4653L8.5469 0.564927C8.50471 0.454081 8.42984 0.358673 8.33219 0.291355C8.23455 0.224037 8.11875 0.187988 8.00015 0.187988C7.88155 0.187988 7.76574 0.224037 7.6681 0.291355C7.57046 0.358673 7.49558 0.454081 7.4534 0.564927L5.90427 4.4653C5.86372 4.56988 5.79429 4.66077 5.70406 4.7274C5.61383 4.79402 5.50652 4.83364 5.39465 4.84161L1.24171 5.11161C0.705084 5.14593 0.489084 5.83949 0.907022 6.18711L4.0874 8.83424C4.17588 8.90898 4.2415 9.00715 4.27673 9.11749C4.31195 9.22783 4.31534 9.34587 4.28652 9.45805L3.33702 13.1959C3.17558 13.8309 3.85115 14.3434 4.39452 13.9986L7.69077 11.9111C7.78342 11.8522 7.89093 11.8209 8.00071 11.8209C8.11049 11.8209 8.218 11.8522 8.31065 11.9111H8.31008Z'
                          fill='#FF8A00'
                        />
                      </svg>
                      <svg
                        width='16'
                        height='15'
                        viewBox='0 0 16 15'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M8.31008 11.9111L11.8566 14.1577C12.31 14.4446 12.8725 14.0177 12.7381 13.4884L11.7138 9.45805C11.6848 9.34579 11.6882 9.22764 11.7234 9.11718C11.7586 9.00673 11.8243 8.90846 11.9129 8.83368L15.0933 6.18711C15.5106 5.83949 15.2958 5.14593 14.7586 5.11105L10.6056 4.84105C10.4938 4.83312 10.3866 4.79359 10.2964 4.72707C10.2061 4.66055 10.1367 4.56977 10.096 4.4653L8.5469 0.564927C8.50471 0.454081 8.42984 0.358673 8.33219 0.291355C8.23455 0.224037 8.11875 0.187988 8.00015 0.187988C7.88155 0.187988 7.76574 0.224037 7.6681 0.291355C7.57046 0.358673 7.49558 0.454081 7.4534 0.564927L5.90427 4.4653C5.86372 4.56988 5.79429 4.66077 5.70406 4.7274C5.61383 4.79402 5.50652 4.83364 5.39465 4.84161L1.24171 5.11161C0.705084 5.14593 0.489084 5.83949 0.907022 6.18711L4.0874 8.83424C4.17588 8.90898 4.2415 9.00715 4.27673 9.11749C4.31195 9.22783 4.31534 9.34587 4.28652 9.45805L3.33702 13.1959C3.17558 13.8309 3.85115 14.3434 4.39452 13.9986L7.69077 11.9111C7.78342 11.8522 7.89093 11.8209 8.00071 11.8209C8.11049 11.8209 8.218 11.8522 8.31065 11.9111H8.31008Z'
                          fill='#FF8A00'
                        />
                      </svg>
                      <svg
                        width='16'
                        height='15'
                        viewBox='0 0 16 15'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M8.31008 11.9111L11.8566 14.1577C12.31 14.4446 12.8725 14.0177 12.7381 13.4884L11.7138 9.45805C11.6848 9.34579 11.6882 9.22764 11.7234 9.11718C11.7586 9.00673 11.8243 8.90846 11.9129 8.83368L15.0933 6.18711C15.5106 5.83949 15.2958 5.14593 14.7586 5.11105L10.6056 4.84105C10.4938 4.83312 10.3866 4.79359 10.2964 4.72707C10.2061 4.66055 10.1367 4.56977 10.096 4.4653L8.5469 0.564927C8.50471 0.454081 8.42984 0.358673 8.33219 0.291355C8.23455 0.224037 8.11875 0.187988 8.00015 0.187988C7.88155 0.187988 7.76574 0.224037 7.6681 0.291355C7.57046 0.358673 7.49558 0.454081 7.4534 0.564927L5.90427 4.4653C5.86372 4.56988 5.79429 4.66077 5.70406 4.7274C5.61383 4.79402 5.50652 4.83364 5.39465 4.84161L1.24171 5.11161C0.705084 5.14593 0.489084 5.83949 0.907022 6.18711L4.0874 8.83424C4.17588 8.90898 4.2415 9.00715 4.27673 9.11749C4.31195 9.22783 4.31534 9.34587 4.28652 9.45805L3.33702 13.1959C3.17558 13.8309 3.85115 14.3434 4.39452 13.9986L7.69077 11.9111C7.78342 11.8522 7.89093 11.8209 8.00071 11.8209C8.11049 11.8209 8.218 11.8522 8.31065 11.9111H8.31008Z'
                          fill='#FF8A00'
                        />
                      </svg>
                      <svg
                        width='16'
                        height='15'
                        viewBox='0 0 16 15'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M8.31008 11.9111L11.8566 14.1577C12.31 14.4446 12.8725 14.0177 12.7381 13.4884L11.7138 9.45805C11.6848 9.34579 11.6882 9.22764 11.7234 9.11718C11.7586 9.00673 11.8243 8.90846 11.9129 8.83368L15.0933 6.18711C15.5106 5.83949 15.2958 5.14593 14.7586 5.11105L10.6056 4.84105C10.4938 4.83312 10.3866 4.79359 10.2964 4.72707C10.2061 4.66055 10.1367 4.56977 10.096 4.4653L8.5469 0.564927C8.50471 0.454081 8.42984 0.358673 8.33219 0.291355C8.23455 0.224037 8.11875 0.187988 8.00015 0.187988C7.88155 0.187988 7.76574 0.224037 7.6681 0.291355C7.57046 0.358673 7.49558 0.454081 7.4534 0.564927L5.90427 4.4653C5.86372 4.56988 5.79429 4.66077 5.70406 4.7274C5.61383 4.79402 5.50652 4.83364 5.39465 4.84161L1.24171 5.11161C0.705084 5.14593 0.489084 5.83949 0.907022 6.18711L4.0874 8.83424C4.17588 8.90898 4.2415 9.00715 4.27673 9.11749C4.31195 9.22783 4.31534 9.34587 4.28652 9.45805L3.33702 13.1959C3.17558 13.8309 3.85115 14.3434 4.39452 13.9986L7.69077 11.9111C7.78342 11.8522 7.89093 11.8209 8.00071 11.8209C8.11049 11.8209 8.218 11.8522 8.31065 11.9111H8.31008Z'
                          fill='#FF8A00'
                        />
                      </svg>
                      <p
                        className={`${product_detail_style.small_text}  text-[#666666] font-normal`}
                      >
                        {category.rating} Review
                      </p>
                    </div>

                    <span className='text-[#B3B3B3]'>•</span>

                    <p
                      className={`${product_detail_style.small_text} self-center text-[#333333] font-medium`}
                    >
                      SKU:
                      <span className='text-[#666666] font-normal'>
                        2,51,594
                      </span>
                    </p>
                  </div>

                  <div className='flex gap-3  py-3 md:py-[20px]'>
                    <div className='flex gap-2'>
                      <p className='text-[#B3B3B3] relative font-bold text-[16px] md:text-[20px] line-through leading-[30px]'>
                        <span className='  '>₹{category.mrp}</span>
                      </p>

                      <p className='t ext-[#020202] font-bold  text-[20px] md:text-[24px] leading-[36px]'>
                        ₹{category.prices[0].price}
                      </p>
                    </div>

                    <p
                      className={`${product_detail_style.small_text} text-[#EA4B48] flex justify-center items-center  font-medium rounded-[30px] bg-[#EA4B481A]    w-[74px] h-[27px] my-auto `}
                    >
                      {/*  */}
                      64% Off
                    </p>
                  </div>
                </div>
              </div>

              {/* Product Brand Detail  */}
              <div className='flex border-b py-[18px] md:py-[20px] 2xl:py-[24px] justify-between '>
                <p
                  className={`${product_detail_style.small_text} my-auto text-[#1A1A1A]`}
                >
                  Brand:
                  <span
                    className={`${product_detail_style.small_text} text-[#808080]`}
                  >
                    {category.brand}
                  </span>
                </p>

                {/* Product share platforms  */}
                <div className='flex flex-row '>
                  <div
                    className={`${product_detail_style.small_text} text-[#1A1A1A] font-normal self-center`}
                  >
                    Share item:
                  </div>
                  <div className='  p-2.5 social_media rounded-full hover:bg-[#E6992A]'>
                    <svg
                      className=''
                      xmlns='http://www.w3.org/2000/svg'
                      width='18'
                      height='18'
                      viewBox='0 0 18 18'
                      fill='#5F6C72'
                    >
                      <g clip-path='url(#clip0_609_1890)'>
                        <path
                          d='M11.9981 2.98924H13.6414V0.127238C13.3579 0.0882383 12.3829 0.000488281 11.2474 0.000488281C8.87813 0.000488281 7.25513 1.49074 7.25513 4.22974V6.75049H4.64062V9.94999H7.25513V18.0005H10.4606V9.95074H12.9694L13.3676 6.75124H10.4599V4.54699C10.4606 3.62224 10.7096 2.98924 11.9981 2.98924Z'
                          fill='#5F6C72'
                        />
                      </g>
                      <defs>
                        <clipPath id='clip0_609_1890'>
                          <rect
                            width='18'
                            height='18'
                            fill='#5F6C72'
                            transform='translate(0 0.000488281)'
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>

                  <div className='p-2.5 social_media rounded-full hover:bg-[#E6992A]'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='18'
                      height='18'
                      viewBox='0 0 18 18'
                      fill='none'
                    >
                      <g clip-path='url(#clip0_527_1480)'>
                        <path
                          d='M18 3.41936C17.3306 3.71299 16.6174 3.90761 15.8737 4.00211C16.6388 3.54536 17.2226 2.82761 17.4971 1.96249C16.7839 2.38774 15.9964 2.68811 15.1571 2.85574C14.4799 2.13461 13.5146 1.68799 12.4616 1.68799C10.4186 1.68799 8.77387 3.34624 8.77387 5.37911C8.77387 5.67161 8.79862 5.95286 8.85938 6.22061C5.7915 6.07099 3.07687 4.60061 1.25325 2.36074C0.934875 2.91311 0.748125 3.54536 0.748125 4.22599C0.748125 5.50399 1.40625 6.63686 2.38725 7.29274C1.79437 7.28149 1.21275 7.10936 0.72 6.83824C0.72 6.84949 0.72 6.86411 0.72 6.87874C0.72 8.67199 1.99912 10.1615 3.6765 10.5046C3.37612 10.5867 3.04875 10.6261 2.709 10.6261C2.47275 10.6261 2.23425 10.6126 2.01038 10.5631C2.4885 12.0245 3.84525 13.0989 5.4585 13.1337C4.203 14.1159 2.60888 14.7076 0.883125 14.7076C0.5805 14.7076 0.29025 14.6941 0 14.657C1.63462 15.7111 3.57188 16.313 5.661 16.313C12.4515 16.313 16.164 10.688 16.164 5.81224C16.164 5.64911 16.1584 5.49161 16.1505 5.33524C16.8829 4.81549 17.4982 4.16636 18 3.41936Z'
                          fill='#5F6C72'
                        />
                      </g>
                      <defs>
                        <clipPath id='clip0_527_1480'>
                          <rect
                            width='18'
                            height='18'
                            fill='white'
                            transform='translate(0 0.000488281)'
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <div className='p-2.5 social_media rounded-full hover:bg-[#E6992A]'>
                    <svg
                      width='16'
                      height='18'
                      viewBox='0 0 16 18'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M8.24446 0C3.31112 0 0.6875 3.16139 0.6875 6.60855C0.6875 8.20724 1.58079 10.2008 3.01073 10.8331C3.22786 10.931 3.34599 10.8894 3.39437 10.688C3.43712 10.535 3.62501 9.79807 3.71614 9.45042C3.74426 9.33904 3.72964 9.24229 3.63963 9.13766C3.16486 8.58864 2.78797 7.58847 2.78797 6.65017C2.78797 4.24594 4.69943 1.91146 7.95195 1.91146C10.7646 1.91146 12.7323 3.73854 12.7323 6.35204C12.7323 9.30529 11.1696 11.3484 9.13888 11.3484C8.01495 11.3484 7.17792 10.4663 7.44343 9.37505C7.76407 8.07561 8.39297 6.6783 8.39297 5.74113C8.39297 4.90072 7.9182 4.20544 6.94841 4.20544C5.80423 4.20544 4.87606 5.33837 4.87606 6.85943C4.87606 7.82585 5.21808 8.47838 5.21808 8.47838C5.21808 8.47838 4.08628 13.0506 3.87589 13.9045C3.52038 15.3502 3.92427 17.6914 3.95915 17.8928C3.98052 18.0042 4.1054 18.0391 4.17516 17.9479C4.28654 17.8017 5.6546 15.8497 6.03824 14.4389C6.17775 13.9248 6.7504 11.84 6.7504 11.84C7.12729 12.5207 8.21521 13.0911 9.37401 13.0911C12.8212 13.0911 15.312 10.0613 15.312 6.30141C15.2997 2.69675 12.2148 0 8.24446 0Z'
                        fill='#4D4D4D'
                      />
                    </svg>
                  </div>
                  <div className='p-2.5 social_media rounded-full hover:bg-[#E6992A]'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='18'
                      height='18'
                      viewBox='0 0 18 18'
                      fill='none'
                    >
                      <g clip-path='url(#clip0_527_1012)'>
                        <path
                          d='M17.982 5.29254C17.9398 4.33613 17.7852 3.67861 17.5636 3.10885C17.335 2.50407 16.9834 1.96262 16.5227 1.5125C16.0726 1.05538 15.5276 0.700179 14.9298 0.47519C14.3568 0.253635 13.7027 0.0989725 12.7463 0.0568042C11.7827 0.0110647 11.4768 0.000488281 9.03299 0.000488281C6.58916 0.000488281 6.28327 0.0110647 5.32329 0.053233C4.36688 0.0954012 3.70936 0.250201 3.13975 0.471619C2.53483 0.700179 1.99338 1.05181 1.54326 1.5125C1.08614 1.96262 0.731077 2.50765 0.505951 3.10542C0.284397 3.67861 0.129734 4.33256 0.0875658 5.28897C0.0418264 6.25252 0.03125 6.55841 0.03125 9.00225C0.03125 11.4461 0.0418264 11.752 0.0839946 12.712C0.126163 13.6684 0.280963 14.3259 0.502517 14.8956C0.731077 15.5004 1.08614 16.0419 1.54326 16.492C1.99338 16.9491 2.5384 17.3043 3.13618 17.5293C3.70936 17.7509 4.36331 17.9055 5.31986 17.9477C6.2797 17.99 6.58573 18.0004 9.02956 18.0004C11.4734 18.0004 11.7793 17.99 12.7393 17.9477C13.6957 17.9055 14.3532 17.7509 14.9228 17.5293C16.1325 17.0616 17.0889 16.1052 17.5566 14.8956C17.778 14.3225 17.9328 13.6684 17.975 12.712C18.0172 11.752 18.0277 11.4461 18.0277 9.00225C18.0277 6.55841 18.0242 6.25252 17.982 5.29254ZM16.3611 12.6416C16.3223 13.5207 16.1747 13.9954 16.0516 14.3119C15.7491 15.096 15.1268 15.7184 14.3426 16.0209C14.0261 16.1439 13.548 16.2916 12.6724 16.3302C11.723 16.3725 11.4382 16.3829 9.03657 16.3829C6.6349 16.3829 6.34659 16.3725 5.40062 16.3302C4.52155 16.2916 4.04684 16.1439 3.73038 16.0209C3.34015 15.8766 2.98495 15.6481 2.69664 15.3492C2.39775 15.0573 2.16919 14.7057 2.02497 14.3154C1.9019 13.999 1.75424 13.5207 1.71564 12.6452C1.67334 11.6958 1.6629 11.4109 1.6629 9.00925C1.6629 6.60758 1.67334 6.31927 1.71564 5.37344C1.75424 4.49436 1.9019 4.01966 2.02497 3.70319C2.16919 3.31283 2.39775 2.95776 2.70021 2.66931C2.99195 2.37043 3.34358 2.14187 3.73395 1.99778C4.05042 1.87471 4.52869 1.72705 5.40419 1.68832C6.3536 1.64615 6.63847 1.63557 9.04 1.63557C11.4452 1.63557 11.73 1.64615 12.6759 1.68832C13.555 1.72705 14.0297 1.87471 14.3462 1.99778C14.7364 2.14187 15.0916 2.37043 15.3799 2.66931C15.6788 2.9612 15.9074 3.31283 16.0516 3.70319C16.1747 4.01966 16.3223 4.4978 16.3611 5.37344C16.4032 6.32284 16.4138 6.60758 16.4138 9.00925C16.4138 11.4109 16.4032 11.6922 16.3611 12.6416Z'
                          fill='#5F6C72'
                        />
                        <path
                          d='M9.03313 4.37842C6.48037 4.37842 4.40918 6.44947 4.40918 9.00237C4.40918 11.5553 6.48037 13.6263 9.03313 13.6263C11.586 13.6263 13.6571 11.5553 13.6571 9.00237C13.6571 6.44947 11.586 4.37842 9.03313 4.37842ZM9.03313 12.0018C7.37703 12.0018 6.03369 10.6586 6.03369 9.00237C6.03369 7.34613 7.37703 6.00293 9.03313 6.00293C10.6894 6.00293 12.0326 7.34613 12.0326 9.00237C12.0326 10.6586 10.6894 12.0018 9.03313 12.0018Z'
                          fill='#5F6C72'
                        />
                        <path
                          d='M14.9199 4.19569C14.9199 4.79182 14.4365 5.27518 13.8402 5.27518C13.2441 5.27518 12.7607 4.79182 12.7607 4.19569C12.7607 3.59943 13.2441 3.11621 13.8402 3.11621C14.4365 3.11621 14.9199 3.59943 14.9199 4.19569Z'
                          fill='#5F6C72'
                        />
                      </g>
                      <defs>
                        <clipPath id='clip0_527_1012'>
                          <rect
                            width='18'
                            height='18'
                            fill='white'
                            transform='translate(0 0.000488281)'
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                </div>
              </div>

              {/* Quantity & Card details */}
              <div className='border-b flex gap-3 justify-between my-auto py-[18.5px]'>
                <div className='flex items-center gap-x-1.5'>
                  <button
                    data-action='decrement'
                    className='bg-[#F2F2F2] border border-gray-300 md:p-2.5 p-1.5 focus:ring-[#E6992A] focus:ring-2 focus:outline-none rounded-full m-1'
                  >
                    <svg
                      className='w-3 h-3 text-black'
                      aria-hidden='true'
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 18 2'
                    >
                      <path
                        stroke='currentColor'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M1 1h16'
                      />
                    </svg>
                  </button>
                  <input
                    type='number'
                    className='p-0 w-5 bg-transparent border-0 text-gray-800 text-center focus:ring-0 dark:text-[#333333]'
                    name='custom-input-number'
                    readOnly
                  />
                  <button
                    data-action='increment'
                    className='bg-[#F2F2F2] border border-gray-300 md:p-2.5 p-1.5 focus:ring-[#E6992A] focus:ring-2 focus:outline-none rounded-full m-1'
                  >
                    <svg
                      className='w-3 h-3 text-black'
                      aria-hidden='true'
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 18 18'
                    >
                      <path
                        stroke='currentColor'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M9 1v16M1 9h16'
                      />
                    </svg>
                  </button>
                </div>

                <div className=' w-[70%] ssm:w-[50%] sm:w-full  flex '>
                  <button className=' flex justify-center items-center   gap-2 ssm:gap-3 msm:gap-4 text-white rounded-full bg-[#E6992A] font-semibold w-[100%] sm:w-full'>
                    <span className=' text-[12px] msm:text-[14px] sm:text-[16px]'>
                      Add to Cart
                    </span>
                    <span className=''>
                      <svg
                        className='w-[80%] msm:w-full '
                        width='18'
                        height='18'
                        viewBox='0 0 18 18'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M5.66667 7.33333H3.16667L1.5 16.5H16.5L14.8333 7.33333H12.3333M5.66667 7.33333V4.83333C5.66667 2.99239 7.15905 1.5 9 1.5V1.5C10.8409 1.5 12.3333 2.99238 12.3333 4.83333V7.33333M5.66667 7.33333H12.3333M5.66667 7.33333V9.83333M12.3333 7.33333V9.83333'
                          stroke='white'
                          stroke-width='1.3'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                        />
                      </svg>
                    </span>
                  </button>
                </div>

                <div className='bg-[#E6992A1A] rounded-full  p-2 sm:p-4 '>
                  <svg
                    className=' w-[95%] sm:w-[20px] '
                    width='20'
                    height='20'
                    viewBox='0 0 20 20'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M9.9996 17.5453C-6.66672 8.33354 4.99993 -1.66646 9.9996 4.65692C14.9999 -1.66646 26.6666 8.33354 9.9996 17.5453Z'
                      stroke='#9D6618'
                      stroke-width='1.5'
                    />
                  </svg>
                </div>
              </div>

              {/* More details  */}
              <div className='border-b  text-[#1A1A1A] pb-[10px] mt-[24px] '>
                <div className='grid grid-cols-3 gap-4 text-[#1A1A1A] pb-2 lg:pb-3'>
                  <p
                    className={`${product_detail_style.small_text} font-medium col-span-1 text-[#1A1A1A]`}
                  >
                    Part Number:{' '}
                  </p>
                  <span
                    className={`${product_detail_style.small_text}  col-span-2 font-normal`}
                  >
                    7803-...6473A
                  </span>
                </div>

                <div className='grid grid-cols-3 gap-4 text-[#1A1A1A] pb-2 lg:pb-3'>
                  <p
                    className={`${product_detail_style.small_text} font-medium col-span-1 text-[#1A1A1A] `}
                  >
                    Origin:{' '}
                  </p>
                  <span
                    className={`${product_detail_style.small_text} font-normal col-span-2`}
                  >
                    {' '}
                    Aftermarket
                  </span>
                </div>

                <div className='grid grid-cols-3 gap-4 text-[#1A1A1A] pb-2 lg:pb-3'>
                  <p
                    className={`${product_detail_style.small_text} font-medium col-span-1 text-[#1A1A1A] `}
                  >
                    Class:{' '}
                  </p>
                  <span
                    className={`${product_detail_style.small_text} col-span-2 font-normal`}
                  >
                    Deflection / Guide Pulley
                  </span>
                </div>

                <div className='grid grid-cols-3 gap-4 text-[#1A1A1A] pb-2 lg:pb-3'>
                  <p
                    className={`${product_detail_style.small_text} font-medium col-span-1 text-[#1A1A1A]`}
                  >
                    Sold by:
                  </p>
                  <span
                    className={`${product_detail_style.small_text} font-normal col-span-2`}
                  >
                    {' '}
                    Migoo
                  </span>
                </div>
              </div>

              <div className='mt-[12px] '>
                <h3
                  className={`${product_detail_style.headhing_medium} font-medium`}
                >
                  Features & Specification
                </h3>

                <div className='Description 2xl:mt-[45px] pt-3'>
                  <div className='flex ssm:grid  ssm:grid-cols-5 gap-4 pb-3 lg:pb-[17px] '>
                    <p
                      className={`${product_detail_style.small_text} font-medium text-[#000000] ssm:col-span-1  lg:col-span-2`}
                    >
                      Description
                    </p>
                    <span
                      className={`${product_detail_style.small_text} font-normal  ssm:col-span-4 lg:col-span-3 text-[#1A1A1A]`}
                    >
                      {category.description}
                    </span>
                  </div>

                  <div className='flex ssm:grid  ssm:grid-cols-5 gap-4 pb-3 lg:pb-[17px]'>
                    <p
                      className={`${product_detail_style.small_text} font-medium text-black ssm:col-span-1 lg:col-span-2`}
                    >
                      Net Quantity
                    </p>
                    <span
                      className={`${product_detail_style.small_text} font-normal text-[#1A1A1A] ssm:col-span-4 lg:col-span-3`}
                    >
                      1
                    </span>
                  </div>

                  <div className='flex ssm:grid  ssm:grid-cols-5 gap-4 pb-3 lg:pb-[17px]'>
                    <p
                      className={`${product_detail_style.small_text} font-medium text-black ssm:col-span-1  lg:col-span-2`}
                    >
                      Fitting place
                    </p>
                    <span
                      className={`${product_detail_style.small_text} font-normal text-[#1A1A1A] ssm:col-span-4 lg:col-span-3`}
                    >
                      {' '}
                      V-Ribbed Belt Drive
                    </span>
                  </div>

                  <div className='flex ssm:grid  ssm:grid-cols-5 gap-4 pb-3 lg:pb-[17px]'>
                    <p
                      className={`${product_detail_style.small_text} font-medium text-black ssm:col-span-1 lg:col-span-2`}
                    >
                      Manufacturer
                    </p>
                    <span
                      className={`${product_detail_style.small_text} font-normal text-[#1A1A1A] ssm:col-span-4 lg:col-span-3`}
                    >
                      Gates India Private Limited
                    </span>
                  </div>

                  <div className=' flex sm:grid  sm:grid-cols-5 gap-4'>
                    <p
                      className={`${product_detail_style.small_text} font-medium text-black   sm:col-span-1 lg:col-span-2`}
                    >
                      Address of Manufacturer
                    </p>
                    <span
                      className={`${product_detail_style.small_text} font-normal   text-[#1A1A1A] col-span-1 sm:col-span-4  lg:col-span-3 `}
                    >
                      3rd floor, Building # 10, Tower C DLF Cyber City,
                      Phase-II, Gurugram, Haryana 122002, India Ph:-
                      +911244933535
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Related Products Section  */}
      <section className='container-1 mt-[30px]'>
        <div className='text-[#1A1A1A] text-[24px] leading-7 font-medium'>
          <h2>Related Product</h2>
        </div>
        <div className='mt-[30px] '>
          <FeaturcardScroll />
        </div>
      </section>

      {/* Compatibility & Offers Section  */}
      <section className='container-1 mt-[45px]'>
        <div className='grid grid-cols-1  gap-4 xl:gap-[25px] lg:grid-cols-2'>
          {/* Compatibility Div  */}
          <div className='Grid-item-1  '>
            <h2 className={`${product_detail_style.headhing_medium} `}>
              {' '}
              Compatibility
            </h2>
            <div className=' border  pb-[5px] xl:pb-[10px] mt-6 min-w-[320px] mr-5 ssm:pr-0 ssm:min-w-auto  '>
              <div className=' flex  gap-[28px]  h-[32px]'>
                <h4 className='pl-[13px] text-[#808080] my-auto text-[14px] font-medium leading-[21px]'>
                  Excavator
                </h4>
                <h4 className='pl-[47px] text-[#808080] my-auto text-[14px] font-medium leading-[21px]'>
                  Backhoe Loader
                </h4>
              </div>
              <table className='table-fixed w-full text-sm text-left'>
                <thead className='text-[#4D4D4D] text-[12px] leading-[12px] h-[39px] uppercase bg-[#E7E7E782]'>
                  <tr>
                    <th
                      scope='col'
                      className='pl-2 xl:pl-4 w-[80px] sm:w-auto py-3'
                    >
                      Models
                    </th>
                    <th
                      scope='col'
                      className='xl:pl-[53px] w-[80px] sm:w-auto py-3'
                    >
                      Year
                    </th>
                    <th
                      scope='col'
                      className='xl:pl-[63px] w-[64px] sm:w-auto py-3'
                    >
                      Fuel
                    </th>
                    <th scope='col' className='xl:py-3 w-[80px] sm:w-auto'></th>
                  </tr>
                </thead>
                <tbody className='pt-[11px] w-[616px]'>
                  {/* {data.map((item, index) => (
                    <tr key={index} className='bg-white'> 
                      <td
                        className={`${product_detail_style.table_text} w-fit pl-2 xl:pl-4 py-1 lg:py-3 `}
                      >
                        {item.model}
                      </td>
                      <td
                        className={`${product_detail_style.table_small_text} w-fit  xl:pl-[53px] py-1 lg:py-3 `}
                      >
                        {item.year}
                      </td>
                      <td
                        className={`${product_detail_style.table_small_text} w-fit xl:pl-[63px] py-1 lg:py-3`}
                      >
                        {item.fuel}
                      </td>
                      <td className='xl:px-6 py-3  text-start'>
                        <a
                          href='#'
                          className={`${product_detail_style.small_text} text-[#E6992A] border-[#E6992A] px-1 ssm:px-[12px] py-[5px] border border-solid  box-border rounded-lg   sm:w-[92px] cursor-pointer`}
                        >
                          Choose
                        </a>
                      </td>
                    </tr>
                  ))} */}
                </tbody>
              </table>
            </div>
          </div>

          {/* Offer-by-Other-Seller Div  */}
          <div className='Grid-Item-2 Offer-by-Other-Seller  '>
            <h2 className={`${product_detail_style.headhing_medium} `}>
              Offer by Other Seller
            </h2>

            {featureData.map((category, index) => (
              <div className='mt-6  mb-[14px]' key={index}>
                <OfferCard prices={category.prices} title={category.title} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Review Section  */}
      <section className='container-1 mt-[36px]'>
        <div className=''>
          <h2 className={`${product_detail_style.headhing_medium} `}>
            Customer Review
          </h2>
        </div>
        <div className='mt-[25px] max-w-[648px]'>
          {/* Map through the reviews data and render only the first 4 reviews if showAllReviews is false */}
          {!showAllReviews
            ? datareview
                .slice(0, 1) // Display the first 4 reviews
                .map((data, index) => (
                  <Customer_review
                    key={index}
                    name={data.name}
                    date={
                      formattedToday === data.formattedDate
                        ? data.formattedTimeDifference
                        : data.formattedDate
                    }
                    score={data.score}
                    body={data.body}
                  />
                ))
            : // Render all reviews if showAllReviews is true
              datareview.map((data, index) => (
                <Customer_review
                  key={index}
                  name={data.name}
                  date={
                    formattedToday === data.formattedDate
                      ? data.formattedTimeDifference
                      : data.formattedDate
                  }
                  score={data.score}
                  body={data.body}
                />
              ))}

          {/* Load More / Show Less button */}
          <div className='mt-[14px] mb-[14px] grid grid-cols-2'>
            <button
              onClick={
                showAllReviews ? handleShowLessClick : handleLoadMoreClick
              }
              className='text-[#E6992A] flex rounded-[43px] font-semibold bg-[#E6992A1A]  leading-[28px]  w-fit sm:w-[138px] max-h-[45px]'
            >
              <span
                className={`${product_detail_style.small_text} mx-auto px-4 py-2 justify-center items-center sm:py-[14px]  sm:px-[8px]`}
              >
                {showAllReviews ? 'Show Less' : 'Load More'}
              </span>
            </button>
            <button
              className='text-[#E6992A]  justify-self-end  font-medium  text-[16px]  my-auto'
              onClick={togglePopup}
            >
              Write a Review
            </button>
          </div>

          {/* Popup Component */}
          {showPopup && (
            <div className='fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-yellow-200   rounded-lg shadow-lg'>
              <LeaveRating />
            </div>
          )}
        </div>
      </section>
    </>
  )
}

export default ProductDetails
