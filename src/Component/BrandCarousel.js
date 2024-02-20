import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import BrandComponent from '../Component/BrandComponent';

function BrandCarousel() {
  const carousel2Settings = {
    infinite: true,
    speed: 800,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1920,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 1535,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 540,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className=''>
      <Slider {...carousel2Settings}>
        <div>
          <BrandComponent brandimageUrl="../Images/Component 18.svg" brandimagetext="brandimage" />
        </div>
        <div>
          <BrandComponent brandimageUrl="../Images/Component 18.svg" brandimagetext="brandimage" />
        </div>
        <div>
          <BrandComponent brandimageUrl="../Images/Component 18.svg" brandimagetext="brandimage" />
        </div>
        <div>
          <BrandComponent brandimageUrl="../Images/Component 18.svg" brandimagetext="brandimage" />
        </div>
        <div>
          <BrandComponent brandimageUrl="../Images/Component 18.svg" brandimagetext="brandimage" />
        </div>
        <div>
          <BrandComponent brandimageUrl="../Images/Component 18.svg" brandimagetext="brandimage" />
        </div>
        <div>
          <BrandComponent brandimageUrl="../Images/Component 18.svg" brandimagetext="brandimage" />
        </div>
        <div>
          <BrandComponent brandimageUrl="../Images/Component 18.svg" brandimagetext="brandimage" />
        </div>
      
      </Slider>
    </div>
  );
}

export default BrandCarousel;
