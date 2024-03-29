import React ,{ useState } from "react";
const MyShoppingCartMobile = ({
  image,
  title,
  status,
  originalPrice,
  quantity,
  discountedPrice,
  discountPercentage,
  productCode
 
}) => {
   const [productQuantity, setProductQuantity] = useState(0);

   const decrement = () => {
     if (productQuantity > 0) {
      setProductQuantity(productQuantity - 1);
     }
   };
 
   const increment = () => {
    setProductQuantity(productQuantity + 1);
   };
 
   const subtotal = originalPrice * productQuantity;
  return (
    <div className="relative rounded-lg overflow-hidden border border-gray-100  mb-2 ssm:block flex">
      <div className="h-[100px] w-[110px] w-[40%] self-center">
        <img className="w-full h-full object-contain h-[100px] w-[110px]" src={image} alt={title} />
        <div className="absolute top-2 right-2">
          <div className="w-8 h-8 rounded-full p-1 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <g clipPath="url(#clip0_476_1809)">
                <path
                  d="M12 23C18.0748 23 23 18.0748 23 12C23 5.92525 18.0748 1 12 1C5.92525 1 1 5.92525 1 12C1 18.0748 5.92525 23 12 23Z"
                  stroke="#CCCCCC"
                  strokeMiterlimit="10"
                />
                <path
                  d="M16 8L8 16"
                  stroke="#666666"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16 16L8 8"
                  stroke="#666666"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_476_1809">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
      </div>
      <div className="px-[14px] pt-4 pb-[9px] text-gray-900 text-base font-normal leading-6">
        <div className=" mb-2 ">
          <div className="sm:text-lg  text-base font-semibold w-[104px]">{title}</div>
        </div>
        <p className="mb-3 text-sm flex  items-baseline">
          ${originalPrice}
          <div className="py-1 px-1 inline-block bg-white border border-gray-200 rounded-[170px]  max-[345px]:ml-1 ml-3 ">
            <div className="flex items-center gap-x-1.5">
              <button
                data-action="decrement"
                className="bg-[#F2F2F2] border border-gray-300 md:p-2.5 max-[345px]:p-1 p-1.5 focus:ring-[#E6992A] focus:ring-2 focus:outline-none rounded-full max-[345px]:m-0 m-1"
                onClick={decrement}
              >
                <svg
                  className="max-[345px]:w-2 w-3 max-[345px]:h-2 h-3 text-black"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 2"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 1h16"
                  />
                </svg>
              </button>
              <input
              type="number"
              className=" text-sm p-0 w-5 bg-transparent border-0 text-gray-800 text-center focus:ring-0 dark:text-black"
              name="custom-input-number"
              value={quantity}
              readOnly
            />
              <button
                data-action="increment"
                className="bg-[#F2F2F2] border border-gray-300 md:p-2.5 max-[345px]:p-1 p-1.5 focus:ring-[#E6992A] focus:ring-2 focus:outline-none rounded-full max-[345px]:m-0 m-1"
                onClick={increment}
              >
                <svg
                  className="max-[345px]:w-2 w-3 max-[345px]:h-2 h-3 text-black"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 18"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 1v16M1 9h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </p>
        <div className="flex justify-between items-center mb-2 text-sm">
          <span className="mb-2 ">SubTotal: ${subtotal.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
};
export default MyShoppingCartMobile;