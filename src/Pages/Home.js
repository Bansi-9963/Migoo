import React from "react";
import ButtonWithDropdown from "../Component/ButtonWithDropdown";
import Headingtext from "../Component/Headingtext";

import FeaturcardScroll from "../Component/FeaturcardScroll";

import Navbar from '../Component/Navbar';

import Aftermarketcard from "../Component/Aftermarketcard";
import Cardscroll from "../Component/Cardscroll";
import BrandCarousel from "../Component/BrandCarousel";
import "./Home.css";

function Home() {
  const backgroundStyle = {
    backgroundImage: 'url("../Images/buy equipment category background.png")',
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "", // Adjust the height based on your needs
    width: "",
  };

  return (
    <>

<section>
<Navbar/>

      <section className="overflow-hidden" style={backgroundStyle}>

        <div className="container-1 ">
          <div className="lg:pb-[194px] pb-[120px] pt-[125px] ">
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
                className="inline-flex xl:ml-0 lg:ml-[181px] md:ml-0 sm:ml-0 ml-0 xl:w-[176px] lg:w-[48%] w-full h-[50px] items-center justify-center p-2 border border-transparent hover:bg-[#F2C94C] hover:bg-opacity-60 bg-[#E6992A] bg-opacity-60 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 font-bold text-base"
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
      <section className="pt-[28px]">
        <div className="container-1  ">
          <Headingtext
            mainText=" Featured"
            coloredText=" Part <>"
            maincolor="text-black"
          />
          <FeaturcardScroll />
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
          {/* <Cardscroll cardsData={cardsData} /> */}
          <Cardscroll />
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
          <div className="grid grid-cols-3 3xl:gap-[10px] 2xl:gap-[10px] xl:gap-[32px] lg:gap-[251px] md:gap-[381px] sm:gap-[382px] gap-[261px] items-center  pt-[14px] overflow-x-scroll custom-scrollbar">
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
          <BrandCarousel />
        </div>
      </section>

      </section>
{/*---Section-5  Brands Name End----*/}

    </>
  );
}

export default Home;
