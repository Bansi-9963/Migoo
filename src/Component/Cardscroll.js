import React, { useState, useEffect } from 'react';
import Searchbycategorycard from '../Component/Searchbycategorycard';

const Cardscroll = () => {
  const [numCardsToShow, setNumCardsToShow] = useState(5);
  const [isWideScreen, setIsWideScreen] = useState(true);
  const [showAllCards, setShowAllCards] = useState(false);

  const handleToggleCards = () => {
    if (showAllCards) {
      // Show only one row of cards
      setNumCardsToShow(5);
    } else {
      // Load all cards when "Load More" is clicked
      setNumCardsToShow(15);
    }

    // Toggle the state
    setShowAllCards(!showAllCards);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsWideScreen(window.innerWidth > 1279);
    };

    // Initial check on component mount
    handleResize();

    // Listen for window resize events
    window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const cardContainerClasses = isWideScreen ? 'flex flex-wrap' : 'flex flex-nowrap';
  const cardItemClasses = isWideScreen ? 'w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/5 2xl:w-1/5' : 'w-200';

  return (
    <div>
      <div className={`overflow-x-scroll custom-scrollbar ${cardContainerClasses}`}>
        {Array.from({ length: numCardsToShow }).map((_, index) => (
          <div key={index} className={`${cardItemClasses} p-5`}>
            <Searchbycategorycard
              imageUrl="../Images/Group.svg"
              imagetext="images"
              imagetitle="Maintenance Service Parts"
              style={{ width: '100%' }}
            />
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-2 ">
        <button
          className="bg-white border border-[#E6992A] text-[#E6992A] lg:w-[176px] lg:h-[58px] w-[115px] h-[41px] font-bold text-[16px] lg:px-0 lg:py-0 py-2 px-4 rounded-md transition duration-300 hover:bg-[#E6992A] hover:text-white"
          onClick={handleToggleCards}
        >
          {showAllCards ? 'Show Less' : 'Load More'}
        </button>
      </div>
    </div>
  );
};

export default Cardscroll;
