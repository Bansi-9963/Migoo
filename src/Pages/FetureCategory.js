import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Featurecard from '../Component/Featurecard';
import Searchbycategorycard from '../Component/Searchbycategorycard';
import Headingtext from '../Component/Headingtext';

function FetureCategory() {
  const [featureData, setFeatureData] = useState([]);
  const { text } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://192.168.2.134:8000/api/product-category`);
        const data = await response.json();

        const data1 = [];
        const matchedItems = data.filter(item =>
          item.name.trim().toLowerCase() === text.trim().toLowerCase()

        );
        setFeatureData(matchedItems);

      } catch (error) {
        console.error('Error fetching additional data:', error);
      }
    };

    fetchData();
  }, [text]);

  return (
    <>
      <section className="pt-[49px]">
        <div className="container-1">
          <Headingtext
            mainText=" Search by"
            coloredText=" Category"
            maincolor="text-black"
          />

          {featureData.map((category, index) => (
            <Searchbycategorycard
              key={index}
              imageUrl={category.image}
              imagetitle={category.name}
            />
          ))}
        </div>
      </section>
    </>
  );
}

export default FetureCategory;
