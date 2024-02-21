import React from 'react'
import SLider from 'react-slider'
import { useState, useEffect } from 'react'
import category_img from '../Images/Product-list.png'
import addtoCart from '../Images/Add To Cart.svg'
import { Link } from 'react-router-dom'

const MIN = 50
const MAX = 1000

const Product_List = () => {
  // const [featureData, setFeatureData] = useState([]);
  const [Data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'http://192.168.2.134:8000/api/product-detail/'
        )
        const Product_Category_Data = await response.json()
        console.log('data--------------', Product_Category_Data)

        setData(Product_Category_Data)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    // Call the function to fetch data
    fetchData()
  }, [])

  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 20 // Number of items per page
  const totalPages = Math.ceil(Data.length / itemsPerPage)
  console.log(totalPages)
  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = Data.slice(indexOfFirstItem, indexOfLastItem)

  const handlePageChange = pageNumber => {
    setCurrentPage(pageNumber)
  }

  const handleNextPage = () => {
    setCurrentPage(prevPage =>
      prevPage >= totalPages ? prevPage : prevPage + 1
    )
  }

  const handlePrevPage = () => {
    setCurrentPage(prevPage => (prevPage <= 1 ? prevPage : prevPage - 1))
  }

  let startPage = Math.max(1, currentPage - 2)
  let endPage = Math.min(totalPages, startPage + 2)

  if (endPage - startPage < 2) {
    startPage = Math.max(1, totalPages - 2)
    endPage = totalPages
  }

  const [values, setValues] = useState([MIN, MAX])

  const handleCat = (hidden_div, arrow_div) => {
    let hidden_cat_div = document.getElementById(`${hidden_div}`)
    let svg_div = document.getElementById(`${arrow_div}`)
    if (hidden_cat_div.classList.contains('hidden')) {
      hidden_cat_div.classList.remove('hidden')
      svg_div.classList.add('rotate-180')
    } else {
      hidden_cat_div.classList.add('hidden')
      svg_div.classList.remove('rotate-180')
    }
  }
  const handleclick = () => {
    // console.log("hello");
  }

  const handleChange = event => {
    let labels = document.getElementsByTagName('label')
    let matching_labels = [...labels].filter(
      data => data.htmlFor === event.target.value
    )
    if (matching_labels.length > 0 && event.target.checked === true) {
      matching_labels[0].style.color = '#E6992A'
      matching_labels[0].style.fontWeight = 'bold'
      setData(initial_data => {
        let new_data = [
          ...initial_data.filter(
            data => data.brand === event.target.defaultValue
          )
        ]
        return new_data
      })
    } else {
      matching_labels[0].style.color = '#4D4D4D'
      matching_labels[0].style.fontWeight = '500'
      setData(Data)
    }
  }

  const handleChange1 = event => {
    let labels = document.getElementsByTagName('label')
    let matching_labels = [...labels].filter(
      data => data.htmlFor === event.target.value
    )
    if (matching_labels.length > 0 && event.target.checked === true) {
      matching_labels[0].style.color = '#E6992A'
      matching_labels[0].style.fontWeight = 'bold'
    } else {
      matching_labels[0].style.color = '#4D4D4D'
      matching_labels[0].style.fontWeight = '500'
    }
  }

  const handleArrow = (sub_cat_id, arrow_div_id) => {
    let sub_cat_divs = document.getElementById(`${sub_cat_id}`)
    let arrow_divs = document.getElementById(`${arrow_div_id}`)
    if (sub_cat_divs.classList.contains('hidden')) {
      sub_cat_divs.classList.remove('hidden')
      arrow_divs.classList.add('rotate-180')
    } else {
      sub_cat_divs.classList.add('hidden')
      arrow_divs.classList.remove('rotate-180')
    }
  }

  const handleFilter = () => {
    let filter_div = document.getElementById('filter_div')
    if (filter_div.classList.contains('hidden')) {
      filter_div.classList.remove('hidden')
    } else {
      filter_div.classList.add('hidden')
    }
  }

  return (
    <div className='container-1'>
      {/* breadcrumbs */}
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
          <p className='text-[#E6992A] font-medium text-base'>Product List</p>
        </div>
      </div>

      <div className='xl:mt-6 lg:mt-5 mt-4 mb-20'>
        {/* Filter button */}
        <div
          className='flex items-center justify-center gap-3 bg-[#E6992A] rounded-[43px] pt-3 pb-3 w-[131px] lg:pointer-events-none cursor-pointer'
          onClick={handleFilter}
        >
          <div>
            <p className='text-sm font-semibold text-white'>Filter</p>
          </div>
          <div>
            <svg
              width='22'
              height='19'
              viewBox='0 0 22 19'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M18 5H9'
                stroke='white'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M13 14H4'
                stroke='white'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <circle cx='5' cy='5' r='4' stroke='white' strokeWidth='1.5' />
              <circle cx='17' cy='14' r='4' stroke='white' strokeWidth='1.5' />
            </svg>
          </div>
        </div>
        {/* mobile filter section */}
        <div className='hidden mt-3' id='filter_div'>
          <div className='px-1 py-1'>
            <div className='flex justify-between'>
              <div>
                <p className='text-[#1A1A1A] text-xl font-medium'>
                  All Categories
                </p>
              </div>
              <div
                id='mobile_cat_arrow'
                onClick={() => handleCat('mob_cat_div', 'mobile_cat_arrow')}
              >
                <svg
                  width='16'
                  height='16'
                  viewBox='0 0 12 8'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M1.33268 1.6665L5.99935 6.33317L10.666 1.6665'
                    stroke='#000'
                    strokeWidth='1.5'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
              </div>
            </div>
          </div>
          <div id='mob_cat_div' className='hidden px-1'>
            <div className='flex flex-col'>
              <div className='flex justify-between'>
                <div>
                  <p className='mb-[2px]'>Category 1</p>
                </div>
                <div
                  className='flex justify-center items-center cursor-pointer'
                  id='mob_right_arrow_1'
                  onClick={() =>
                    handleArrow('mob_sub_cat1', 'mob_right_arrow_1')
                  }
                >
                  <svg
                    width='16'
                    height='16'
                    viewBox='0 0 12 8'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M1.33268 1.6665L5.99935 6.33317L10.666 1.6665'
                      stroke='#000'
                      strokeWidth='1.5'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>
                </div>
              </div>
              <div className='ml-6 hidden' id='mob_sub_cat1'>
                <p>Sub Cat-1</p>
                <p>Sub Cat-2</p>
                <p>Sub Cat-3</p>
              </div>
            </div>
            <div className='flex flex-col'>
              <div className='flex justify-between'>
                <div>
                  <p className='mb-[2px]'>Category 2</p>
                </div>
                <div
                  className='flex justify-center items-center cursor-pointer'
                  id='mob_right_arrow_2'
                  onClick={() =>
                    handleArrow('mob_sub_cat2', 'mob_right_arrow_2')
                  }
                >
                  <svg
                    width='16'
                    height='16'
                    viewBox='0 0 12 8'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M1.33268 1.6665L5.99935 6.33317L10.666 1.6665'
                      stroke='#000'
                      strokeWidth='1.5'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>
                </div>
              </div>
              <div className='ml-6 hidden' id='mob_sub_cat2'>
                <p>Sub Cat-1</p>
                <p>Sub Cat-2</p>
                <p>Sub Cat-3</p>
              </div>
            </div>
            <div className='flex flex-col'>
              <div className='flex justify-between'>
                <div>
                  <p className='mb-[2px]'>Category 3</p>
                </div>
                <div
                  className='flex justify-center items-center cursor-pointer'
                  id='mob_right_arrow_3'
                  onClick={() =>
                    handleArrow('mob_sub_cat3', 'mob_right_arrow_3')
                  }
                >
                  <svg
                    width='16'
                    height='16'
                    viewBox='0 0 12 8'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M1.33268 1.6665L5.99935 6.33317L10.666 1.6665'
                      stroke='#000'
                      strokeWidth='1.5'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>
                </div>
              </div>
              <div className='ml-6 hidden' id='mob_sub_cat3'>
                <p>Sub Cat-1</p>
                <p>Sub Cat-2</p>
                <p>Sub Cat-3</p>
              </div>
            </div>
          </div>
          <div className='px-1 py-1'>
            <div className='flex justify-between'>
              <div>
                <p className='text-[#1A1A1A] text-xl font-medium'>Price</p>
              </div>
              <div
                id='mobile_cat_arrow'
                onClick={() =>
                  handleCat('mob_double_slider_price_range', 'mobile_cat_arrow')
                }
              >
                <svg
                  width='16'
                  height='16'
                  viewBox='0 0 12 8'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M1.33268 1.6665L5.99935 6.33317L10.666 1.6665'
                    stroke='#000'
                    strokeWidth='1.5'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
              </div>
            </div>
          </div>
          <div
            id='mob_double_slider_price_range'
            className='mt-2 h-20 hidden border-b-[1px]'
          >
            <div className='px-1'>
              <div className={'values'}>
                Price : ₹{values[0]} - ₹{values[1]}
              </div>
              <SLider
                className='slider w-full h-1 bg-[white] mt-[22px]'
                value={values}
                min={MIN}
                max={MAX}
                onChange={setValues}
              />
            </div>
          </div>
          <div className='px-1 py-1'>
            <h1 className='text-[#1A1A1A] text-xl font-medium'>Brand</h1>
            <div id='brands_list' className='mt-1 mb-2'>
              <div className='w-full flex justify-between items-center'>
                <label
                  className='text-[#4D4D4D] font-medium text-[18px]'
                  htmlFor='mob_brand_1'
                >
                  Brand 1
                </label>
                <input
                  type='checkbox'
                  id='brand_id'
                  value='mob_brand_1'
                  onChange={handleChange1}
                />
              </div>
              <div className='w-full flex justify-between items-center'>
                <label
                  className='text-[#4D4D4D] font-medium text-[18px]'
                  htmlFor='mob_brand_2'
                >
                  Brand 2
                </label>
                <input
                  type='checkbox'
                  id='brand_id'
                  value='mob_brand_2'
                  onChange={handleChange1}
                />
              </div>
              <div className='w-full flex justify-between items-center'>
                <label
                  className='text-[#4D4D4D] font-medium text-[18px]'
                  htmlFor='mob_brand_3'
                >
                  Brand 3
                </label>
                <input
                  type='checkbox'
                  id='brand_id'
                  value='mob_brand_3'
                  onChange={handleChange1}
                />
              </div>
              <div className='w-full flex justify-between items-center'>
                <label
                  className='text-[#4D4D4D] font-medium text-[18px]'
                  htmlFor='mob_brand_4'
                >
                  Brand 4
                </label>
                <input
                  type='checkbox'
                  id='brand_id'
                  value='mob_brand_4'
                  onChange={handleChange1}
                />
              </div>
              <div className='w-full flex justify-between items-center'>
                <label
                  className='text-[#4D4D4D] font-medium text-[18px]'
                  htmlFor='mob_brand_5'
                >
                  Brand 5
                </label>
                <input
                  type='checkbox'
                  id='brand_id'
                  value='mob_brand_5'
                  onChange={handleChange1}
                />
              </div>
            </div>
          </div>
        </div>
        {/* main section */}
        <div className='flex 2xl:gap-[33px] xl:gap-7 lg:gap-5'>
          <div className='2xl:w-[312px] xl:w-[272px] lg:w-[252px] h-fit mt-5 sticky top-[100px] hidden lg:block'>
            {/* All Category Dropdown */}
            <div className='flex justify-between items-center h-10 hover:bg-[#e9e7e1] hover:rounded w-full'>
              <div>
                <p className='text-xl font-medium text-[#1A1A1A] px-1'>
                  All Categories
                </p>
              </div>
              <div
                id='all_cat_down'
                className='cursor-pointer px-1'
                onClick={() => handleCat('category_div', 'all_cat_down')}
              >
                <svg
                  width='16'
                  height='16'
                  viewBox='0 0 12 8'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M1.33268 1.6665L5.99935 6.33317L10.666 1.6665'
                    stroke='#000'
                    strokeWidth='1.5'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
              </div>
            </div>
            {/* Categories Sub-Cat Dropdown */}
            <div id='category_div' className='hidden px-1 py-2 border-b-[1px]'>
              <div className='flex flex-col'>
                <div className='flex justify-between'>
                  <div>
                    <p className='mb-[2px]'>Category 1</p>
                  </div>
                  <div
                    className='flex justify-center items-center cursor-pointer'
                    id='right_arrow_1'
                    onClick={() => handleArrow('sub_cat1', 'right_arrow_1')}
                  >
                    <svg
                      width='16'
                      height='16'
                      viewBox='0 0 12 8'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M1.33268 1.6665L5.99935 6.33317L10.666 1.6665'
                        stroke='#000'
                        strokeWidth='1.5'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                    </svg>
                  </div>
                </div>
                <div className='ml-6 hidden' id='sub_cat1'>
                  <p>Sub Cat-1</p>
                  <p>Sub Cat-2</p>
                  <p>Sub Cat-3</p>
                </div>
              </div>
              <div className='flex flex-col'>
                <div className='flex justify-between'>
                  <div>
                    <p className='mb-[2px]'>Category 2</p>
                  </div>
                  <div
                    className='flex justify-center items-center cursor-pointer'
                    id='right_arrow_2'
                    onClick={() => handleArrow('sub_cat2', 'right_arrow_2')}
                  >
                    <svg
                      width='16'
                      height='16'
                      viewBox='0 0 12 8'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M1.33268 1.6665L5.99935 6.33317L10.666 1.6665'
                        stroke='#000'
                        strokeWidth='1.5'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                    </svg>
                  </div>
                </div>
                <div className='ml-6 hidden' id='sub_cat2'>
                  <p>Sub Cat-1</p>
                  <p>Sub Cat-2</p>
                  <p>Sub Cat-3</p>
                </div>
              </div>
              <div className='flex flex-col'>
                <div className='flex justify-between'>
                  <div>
                    <p className='mb-[2px]'>Category 3</p>
                  </div>
                  <div
                    className='flex justify-center items-center cursor-pointer'
                    id='right_arrow_3'
                    onClick={() => handleArrow('sub_cat3', 'right_arrow_3')}
                  >
                    <svg
                      width='16'
                      height='16'
                      viewBox='0 0 12 8'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M1.33268 1.6665L5.99935 6.33317L10.666 1.6665'
                        stroke='#000'
                        strokeWidth='1.5'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                    </svg>
                  </div>
                </div>
                <div className='ml-6 hidden' id='sub_cat3'>
                  <p>Sub Cat-1</p>
                  <p>Sub Cat-2</p>
                  <p>Sub Cat-3</p>
                </div>
              </div>
            </div>
            {/* Price Dropdown */}
            <div className='flex justify-between items-center h-10 hover:bg-[#e9e7e1] hover:rounded w-full'>
              <div>
                <p className='text-xl font-medium text-[#1A1A1A] px-1'>Price</p>
              </div>
              <div
                id='price_down'
                className='cursor-pointer px-1'
                onClick={() =>
                  handleCat('double_slider_price_range', 'price_down')
                }
              >
                <svg
                  width='16'
                  height='16'
                  viewBox='0 0 12 8'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M1.33268 1.6665L5.99935 6.33317L10.666 1.6665'
                    stroke='#000'
                    strokeWidth='1.5'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
              </div>
            </div>
            {/* Price Range */}
            <div
              id='double_slider_price_range'
              className='mt-2 h-20 hidden border-b-[1px]'
            >
              <div className='px-1'>
                <div className={'values'}>
                  Price : ₹{values[0]} - ₹{values[1]}
                </div>
                <SLider
                  className='slider w-full h-1 bg-[white] mt-[22px]'
                  value={values}
                  min={MIN}
                  max={MAX}
                  onChange={setValues}
                />
              </div>
            </div>
            {/* Brand Filter */}
            <div className='px-1'>
              <h1 className='text-[#1A1A1A] text-xl font-medium'>Brand</h1>
              <div id='brands_list' className='mt-1 mb-2'>
                <div className='w-full flex justify-between items-center'>
                  <label
                    className='text-[#4D4D4D] font-medium text-[18px]'
                    htmlFor='brand_1'
                  >
                    Brand 1
                  </label>
                  <input
                    type='checkbox'
                    id='brand_id'
                    value='brand_1'
                    onChange={handleChange}
                  />
                </div>
                <div className='w-full flex justify-between items-center'>
                  <label
                    className='text-[#4D4D4D] font-medium text-[18px]'
                    htmlFor='brand_2'
                  >
                    Brand 2
                  </label>
                  <input
                    type='checkbox'
                    id='brand_id'
                    value='brand_2'
                    onChange={handleChange}
                  />
                </div>
                <div className='w-full flex justify-between items-center'>
                  <label
                    className='text-[#4D4D4D] font-medium text-[18px]'
                    htmlFor='brand_3'
                  >
                    Brand 3
                  </label>
                  <input
                    type='checkbox'
                    id='brand_id'
                    value='brand_3'
                    onChange={handleChange}
                  />
                </div>
                <div className='w-full flex justify-between items-center'>
                  <label
                    className='text-[#4D4D4D] font-medium text-[18px]'
                    htmlFor='brand_4'
                  >
                    Brand 4
                  </label>
                  <input
                    type='checkbox'
                    id='brand_id'
                    value='brand_4'
                    onChange={handleChange}
                  />
                </div>
                <div className='w-full flex justify-between items-center'>
                  <label
                    className='text-[#4D4D4D] font-medium text-[18px]'
                    htmlFor='brand_5'
                  >
                    Brand 5
                  </label>
                  <input
                    type='checkbox'
                    id='brand_id'
                    value='brand_5'
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className='flex flex-col 2xl:w-[975px] w-full h-fit pt-5'>
            {/* Categories Imgaes */}
            <div className='grid  xl:grid-cols-3 md:grid-cols-2 grid-cols-1 w-full h-auto 2xl:gap-[25px] xl:gap-5 lg:gap-4 md:gap-5 ssm:gap-3 gap-5'>
              {currentItems.map(data => (
                <div
                  className='2xl:max-w-[312px] 2xl:max-h-[407px] border-2 hover:border-[#D2871C] rounded-lg'
                  key={data.id}
                >
                  <img src={category_img} className='p-[5px] w-full' />

                  <div className='h-[103px] p-[16px] '>
                    <div className=' flex justify-between'>
                      <div>
                        <p className='text-[20px]'>{data.title}</p>
                        <div className='flex text-[16px] gap-[5px]'>
                          <p>{data.prices[0].price}</p>
                          <p className='text-[#999999] line-through'>
                            ₹{data.mrp}
                          </p>
                        </div>
                        <p className='text-[12px]'>{data.brand}</p>
                      </div>
                      <div onClick={handleclick}>
                        <img src={addtoCart} />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* Pagination Buttons */}
            <div className='pagination-buttons w-full flex justify-center pt-8'>
              <button
                onClick={handlePrevPage}
                disabled={currentPage <= 1}
                className='pagination-button px-3 rounded-full border-1 border-red-900'
              >
                <svg
                  width='36'
                  height='36'
                  viewBox='0 0 36 36'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <rect
                    width='36'
                    height='36'
                    rx='18'
                    fill={`${currentPage <= 1 ? '#F2F2F2' : 'white'}`}
                  />
                  <rect
                    x='-0.5'
                    y='0.5'
                    width='35'
                    height='35'
                    rx='17.5'
                    transform='matrix(-1 0 0 1 35 0)'
                    stroke='#E6E6E6'
                  />
                  <path
                    d='M20.9167 12.1668L15.0834 18.0002L20.9167 23.8335'
                    stroke={` ${currentPage <= 1 ? '#B3B3B3' : '#1A1A1A'}`}
                    strokeWidth='1.5'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
              </button>
              {/* Render pagination buttons */}
              {Array.from({ length: endPage - startPage + 1 }, (_, index) => (
                <button
                  key={startPage + index}
                  onClick={() => handlePageChange(startPage + index)}
                  className={`pagination-button  text-[#666666] rounded-full px-3.5 py-1.5 ${
                    startPage + index === currentPage
                      ? 'selected bg-[#E6992A] text-white'
                      : ''
                  }`}
                >
                  {startPage + index}
                </button>
              ))}
              <button
                onClick={handleNextPage}
                disabled={currentPage >= totalPages}
                className='pagination-button px-3 rounded-full border-1 border-red-900'
              >
                <svg
                  width='36'
                  height='36'
                  viewBox='0 0 36 36'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <rect
                    x='-0.5'
                    y='0.5'
                    width='35'
                    height='35'
                    rx='17.5'
                    transform='matrix(-1 0 0 1 35 0)'
                    fill={` ${currentPage >= totalPages ? '#F2F2F2' : 'white'}`}
                  />
                  <rect
                    x='-0.5'
                    y='0.5'
                    width='35'
                    height='35'
                    rx='17.5'
                    transform='matrix(-1 0 0 1 35 0)'
                    stroke='#E6E6E6'
                  />
                  <path
                    d='M15.0833 12.1668L20.9166 18.0002L15.0833 23.8335'
                    stroke={` ${
                      currentPage >= totalPages ? '#B3B3B3' : '#1A1A1A'
                    }`}
                    strokeWidth='1.5'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product_List
