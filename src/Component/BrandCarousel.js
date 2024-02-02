import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import BrandComponent from '../Component/BrandComponent';

function BrandCarousel() {    
      const carousel2Settings = {
        infinite: true,
        speed: 800,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        className: 'custom-slider-2', // Add a custom class to the second slider
        responsive: [
            {
              breakpoint: 1920,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                infinite: true,
                autoplay: true,
                className: 'custom-slider-2',
              },
            },
            {
              breakpoint: 1279,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                autoplay: true,
                className: 'custom-slider-2',
              },
            },
            {
              breakpoint: 1023,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                autoplay: true,
                className: 'custom-slider-2',
              },
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                initialSlide: 2,
                autoplay: true,
                className: 'custom-slider-2',
              },
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                autoplay: true,
                className: 'custom-slider-2',
              },
            },
          ],
      };
    
  return (
    <>
        <div className=''>
          {/* Second Carousel */}
          <Slider {...carousel2Settings}>
            <div>
            <BrandComponent
          brandimageUrl="../Images/Component 18.svg"
          brandimagetext="brandimage"
        />
            </div>
            <div>
            <BrandComponent
          brandimageUrl="../Images/Component 18.svg"
          brandimagetext="brandimage"
        />
            </div>
            <div>
            <BrandComponent
          brandimageUrl="../Images/Component 18.svg"
          brandimagetext="brandimage"
        />
            </div>
            <div>
            <BrandComponent
          brandimageUrl="../Images/Component 18.svg"
          brandimagetext="brandimage"
        />
            </div>
            <div>
            <BrandComponent
          brandimageUrl="../Images/Component 18.svg"
          brandimagetext="brandimage"
        />
            </div>
            <div>
            <BrandComponent
          brandimageUrl="../Images/Component 18.svg"
          brandimagetext="brandimage"
        />
            </div>
            <div>
            <BrandComponent
          brandimageUrl="../Images/Component 18.svg"
          brandimagetext="brandimage"
        />
            </div>
            <div>
            <BrandComponent
          brandimageUrl="../Images/Component 18.svg"
          brandimagetext="brandimage"
        />
            </div>
            {/* Add more slides as needed */}
          </Slider>
       </div>
       </>
      );
};

export default BrandCarousel