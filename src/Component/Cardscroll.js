import React, { useState, useEffect } from 'react';
import Searchbycategorycard from '../Component/Searchbycategorycard';

const Cardscroll = () => {
  const [numCardsToShow, setNumCardsToShow] = useState(5);
  const [isWideScreen, setIsWideScreen] = useState(true);

  const handleLoadMore = () => {
    // Increase the number of cards to show (you can adjust this logic)
    setNumCardsToShow(numCardsToShow + 5);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsWideScreen(window.innerWidth > 1023);
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
  const cardItemClasses = isWideScreen ? 'w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/5' : 'w-200';

  return (
    <div>
      <div className={`overflow-x-scroll ${cardContainerClasses}`}>
        {Array.from({ length: numCardsToShow }).map((_, index) => (
          <div key={index} className={`${cardItemClasses} p-2`}>
            <Searchbycategorycard
              imageUrl="../Images/Group.svg"
              imagetext="images"
              imagetitle="Engine"
              style={{ width: '100%' }}
            />
          </div>
        ))}
      </div>

      {/* "Load More" button below the cards and centered */}
      <div className="flex justify-center mt-4">
        <button
          className="bg-white border border-[#E6992A] text-[#E6992A] font-bold text-[16px] py-2 px-4 rounded-md w-[176px] h-[58px] transition duration-300 hover:bg-[#E6992A] hover:text-white"
          onClick={handleLoadMore}
        >
          Load More
        </button>
      </div>
    </div>
  );
};

export default Cardscroll;
