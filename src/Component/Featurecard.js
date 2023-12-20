import React from "react";
import Cardbutton from "./Cardbutton";

const handleClick = () => {
  const elements = document.getElementsByClassName('svg2');
  const elements1 = document.getElementsByClassName('svg1');
  for (let i = 0; i < elements.length; i++) {
    elements[i].style.display = "none";
  }
  for (let i = 0; i < elements1.length; i++) {
    elements1[i].style.display = "block";
  }
};

const handleCardClick = async () => {

  try {
    // Perform an API call based on the clicked product code
    const response = await fetch(`http://192.168.2.134:8000/api/product-category`);
    const data = await response.json();
    // const filteredData = data.filter(item => item.name === true);

    // Navigate to another page with the fetched data
    // You can use a navigation library (e.g., react-router-dom) for navigation
    console.log('Fetched data:', data);

    // Navigate to another page with the fetched data, using your preferred navigation method
  } catch (error) {
    console.error('Error fetching additional data:', error);
  }
};



const handlesClick = () => {
  const elements = document.getElementsByClassName('svg1');
  const elements1 = document.getElementsByClassName('svg2');
  for (let i = 0; i < elements.length; i++) {
    elements[i].style.display = "none";
  }
  for (let i = 0; i < elements1.length; i++) {
    elements1[i].style.display = "block";
  }
};
const Featurecard = ({
  image,
  text,
  brandName,
  originalPrice,
  discountedPrice,
  discountPercentage,
  productCode,
}) => {
  return (
    <div className="relative rounded-lg overflow-hidden shadow-lg  bg-white mb-2 " onClick={handleCardClick}>
      <div className="">
        <img className="w-full object-cover" src={image}  />
        {/* Rounded white border with a small like icon in the top-right corner */}
        <div className="absolute top-2 right-2">
          <div
            className="w-8 h-8 rounded-full bg-white p-1 flex items-center justify-center test"
            
          >
            {/* <img
              src="/Images/Vector (5).svg"  // Adjust the path accordingly
              alt="Icon"
              className="w-6 h-6 "
            /> */}
            <svg
              onClick={handlesClick}
              width="17"
              height="14"
              viewBox="0 0 17 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              style={{position:"absolute"}}
              className="svg1"
            >
              <path className="svg1"
                d="M14.8849 1.37528C14.0986 0.488407 13.0079 0 11.8136 0C10.134 0 9.07058 0.997241 8.47429 1.83385C8.31958 2.05094 8.18797 2.26861 8.07748 2.47345C7.96698 2.26861 7.8354 2.05094 7.68067 1.83385C7.08437 0.997241 6.02097 0 4.34131 0C3.14705 0 2.05631 0.488438 1.27003 1.37531C0.520059 2.22132 0.106995 3.35438 0.106995 4.56574C0.106995 5.88434 0.624858 7.11077 1.73674 8.42532C2.73047 9.60022 4.16008 10.8113 5.81554 12.2136C6.43241 12.7362 7.07033 13.2766 7.74947 13.8673L7.76987 13.8851C7.85791 13.9617 7.9677 14 8.07748 14C8.18726 14 8.29704 13.9617 8.38509 13.8851L8.40548 13.8673C9.08462 13.2766 9.72254 12.7362 10.3395 12.2136C11.9949 10.8113 13.4245 9.60026 14.4182 8.42532C15.5301 7.11074 16.048 5.88434 16.048 4.56574C16.048 3.35438 15.6349 2.22132 14.8849 1.37528ZM9.73362 11.5069C9.20184 11.9574 8.65456 12.421 8.07748 12.9197C7.50043 12.421 6.95311 11.9574 6.42124 11.5068C3.18139 8.76232 1.04104 6.94918 1.04104 4.56574C1.04104 3.58057 1.37122 2.66553 1.97078 1.98922C2.57722 1.30523 3.41907 0.92853 4.34131 0.92853C5.62185 0.92853 6.44963 1.71277 6.91852 2.37066C7.33912 2.96071 7.55859 3.55553 7.63343 3.78385C7.66397 3.87701 7.72337 3.95817 7.80313 4.01573C7.88288 4.07329 7.97892 4.10428 8.07748 4.10428C8.17603 4.10428 8.27207 4.07329 8.35183 4.01573C8.43159 3.95817 8.49098 3.87701 8.52152 3.78385C8.59637 3.55553 8.81584 2.96071 9.23643 2.37063C9.70532 1.71277 10.5331 0.92853 11.8136 0.92853C12.7359 0.92853 13.5777 1.30523 14.1841 1.98922C14.7837 2.66553 15.1139 3.58057 15.1139 4.56574C15.1139 6.94918 12.9736 8.76232 9.73362 11.5069Z"
                fill="#E6992A " 
              />
            </svg>
            <svg
              onClick={handleClick}
              width="17"
              height="14"
              viewBox="0 0 17 14"
              fill="red"
              xmlns="http://www.w3.org/2000/svg"
              className="svg2"
              aria-hidden="true"
              style={{position:"absolute"}}
            >
              <path 
              className="svg2"
                d="M14.8849 1.37528C14.0986 0.488407 13.0079 0 11.8136 0C10.134 0 9.07058 0.997241 8.47429 1.83385C8.31958 2.05094 8.18797 2.26861 8.07748 2.47345C7.96698 2.26861 7.8354 2.05094 7.68067 1.83385C7.08437 0.997241 6.02097 0 4.34131 0C3.14705 0 2.05631 0.488438 1.27003 1.37531C0.520059 2.22132 0.106995 3.35438 0.106995 4.56574C0.106995 5.88434 0.624858 7.11077 1.73674 8.42532C2.73047 9.60022 4.16008 10.8113 5.81554 12.2136C6.43241 12.7362 7.07033 13.2766 7.74947 13.8673L7.76987 13.8851C7.85791 13.9617 7.9677 14 8.07748 14C8.18726 14 8.29704 13.9617 8.38509 13.8851L8.40548 13.8673C9.08462 13.2766 9.72254 12.7362 10.3395 12.2136C11.9949 10.8113 13.4245 9.60026 14.4182 8.42532C15.5301 7.11074 16.048 5.88434 16.048 4.56574C16.048 3.35438 15.6349 2.22132 14.8849 1.37528ZM9.73362 11.5069C9.20184 11.9574 8.65456 12.421 8.07748 12.9197C7.50043 12.421 6.95311 11.9574 6.42124 11.5068C3.18139 8.76232 1.04104 6.94918 1.04104 4.56574C1.04104 3.58057 1.37122 2.66553 1.97078 1.98922C2.57722 1.30523 3.41907 0.92853 4.34131 0.92853C5.62185 0.92853 6.44963 1.71277 6.91852 2.37066C7.33912 2.96071 7.55859 3.55553 7.63343 3.78385C7.66397 3.87701 7.72337 3.95817 7.80313 4.01573C7.88288 4.07329 7.97892 4.10428 8.07748 4.10428C8.17603 4.10428 8.27207 4.07329 8.35183 4.01573C8.43159 3.95817 8.49098 3.87701 8.52152 3.78385C8.59637 3.55553 8.81584 2.96071 9.23643 2.37063C9.70532 1.71277 10.5331 0.92853 11.8136 0.92853C12.7359 0.92853 13.5777 1.30523 14.1841 1.98922C14.7837 2.66553 15.1139 3.58057 15.1139 4.56574C15.1139 6.94918 12.9736 8.76232 9.73362 11.5069Z"
                fill="red" 
              />
            </svg>
            
          </div>
        </div>
      </div>
      <div className="px-[14px] pt-4 pb-[9px]">
        <div className="flex mb-2 justify-between">
          <div className="font-bold text-xl w-[156px]">{text}</div>
          <div className="flex items-center">
            <img
              src="../Images/Rectangle 98.svg" // Adjust the path accordingly
              alt="Icon"
              className="w-[16px] h-[16px]"
            />
            <span className="text-xs ml-1 w-[64px]">Fulfilled by</span>
          </div>
        </div>
        <p className="text-[#000000] font-bold text-xl mb-2">
          ₹{discountedPrice}{" "}
          <span className="text-[#8A8A8A] text-xl pl-[11px] line-through">
            ₹{originalPrice}
          </span>{" "}
          <span className="text-black text-xs font-normal">
            ({discountPercentage}% off)
          </span>
        </p>
        {/* Brand Name and Product Code in the same row using flex and justify-end */}
        <div className="flex justify-between items-center mb-2">
          <p className="text-[#717171] font-medium text-base mr-2">
            {brandName}
          </p>
          <p className="text-[#717171] font-medium text-xs">{productCode}</p>
        </div>
      </div>
      <div className="flex justify-between px-[14px] gap-[10px] pb-4">
        <Cardbutton buttonText="Buy Now" />
        <Cardbutton buttonText="Add to Cart" />
      </div>
    </div>
  );
};

export default Featurecard;
