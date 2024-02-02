import React from "react";
import { useState, useEffect } from "react";
import Searchbycategorycard from "../Component/Searchbycategorycard";
import Headingtext from "../Component/Headingtext";
import { useParams } from "react-router-dom";


function Category2() {
    const [categories, setCategories] = useState([]);
    const { path } = useParams();
   
    
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch("http://192.168.2.134:8000/api/product-category/");
          const data = await response.json();
          const categoryData = 
          setCategories(data);
          console.log(data)
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
  
      fetchData();
    }, []);
    return (
        <>
          <section className=" pt-[49px] ">
        <div className="container-1 ">
          <Headingtext
            mainText=" Search by"
            coloredText=" Category"
            maincolor="text-black"
          />

          <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 md:gap-[22px] sm:gap-[25px] gap-0 items-center justify-center">
            {categories.slice(0).map((category, index) => (
            <Searchbycategorycard

              key={index}
              imageUrl={category.image  } 
              imagetext={category.imagetext} 
              imagetitle={category.name}
              path={category.path} 
              
            />
          ))}
          </div>
          
        </div>
      </section>
        </>
        );
    }
    
    export default Category2;