import React from 'react';
import { useNavigate , Link } from "react-router-dom"
const Searchbycategorycard = ({ imageUrl, imagetitle, imagetext, numchild, path }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    if (numchild === 0) {
      // Handle the click action for numchild === 0
      console.log("Clicked on the card with numchild === 0");
    } else {
      // Redirect to the desired route if numchild is not 0
      navigate(`/category/${path}`);
    }
  };

  return (
    <Link to={numchild !== 0 ? `/category/${path}` : '#'} onClick={handleCardClick}>
      <div className="relative overflow-hidden shadow-md bg-white mb-2" >
        <div className="flex justify-center p-[27px]">
          <img className="object-cover" src={imageUrl} alt={imagetext} />
        </div>
        <div className="px-6 py-[7px] bg-[#E6992A] ">
          <p className="text-white text-xl font-bold text-center">{imagetitle}</p>
        </div>
      </div>
    </Link>
  );
};

export default  Searchbycategorycard;