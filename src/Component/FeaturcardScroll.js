import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Featurecard from "../Component/Featurecard";

// Custom Arrow Component
const CustomPrevArrow = (props) => (
  <div className="custom-arrow custom-prev-arrow" onClick={props.onClick}>
    {/* Add your custom SVG for the next arrow */}
    <svg
      width="19"
      height="36"
      viewBox="0 0 19 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.572916 19.1743L14.1264 34.6859C14.4398 35.0449 14.8598 35.245 15.3086 35.2492C15.7575 35.2534 16.1795 35.0611 16.4967 34.7079L17.5067 33.5845C18.1639 32.8525 18.1702 31.6529 17.5208 30.9098L6.1396 17.8841L17.6693 5.05692C17.9866 4.70373 18.1632 4.23061 18.1658 3.72439C18.1685 3.21761 17.9969 2.74126 17.6834 2.38193L16.6853 1.24014C16.3716 0.881089 15.9519 0.680988 15.503 0.676817C15.0542 0.672645 14.6322 0.864924 14.315 1.21811L0.587022 16.4903C0.269053 16.8446 0.0929319 17.3199 0.0912644 17.827C0.0875915 18.336 0.258701 18.8144 0.572916 19.1743Z"
        fill="#E6992A"
      />
    </svg>
  </div>
);

// Custom Arrow Component
const CustomNextArrow = (props) => (
  <div className="custom-arrow custom-next-arrow" onClick={props.onClick}>
    {/* Add your custom SVG for the previous arrow */}
    <svg
      width="19"
      height="35"
      viewBox="0 0 19 35"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.4064 16.4172L4.81736 0.960708C4.50307 0.602931 4.08268 0.404537 3.63382 0.402191C3.18495 0.399844 2.76341 0.593838 2.44701 0.948318L1.43957 2.07582C0.784021 2.81052 0.780475 4.01017 1.43166 4.75058L12.8427 17.73L1.34254 30.604C1.02613 30.9584 0.850614 31.4323 0.849117 31.9385C0.847619 32.4453 1.02033 32.9209 1.33463 33.279L2.33537 34.4167C2.64991 34.7745 3.07005 34.9729 3.51891 34.9752C3.96778 34.9776 4.38932 34.7836 4.70572 34.4291L18.3985 19.1012C18.7156 18.7456 18.8907 18.2695 18.8912 17.7624C18.8937 17.2534 18.7215 16.7758 18.4064 16.4172Z"
        fill="#E6992A"
      />
    </svg>
  </div>
);

function FeaturcardScroll() {
  // Settings for the carousel slider
  var carousel1Settings = {
    dots: false,
    // prevArrow:true,
    // nextArrow:true,
    infinite: true,
    autoplay: false,
    speed: 500,
    autoplaySpeed: 3000,
    cssEase: "linear",
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    className: "custom-slider-1", // Add a custom class to the second slider
    responsive: [
      {
        breakpoint: 1920,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
          autoplay: false,
        },
      },
      {
        breakpoint: 1279,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          autoplay: false,
        },
      },
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          autoplay: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };

  return (
    <>
      <div className="bg-[#ff123]">
        {/* First Carousel */}
        <Slider {...carousel1Settings}>
          <div>
            <Featurecard
              image="../Images/Rectangle 97.svg"
              text="AIR FILTER"
              discountedPrice="2800"
              originalPrice="3200"
              discountPercentage="57"
              brandName="Brand Name"
              productCode="F500-...AB-06"
            />
          </div>
          <div>
            <Featurecard
              image="../Images/Rectangle 97.svg"
              text="AIR FILTER"
              discountedPrice="2800"
              originalPrice="3200"
              discountPercentage="57"
              brandName="Brand Name"
              productCode="F500-...AB-06"
            />
          </div>
          <div>
            <Featurecard
              image="../Images/Rectangle 97.svg"
              text="AIR FILTER"
              discountedPrice="2800"
              originalPrice="3200"
              discountPercentage="57"
              brandName="Brand Name"
              productCode="F500-...AB-06"
            />
          </div>
          <div>
            <Featurecard
              image="../Images/Rectangle 97.svg"
              text="AIR FILTER"
              discountedPrice="2800"
              originalPrice="3200"
              discountPercentage="57"
              brandName="Brand Name"
              productCode="F500-...AB-06"
            />
          </div>
          <div>
            <Featurecard
              image="../Images/Rectangle 97.svg"
              text="AIR FILTER"
              discountedPrice="2800"
              originalPrice="3200"
              discountPercentage="57"
              brandName="Brand Name"
              productCode="F500-...AB-06"
            />
          </div>
          <div>
            <Featurecard
              image="../Images/Rectangle 97.svg"
              text="AIR FILTER"
              discountedPrice="2800"
              originalPrice="3200"
              discountPercentage="57"
              brandName="Brand Name"
              productCode="F500-...AB-06"
            />
          </div>
          <div>
            <Featurecard
              image="../Images/Rectangle 97.svg"
              text="AIR FILTER"
              discountedPrice="2800"
              originalPrice="3200"
              discountPercentage="57"
              brandName="Brand Name"
              productCode="F500-...AB-06"
            />
          </div>
          <div>
            <Featurecard
              image="../Images/Rectangle 97.svg"
              text="AIR FILTER"
              discountedPrice="2800"
              originalPrice="3200"
              discountPercentage="57"
              brandName="Brand Name"
              productCode="F500-...AB-06"
            />
          </div>
          {/* Add more slides as needed */}
        </Slider>
      </div>
    </>
  );
}

export default FeaturcardScroll;
