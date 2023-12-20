// import React, { useEffect, useState } from 'react';
// import FeatureCard from './Featurecard'; // Assuming FeatureCard component is in a separate file

// const ApiTest = () => {
//     const [featureData, setFeatureData] = useState([]);

//     useEffect(() => {
//         // Fetch data from API here
//         // For simplicity, I'll simulate API data
//         const fetchData = async () => {
//             try {
//                 const response = await fetch('http://192.168.2.134:8000/api/product-detail/');
//                 const data = await response.json();
//                 setFeatureData(data); // Assuming data is an array of feature objects
//             } catch (error) {
//                 console.error('Error fetching data:', error);
//             }
//         };

//         fetchData();
//     }, []);

//     return (
//         <div>
//             {featureData.map((feature, index) => (
//                 <FeatureCard
//                     key={index} // Make sure to provide a unique key for each FeatureCard
//                     image={feature.image}
//                     text={feature.text}
//                     discountedPrice={feature.discountedPrice}
//                     originalPrice={feature.originalPrice}
//                     discountPercentage={feature.discountPercentage}
//                     brandName={feature.brandName}
//                     productCode={feature.productCode}
//                 />
//             ))}
//         </div>
//     );
// };

// export default ApiTest;

import React from "react";
import ButtonWithDropdown from "../Component/ButtonWithDropdown";
import Featurecard from "../Component/Featurecard";
import Searchbycategorycard from "../Component/Searchbycategorycard";
import Headingtext from "../Component/Headingtext";

import { useState, useEffect } from "react";

import Style from "../Pages/Home.css";

import Aftermarketcard from "../Component/Aftermarketcard";
import BrandComponent from "../Component/BrandComponent";


import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

function Home() {


  const [categories, setCategories] = useState([]);
  const [visibleCategories, setVisibleCategories] = useState(5); // Initial number of visible categories

  useEffect(() => {
    // Fetch data from your API endpoint
    const fetchData = async () => {
      try {
        const response = await fetch("http://192.168.2.134:8000/api/product-category/");
        const data = await response.json();
        setCategories(data);
        console.log(data)
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const loadMoreCategories = () => {
    setVisibleCategories((prevCount) => prevCount + 5); // Increase the number of visible categories by 5
  };


  const backgroundStyle = {
    backgroundImage: 'url("../Images/buy equipment category background.png")',
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "", // Adjust the height based on your needs
    width: "",
  };
  



   // Settings for the carousel slider
   const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 1280 }, items: 4 },
    desktop: { breakpoint: { max: 1279, min: 1024 }, items: 3 },
    tablet: { breakpoint: { max: 1023, min: 640 }, items: 2 },
    mobile: { breakpoint: { max: 639, min: 0 }, items: 1 },
  };
  
  // Settings for the carousel slider
  const carouselSettings = {
    infinite: true, // Enable infinite loop
    responsive: responsive,
  
   

  
    // Additional settings for react-multi-carousel can be added here
  };
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

      {/ section-1 /}
      <section className="overflow-hidden" style={backgroundStyle} >
        <div className="container-1 " >
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

              {/ add custom button /}
              {/ <div className=" justify-center"> /}
                <button
                  className="inline-flex xl:w-[176px] lg:w-[48%] w-full h-[50px] items-center justify-center p-2 border border-transparent bg-[#E6992A] bg-opacity-60 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 font-bold text-base"
                  onClick={() => {
                    // Handle load more functionality
                  }}
                >
                  Search Parts
                </button>
              {/* {/ </div> /} */}
            </div>
          </div>
        </div>
      </section>

      {/ section-2 /}
      <section className="pt-[14px] container-1">
        <div className=" ">
          <Headingtext
            mainText=" Featured"
            coloredText=" Part <>"
            maincolor="text-black"
          />
         

         <Carousel{...carouselSettings} >
          {/ <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-4 sm:gap-6 gap-0 items-center pt-[8px]"> /}
         
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
          </Carousel>
          
        </div>
      </section>
      {/ section-3 /}
      <section className=" pt-[49px] ">
        <div className="container-1 ">
          <Headingtext
            mainText=" Search by"
            coloredText=" Category"
            maincolor="text-black"
          />

          <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 md:gap-[22px] sm:gap-[25px] gap-0 items-center justify-center">
            {/* <Searchbycategorycard
              imageUrl="../Images/Group.svg"
              imagetext="images"
              imagetitle="Engine"
            />
            <Searchbycategorycard
              imageUrl="../Images/Group.svg"
              imagetext="images"
              imagetitle="Engine"
            />
            <Searchbycategorycard
              imageUrl="../Images/Group.svg"
              imagetext="images"
              imagetitle="Engine"
            />
            <Searchbycategorycard
              imageUrl="../Images/Group.svg"
              imagetext="images"
              imagetitle="Engine"
            />
            <Searchbycategorycard
              imageUrl="../Images/Group.svg"
              imagetext="images"
              imagetitle="Engine"
            /> */}
            {categories.filter(category => category.depth === 1).slice(0, visibleCategories).map((category, index) => (
            <Searchbycategorycard
              key={index}
              imageUrl={category.image  } // Replace with the actual property from your API response
              imagetext={category.imagetext} // Replace with the actual property from your API response
              imagetitle={category.name} // Replace with the actual property from your API response
            />
          ))}

            {/ Add more instances of Searchbycategorycard as needed /}
          </div>
          {/ add custom button /}
          {visibleCategories < categories.filter(category => category.depth === 1).length && (
            <div className="flex justify-center mt-4">
              <button
                className="bg-white border border-[#E6992A] text-[#E6992A] font-bold text-[16px] py-2 px-4 rounded-md w-[176px] h-[58px] transition duration-300 hover:bg-[#E6992A] hover:text-white"
                onClick={loadMoreCategories}
              >
                Load More
              </button>
            </div>
          )}
        </div>
      </section>

      {/ section-4 /}
      <section className="">
        <div className="container-1 mx-auto mt-8">
          <Headingtext
            mainText=" Why Choose "
            coloredText="Aftermarket Parts?"
            maincolor="text-black"
          />
          <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-[22px] items-center justify-center pt-[14px] ">
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
      {/ section-5 /}
      <section className="mt-[49px] ">
  <div className="container-1">
    <Headingtext
      mainText=" Brands we "
      coloredText="Trust <>"
      maincolor="text-black"
    />
    <div className="grid grid-cols-12 gap-3">
      <div className="col-span-6 sm:col-span-6 md:col-span-6 lg:col-span-3">
        <BrandComponent
          brandimageUrl="../Images/Component 18.svg"
          brandimagetext="brandimage"
        />
      </div>
      <div className="col-span-6 sm:col-span-6 md:col-span-6 lg:col-span-3">
        <BrandComponent
          brandimageUrl="../Images/Component 18.svg"
          brandimagetext="brandimage"
        />
      </div>
      <div className="col-span-6 sm:col-span-6 md:col-span-6 lg:col-span-3">
        <BrandComponent
          brandimageUrl="../Images/Component 18.svg"
          brandimagetext="brandimage"
        />
      </div>
      <div className="col-span-6 sm:col-span-6 md:col-span-6 lg:col-span-3">
        <BrandComponent
          brandimageUrl="../Images/Component 18.svg"
          brandimagetext="brandimage"
        />
      </div>
    </div>
  </div>
</section>
    </>
  );
}

export default Home;