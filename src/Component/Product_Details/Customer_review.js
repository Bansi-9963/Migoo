import React from 'react'
import client1 from '../../Images/Product_Details/client1.png'
import product_detail_style from '../../CSS/Product_Details.module.css'

const Customer_review = ({ name, date, score, body, key }) => {
  const iconsArray = Array.from({ length: score }, (_, index) => index)
  return (
    <>
      <div key={key}>
        <div className='grid grid-cols-2'>
          <div className='flex gap-[10px]'>
            <div className='w-[34px] h-[41px]'>
              <img className='rounded-full' src={client1}></img>
            </div>

            <div>
              <p
                className={`${product_detail_style.small_text} text-[#1A1A1A] font-medium  `}
              >
                {name}
              </p>
              <div className='flex my-auto'>
                {/* Map through the array and render the SVG icon for each item */}
                {iconsArray.map((item, index) => (
                  <svg
                    key={index} // Make sure to provide a unique key for each SVG element
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
                ))}
              </div>
            </div>
          </div>
          <p
            className={`${product_detail_style.small_text} text-[#999999] font-normal  justify-self-end`}
          >
            {date}
          </p>
        </div>

        <div className='pt-[12px]'>
          <p
            className={`${product_detail_style.small_text} font-normal text-[#595959]  justify-self-end`}
          >
            {body}
          </p>
        </div>
      </div>
    </>
  )
}

export default Customer_review
