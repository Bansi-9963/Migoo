import React, { useState, useEffect, useContext } from 'react'
import Productimage from '../Images/Image.png'
import Productimage1 from '../Images/Gear.png'
import '../CSS/Order_detail.css'
import { Link } from 'react-router-dom'
import { UserContext } from '../App'
const BillingInformation = () => {
  let user_data = useContext(UserContext)
  let user_id = user_data.id
  console.log(user_id)

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState({})
  const [Data, setData] = useState([])
  const [productData, setproductData] = useState([])
  const [totalprice, setTotalPrice] = useState(0) // Initialize totalprice state

  const validateForm = () => {
    let errors = {}
    if (name.trim() === '') {
      errors.name = 'Name is required'
    }
    if (email.trim() === '') {
      errors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Email is not valid'
    }
    if (password.trim() === '') {
      errors.password = 'Password is required'
    } else if (password.length < 8) {
      errors.password = 'Password must be at least 8 characters'
    }
    setErrors(errors)
    return Object.keys(errors).length === 0
  }
  const handleSubmit = e => {
    e.preventDefault()
    if (validateForm()) {
      // console.log('Form submitted successfully')
    } else {
      // console.log('Form submission failed')
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        // cart-view api call
        const response1 = await fetch(
          'http://192.168.2.134:8000/api/cart-view/'
        )
        const Product_Category_Data1 = await response1.json()

        // product-detail api call
        const response2 = await fetch(
          'http://192.168.2.134:8000/api/product-detail/'
        )
        const Product_Category_Data2 = await response2.json()

        // Set product data
        setproductData(Product_Category_Data2)

        // Filter the Product_Category_Data based on owner_id matching user_id
        const filteredData = Product_Category_Data1.filter(
          item => item.owner_id === user_id && item.status === 'Open'
        )

        const filteredData1 = filteredData[0].basket
        // const data = filteredData.flatMap(item =>
        //   item.basket.map(item => item.product_id)
        // )

        // Calculate total price_excl_tax
        const totalPriceExclTax = filteredData1.reduce((total, currentItem) => {
          return total + currentItem.price_excl_tax
        }, 0)

        console.log('Total price_excl_tax:', totalPriceExclTax)

        // Assign totalPriceExclTax to totalprice state
        setTotalPrice(totalPriceExclTax)

        // Set the filtered data with totalPriceExclTax to state
        setData(filteredData1)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    // Call the function to fetch data
    fetchData()
  }, [user_id])

  return (
    <>
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
            <p className='text-[#E6992A] font-medium text-base'>Checkout</p>
          </div>
        </div>
      </section>

      <section className='container-1 py-5 sm:py-8'>
        <div className='grid grid-cols-12  gap- 0 sm:gap-6'>
          <div className='xl:col-span-8 lg:col-span-7 col-span-12'>
            <div className='min-h-full  lg:pb-9 pb-0 px-0 lg:px-4 sm:px-6 lg:px-8'>
              <div className='w-full space-y-8'>
                <h2 className='sm:text-3xl text-2xl font-medium'>
                  Billing Information
                </h2>

                <form className='mt-7 w-full'>
                  <div className='grid grid-cols-12 gap-4 '>
                    <div className='md:col-span-4 ssm:col-span-6 col-span-12 '>
                      <p className='text-[14px] font-normal leading-[21px]'>
                        First Name
                      </p>
                      <input
                        type='text'
                        placeholder='Dianne'
                        className='w-full mt-[6px] rounded-md border-[1px] border-[#E6E6E6] flex items-center pl-[16px] focus:border-[#E6992A] focus:outline-none'
                      />
                    </div>
                    <div className='md:col-span-4 ssm:col-span-6 col-span-12'>
                      <p className='text-[14px] font-normal leading-[21px]'>
                        Last Name
                      </p>
                      <input
                        type='text'
                        placeholder='Dianne'
                        className='w-full mt-[6px] rounded-md border-[1px] border-[#E6E6E6] flex items-center pl-[16px] focus:border-[#E6992A] focus:outline-none'
                      />
                    </div>
                    <div className='md:col-span-4 ssm:col-span-6 col-span-12'>
                      <p className='text-[14px] font-normal leading-[21px] '>
                        Company Name{' '}
                        <span className='2xl:ml-1 text-[#808080]'>
                          (optional)
                        </span>
                      </p>

                      <input
                        type='text'
                        placeholder='Dianne'
                        className='w-full  mt-[6px] rounded-md border-[1px] border-[#E6E6E6] flex items-center pl-[16px] focus:border-[#E6992A] focus:outline-none'
                      />
                    </div>
                    <div className='md:col-span-12 ssm:col-span-6 col-span-12'>
                      <p className='text-[14px] font-normal leading-[21px]'>
                        Street Address
                      </p>
                      <input
                        type='text'
                        placeholder='Street Address'
                        className='w-full mt-[6px] rounded-md border-[1px] border-[#E6E6E6] flex items-center pl-[16px] focus:border-[#E6992A] focus:outline-none'
                      />
                    </div>
                    <div className='md:col-span-4 ssm:col-span-6 col-span-12'>
                      <p className='text-[14px] font-normal leading-[21px]'>
                        Country / Region
                      </p>
                      <select
                        name='country'
                        id='country'
                        className='w-full py-2 px-3 mt-[6px] text-[#666] rounded-md border-[1px] bg-transparent border-[#E6E6E6] flex items-center pl-[16px] focus:border-[#E6992A] focus:outline-none'
                      >
                        <option value='volvo'>United States</option>
                      </select>
                    </div>
                    <div className='md:col-span-4 ssm:col-span-6 col-span-12'>
                      <p className='text-[14px] font-normal leading-[21px]'>
                        States
                      </p>
                      <select
                        name='states'
                        id='states'
                        className='w-full  py-2 px-3 mt-[6px] text-[#666] rounded-md border-[1px] bg-transparent border-[#E6E6E6] flex items-center pl-[16px] focus:border-[#E6992A] focus:outline-none'
                      >
                        <option value='volvo'>Washington DC</option>
                      </select>
                    </div>
                    <div className='md:col-span-4 ssm:col-span-6 col-span-12'>
                      <p className='text-[14px] font-normal leading-[21px]'>
                        Zip Code
                      </p>
                      <input
                        type='text'
                        placeholder='200333'
                        className='w-full  mt-[6px] rounded-md border-[1px] border-[#E6E6E6] flex items-center pl-[16px] focus:border-[#E6992A] focus:outline-none'
                      />
                    </div>
                    <div className='md:col-span-6 ssm:col-span-6 col-span-12'>
                      <p className='text-[14px] font-normal leading-[21px]'>
                        Email
                      </p>
                      <input
                        type='email'
                        placeholder='dianne.russell@gmail.com'
                        className='w-full  mt-[6px] rounded-md border-[1px] border-[#E6E6E6] flex items-center pl-[16px] focus:border-[#E6992A] focus:outline-none'
                      />
                    </div>
                    <div className='md:col-span-6 ssm:col-span-6 col-span-12'>
                      <p className='text-[14px] font-normal leading-[21px]'>
                        Phone
                      </p>
                      <input
                        type='tel'
                        placeholder='(603) 555-0123'
                        className='w-full  mt-[6px] rounded-md border-[1px] border-[#E6E6E6] flex items-center pl-[16px] focus:border-[#E6992A] focus:outline-none'
                      />
                    </div>
                    <div className='md:col-span-12 col-span-6  self-center'>
                      <div className='flex items-center'>
                        <input
                          id='shipToDifferentAddress'
                          name='shipToDifferentAddress'
                          type='checkbox'
                          className='h-4 w-4 text-gray-700 mb-0 border-gray-300 rounded'
                        />
                        <label
                          htmlFor='shipToDifferentAddress'
                          className='ml-2 mb-0 block text-sm text-[#1A1A1A]'
                        >
                          Ship to a different address
                        </label>
                      </div>
                    </div>
                    <div className='lg:col-span-6 col-span-12 flex justify-center items-center'></div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className='cart-summary xl:col-span-4 lg:col-span-5 col-span-12 min-w-md min-w-lg:justify-self-center'>
            <div className='rounded-md border border-gray-100 p-6 text-[#1A1A1A)] leading-6'>
              <div className='cart-total pb-1.5 font-medium text-[20px] '>
                Order summary
              </div>

              {Data.map((data, index) => (
                <div className='divide-y-2 pb-6' key={index}>
                  <div className='subtotal flex justify-between  '>
                    <div className='flex flex-row '>
                      {/* "http://192.168.2.134:8000/media/" + data.images[0].original */}
                      <img
                        src={Productimage1}
                        alt='Product Image'
                        className='w-[60px] h-[60px]'
                      />
                      <p className='text-gray-900 text-base font-normal leading-6 self-center pl-3 '>
                        {data.basket_id}
                        <br className='sm:hidden block' />
                        <span className='text-gray-900 text-base font-normal leading-6 self-center pl-1.5 '>
                          X
                        </span>
                        <span className='text-gray-900 text-base font-normal leading-6 self-center'>
                          {data.quantity}
                        </span>
                      </p>
                    </div>
                    <span className='text-[#1A1A1A] text-end align-self-center'>
                      ₹{data.price_excl_tax}
                    </span>
                  </div>
                </div>
              ))}
              <div className='divide-y-2 '>
                <div className='subtotal pb-3 flex justify-between  '>
                  <span className='text-[#4D4D4D] '>Subtotal:</span>
                  <span className='text-[#1A1A1A] text-end'>₹{totalprice}</span>
                </div>
                <div className='shipping py-3 flex justify-between'>
                  <span className='text-[#4D4D4D]'>Shipping:</span>
                  <span className='text-[#1A1A1A]'>Free</span>
                </div>
                <div className='total text-base  pt-3 pb-[24px] flex justify-between'>
                  <span className='font-normal text-[16px] text-[#4D4D4D]'>
                    Total:
                  </span>
                  <span className='font-semibold text-[16px] text-[#1A1A1A]'>
                    ₹{totalprice}
                  </span>
                </div>
              </div>
              <div className='cart-total  pb-4 font-medium text-[20px] '>
                Payment Method
              </div>
              <div className='payment-option py-1 flex items-center justify-between'>
                <label
                  htmlFor='cashOnDelivery'
                  className='flex items-center cursor-pointer'
                >
                  <input
                    id='cashOnDelivery'
                    name='paymentMethod'
                    type='radio'
                    className='h-4 w-4 text-gray-700 border-gray-300 rounded-full'
                  />
                  <span className='ml-1.5 text-sm text-gray-900'>
                    Cash on Delivery
                  </span>
                </label>
              </div>

              <div className='payment-option py-1 flex items-center justify-between'>
                <label
                  htmlFor='pay-via-upi'
                  className='flex items-center cursor-pointer'
                >
                  <input
                    id='pay-via-upi'
                    name='paymentMethod'
                    type='radio'
                    className='h-4 w-4 text-gray-700 border-gray-300 rounded-full'
                  />
                  <span className='ml-1.5 text-sm text-gray-900'>
                    Pay Via UPI
                  </span>
                </label>
              </div>
              <div className='payment-option py-1 flex items-center justify-between'>
                <label
                  htmlFor='mobilePayment'
                  className='flex items-center cursor-pointer'
                >
                  <input
                    id='mobilePayment'
                    name='paymentMethod'
                    type='radio'
                    className='h-4 w-4 text-gray-700 border-gray-300 rounded-full'
                  />
                  <span className='ml-1.5 text-sm text-gray-900'>
                    Mobile Wallet
                  </span>
                </label>
              </div>
              <button className='px-8 py-3.5 mt-4  text-white rounded-full bg-[#E6992A] font-semibold w-full'>
                Place Order
              </button>
            </div>
          </div>

          <div className='xl:col-span-8 lg:col-span-7 col-span-12 lg:hidden mb-10'>
            <div className='col-span-12 mt-2 mb-2'>
              <h2 className='text-2xl font-medium '>Additional Info</h2>
            </div>
            <div className='col-span-12 '>
              <label
                htmlFor='order_notes'
                className='block text-sm font-medium text-[#1A1A1A] sm:mb-[10px] mb-2'
              >
                Order Notes <span className='text-[#808080]'>(optional)</span>
              </label>
              <textarea
                id='order_notes'
                name='order_notes'
                autoComplete='order_notes'
                required
                className='appearance-none  relative block w-full px-3 py-3.5 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-[#E6992A] focus:border-[#E6992A] focus:z-10 sm:text-base text-sm'
                placeholder='Notes about your order, e.g. special notes for delivery'
              ></textarea>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default BillingInformation
