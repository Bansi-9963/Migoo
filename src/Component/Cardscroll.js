import React, { useState, useEffect } from "react";
import Searchbycategorycard from "../Component/Searchbycategorycard";

const Cardscroll = () => {
  const [data, setData] = useState([]);
  const [numCardsToShow, setNumCardsToShow] = useState(5);
  const [isWideScreen, setIsWideScreen] = useState(true);
  const [showAllCards, setShowAllCards] = useState(false);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://192.168.2.134:8000/api/product-category/");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const jsonData = await response.json();
        setData(jsonData);
        console.log(jsonData) // Assuming the API response is an array of data objects
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  const handleToggleCards = () => {
    if (showAllCards) {
      // Show only one row of cards
      setNumCardsToShow(isWideScreen ? 5 : 4);
    } else {
      // Load all cards when "Load More" is clicked
      setNumCardsToShow(15);
    }

    // Toggle the state
    setShowAllCards(!showAllCards);
  };

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsWideScreen(width > 1279);
      setNumCardsToShow(
        width > 1279 ? 5 : width > 1023 ? 4 : width > 767 ? 3 : 2
      );
    };

    // Initial check on component mount
    handleResize();

    // Listen for window resize events
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const cardContainerClasses = isWideScreen
    ? "grid xl:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-2 gap-5 h-auto"
    : "grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 max-[475px]:grid-cols-1 gap-5 justify-items-center";
  const cardItemClasses = "col-span-1";

  return (
    <div>
      <div className={`${cardContainerClasses}`}>
        {data.slice(0, numCardsToShow).map((item, index) => (
          <div key={index} className={`${cardItemClasses}`}>
            <Searchbycategorycard
              imageUrl={item.image} // Assuming the structure of your API response
              imagetext={item.slug}
              imagetitle={item.name}
              style={{ width: "100%" }}
            />
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-[31px] ">
        <button
          className="bg-white border border-[#E6992A] text-[#E6992A] lg:w-[176px] lg:h-[58px] w-[117px] h-[41px] font-bold text-[16px] lg:px-0 lg:py-0 py-2 px-4 rounded-lg transition duration-300 hover:bg-[#E6992A] hover:text-white"
          onClick={handleToggleCards}
        >
          {showAllCards ? "Show Less" : "Load More"}
        </button>
      </div>
    </div>
  );
};

export default Cardscroll;
