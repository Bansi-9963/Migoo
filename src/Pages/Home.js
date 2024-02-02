import React from "react";
import ButtonWithDropdown from "../Component/ButtonWithDropdown";
import Featurecard from "../Component/Featurecard";
// import Searchbycategorycard from "../Component/Searchbycategorycard";
import Headingtext from "../Component/Headingtext";
import Navbar from '../Component/Navbar';
import Aftermarketcard from "../Component/Aftermarketcard";
import BrandComponent from "../Component/BrandComponent";
import CustomCarousel from "../Component/CustomCarousel";
import Cardscroll from "../Component/Cardscroll";



function Home() {
  const backgroundStyle = {
    backgroundImage: 'url("../Images/buy equipment category background.png")',
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "", // Adjust the height based on your needs
    width: "",
  };


  // Settings for the carousel slider
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1920,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1279,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  // Additional settings for react-multi-carousel can be added her
  // const handleSearchPartsClick = () => {
  //   // Handle the click for "Search Parts" as needed
  //   console.log("Clicked on Search Parts");
  // };

  // const handleButtonClick = () => {
  //   // Handle button click as needed
  //   console.log("Button clicked!");
  // };
  return (
    <>
{/* ----Section-1 Start---- */}
<section>
<Navbar/>

      <section className="overflow-hidden" style={backgroundStyle}>
        <div className="container-1 ">
          <div className="pb-[194px] pt-[125px] ">
            
            <Headingtext
              mainText="Search by "
              coloredText=" Equipment"
              maincolor="text-[#FFFFFF]"
            />

            <div className=" md:flex-col lg:flex-row w-full lg:gap-[13.25px] items-center justify-center pt-[26px]">
              <ButtonWithDropdown
                buttonText="Select Brand"
                buttonColor="bg-[#D9D9D96E]"
                dropdownOptions={[
                  "Option 1 for Button 1",
                  "Option 2 for Button 1",
                  "Option 3 for Button 1",
                ]}
                onClick={() => console.log("Clicked on Button 1")}
              />
              <ButtonWithDropdown
                buttonText="Select Equipment"
                buttonColor="bg-[#D9D9D96E]"
                dropdownOptions={[
                  "Option 1 for Equipment",
                  "Option 2 for Equipment",
                  "Option 3 for Equipment",
                ]}
                onClick={() => console.log("Clicked on Button 1")}
              />
              <ButtonWithDropdown
                buttonText="Select Year"
                buttonColor="bg-[#D9D9D96E]"
                dropdownOptions={[
                  "Option 1 for Equipment",
                  "Option 2 for Equipment",
                  "Option 3 for Equipment",
                ]}
                onClick={() => console.log("Clicked on Button 1")}
              />
              <ButtonWithDropdown
                buttonText="Select Model"
                buttonColor="bg-[#D9D9D96E]"
                dropdownOptions={[
                  "Option 1 for Equipment",
                  "Option 2 for Equipment",
                  "Option 3 for Equipment",
                ]}
                onClick={() => console.log("Clicked on Button 1")}
              />

              {/* add custom button */}
              {/* <div className=" justify-center"> */}
              <button
                className="inline-flex xl:w-[176px] lg:w-[48%] w-full h-[50px] items-center justify-center p-2 border border-transparent bg-[#E6992A] bg-opacity-60 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 font-bold text-base"
                onClick={() => {
                  // Handle load more functionality
                }}
              >
                Search Parts
              </button>
              {/* </div> */}
            </div>
          </div>
        </div>
      </section>
{/* ----Section-1  End---- */}

{/* ----Section-2 Feature Part Start---- */}
      <section className="pt-[14px]">
        <div className="container-1 ">
          <Headingtext
            mainText=" Featured"
            coloredText=" Part <>"
            maincolor="text-black"
          />

          <CustomCarousel settings={settings}>
            {/* <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-4 sm:gap-6 gap-0 items-center pt-[8px]"> */}

            <Featurecard
              image="../Images/Rectangle 97.svg"
              text="AIR FILTER"
              discountedPrice="2800"
              originalPrice="3200"
              discountPercentage="57"
              brandName="Brand Name"
              productCode="F500-...AB-06"
            />
            <Featurecard
              image="../Images/Rectangle 97.svg"
              text="AIR FILTER"
              discountedPrice="2800"
              originalPrice="3200"
              discountPercentage="57"
              brandName="Brand Name"
              productCode="F500-...AB-06"
            />
            <Featurecard
              image="../Images/Rectangle 97.svg"
              text="AIR FILTER"
              discountedPrice="2800"
              originalPrice="3200"
              discountPercentage="57"
              brandName="Brand Name"
              productCode="F500-...AB-06"
            />
            <Featurecard
              image="../Images/Rectangle 97.svg"
              text="AIR FILTER"
              discountedPrice="2800"
              originalPrice="3200"
              discountPercentage="57"
              brandName="Brand Name"
              productCode="F500-...AB-06"
            />
            <Featurecard
              image="../Images/Rectangle 97.svg"
              text="AIR FILTER"
              discountedPrice="2800"
              originalPrice="3200"
              discountPercentage="57"
              brandName="Brand Name"
              productCode="F500-...AB-06"
            />
            <Featurecard
              image="../Images/Rectangle 97.svg"
              text="AIR FILTER"
              discountedPrice="2800"
              originalPrice="3200"
              discountPercentage="57"
              brandName="Brand Name"
              productCode="F500-...AB-06"
            />
            <Featurecard
              image="../Images/Rectangle 97.svg"
              text="AIR FILTER"
              discountedPrice="2800"
              originalPrice="3200"
              discountPercentage="57"
              brandName="Brand Name"
              productCode="F500-...AB-06"
            />
            <Featurecard
              image="../Images/Rectangle 97.svg"
              text="AIR FILTER"
              discountedPrice="2800"
              originalPrice="3200"
              discountPercentage="57"
              brandName="Brand Name"
              productCode="F500-...AB-06"
            />
            <Featurecard
              image="../Images/Rectangle 97.svg"
              text="AIR FILTER"
              discountedPrice="2800"
              originalPrice="3200"
              discountPercentage="57"
              brandName="Brand Name"
              productCode="F500-...AB-06"
            />
            {/*</div> */}
          </CustomCarousel>
        </div>
      </section>

{/* ----Section-2 Feature Part End---- */}

{/* ----Section-3 Search By Category Start---- */}
      <section className=" pt-[49px] ">
        <div className="container-1 ">
          <Headingtext
            mainText=" Search by"
            coloredText=" Category"
            maincolor="text-black"
          />
         {/* Cardscroll component-- */}
           <Cardscroll/>

        </div>
      </section>
{/* ----Section-3 Search By Category End---- */}

{/* Section-4 Why Choose Start */}
      <section className="">
        <div className="container-1 mx-auto mt-8">
          <div className="">
          <Headingtext
            mainText=" Why Choose "
            coloredText="Aftermarket Parts?"
            maincolor="text-black"
          />
          </div>
          <div className="grid grid-cols-3  2xl:gap-[6px] xl:gap-[22px] lg:gap-[250px] md:gap-[400px] sm:gap-[390px] gap-[257px] items-center justify-center pt-[14px] overflow-x-scroll">
            <Aftermarketcard
              imageUrl="../Images/Group (1).svg"
              heading="Authentic Product"
              text="Reliable components sourced only from reputable aftermarket 
        manufacturers, ensuring quality and performance for your vehicle's longevity and your satisfaction."
            />
            <Aftermarketcard
              imageUrl="../Images/Group (1).svg"
              heading="Authentic Product"
              text="Reliable components sourced only from reputable aftermarket 
        manufacturers, ensuring quality and performance for your vehicle's longevity and your satisfaction."
            />
            <Aftermarketcard
              imageUrl="../Images/Group (1).svg"
              heading="Authentic Product"
              text="Reliable components sourced only from reputable aftermarket 
        manufacturers, ensuring quality and performance for your vehicle's longevity and your satisfaction."
            />
          </div>
        </div>
      </section>
{/* ----Section-4 Why Choose End---- */}

{/*---Section-5  Brands Name Start----*/}
      <section className="mt-[49px] mb-5">
        <div className="container-1">
          <Headingtext
            mainText=" Brands we "
            coloredText="Trust <>"
            maincolor="text-black"
          />
      <CustomCarousel settings={settings}>
            <BrandComponent
              brandimageUrl="../Images/Component 18.svg"
              brandimagetext="brandimage"
            />
             <BrandComponent
              brandimageUrl="../Images/Component 18.svg"
              brandimagetext="brandimage"
            />
             <BrandComponent
              brandimageUrl="../Images/Component 18.svg"
              brandimagetext="brandimage"
            />
             <BrandComponent
              brandimageUrl="../Images/Component 18.svg"
              brandimagetext="brandimage"
            />
             <BrandComponent
              brandimageUrl="../Images/Component 18.svg"
              brandimagetext="brandimage"
            />

            <BrandComponent
              brandimageUrl="../Images/Component 18.svg"
              brandimagetext="brandimage"
            />

            <BrandComponent
              brandimageUrl="../Images/Component 18.svg"
              brandimagetext="brandimage"
            />

            <BrandComponent
              brandimageUrl="../Images/Component 18.svg"
              brandimagetext="brandimage"
            />
          </CustomCarousel>
        </div>
      </section>
      </section>
{/*---Section-5  Brands Name End----*/}
    </>
  );
}

export default Home;
