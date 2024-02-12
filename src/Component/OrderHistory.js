import React from 'react';
import axios from 'axios';
import Navigation_Bar from "./Navigation_Bar";
import '../CSS/Order_detail.css';


const OrderHistory = () => {
    const { useState, useEffect } = React;

   
      const [data, setData] = useState([]);
      const [currentPage, setCurrentPage] = useState(1);
      const itemsPerPage = 12; // Number of items per page
      const [loading, setLoading] = useState(true);

      const products = [
        {   id:1,
            order_id: `#3933`,
            date: "4 April, 2021",
            total: "$135.00 (5 Products)",
            status: "Processing",
        },
        {   id:2,
            order_id: `#3934`,
            date: "4 April, 2021",
            total: "$135.00 (5 Products)",
            status: "on the way",
        },
        {
            id:3,
            order_id: `#3935`,
            date: "4 April, 2021",
            total: "$135.00 (5 Products)",
            status: "Processing",
        },
        {
            id:4,
            order_id: `#3936`,
            date: "4 April, 2021",
            total: "$135.00 (5 Products)",
            status: "Completed",
        },
        {
            id:5,
            order_id: `#3937`,
            date: "4 April, 2021",
            total: "$135.00 (5 Products)",
            status: "Processing",
        },
        {
            id:6,
            order_id: `#3938`,
            date: "4 April, 2021",
            total: "$135.00 (5 Products)",
            status: "Completed",
        },
        {
            id:7,
            order_id: `#3939`,
            date: "4 April, 2021",
            total: "$135.00 (5 Products)",
            status: "Processing",
        },
        {
            id:8,
            order_id: `#3940`,
            date: "4 April, 2021",
            total: "$135.00 (5 Products)",
            status: "Completed",
        },
        {
            id:9,
            order_id: `#3941`,
            date: "4 April, 2021",
            total: "$135.00 (5 Products)",
            status: "Processing",
        },
        {
            id:10,
            order_id: `#3942`,
            date: "4 April, 2021",
            total: "$135.00 (5 Products)",
            status: "Completed",
        },
        {
            id:11,
            order_id: `#3942`,
            date: "4 April, 2021",
            total: "$135.00 (5 Products)",
            status: "Completed",
        },
        {
            id:12,
            order_id: `#3942`,
            date: "4 April, 2021",
            total: "$135.00 (5 Products)",
            status: "Completed",
        },
        {
            id:13,
            order_id: `#3942`,
            date: "4 April, 2021",
            total: "$135.00 (5 Products)",
            status: "Completed",
        },
        {
            id:14,
            order_id: `#3942`,
            date: "4 April, 2021",
            total: "$135.00 (5 Products)",
            status: "Completed",
        },
        {
            id:15,
            order_id: `#3942`,
            date: "4 April, 2021",
            total: "$135.00 (5 Products)",
            status: "Completed",
        },
        {
            id:16,
            order_id: `#3942`,
            date: "4 April, 2021",
            total: "$135.00 (5 Products)",
            status: "Completed",
        },
        {
            id:17,
            order_id: `#3942`,
            date: "4 April, 2021",
            total: "$135.00 (5 Products)",
            status: "Completed",
        },
        {
            id:18,
            order_id: `#3942`,
            date: "4 April, 2021",
            total: "$135.00 (5 Products)",
            status: "Completed",
        },
        
    ];

    //   useEffect(() => {
    //     fetchData();
    //   }, []);

    //   const fetchData = async () => {
    //     try {
    //       // Replace this URL with your API endpoint or local data source
    //       const response = await axios.get("https://dummyjson.com/products");
    //       setData(response.data.products); // Access the 'products' array from the response object
    //       setLoading(false);
    //     } catch (error) {
    //       console.error("Error fetching data:", error);
    //       setLoading(false);
    //     }
    //   };

      const totalPages = Math.ceil(products.length / itemsPerPage);
      console.log(products.length)
      const indexOfLastItem = currentPage * itemsPerPage;
      const indexOfFirstItem = indexOfLastItem - itemsPerPage;
      const currentItems = 
        products.slice(indexOfFirstItem, indexOfLastItem);

      const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
      };

      const handleNextPage = () => {
        setCurrentPage((prevPage) =>
          prevPage >= totalPages ? prevPage : prevPage + 1
        );
      };

      const handlePrevPage = () => {
        setCurrentPage((prevPage) =>
          prevPage <= 1 ? prevPage : prevPage - 1
        );
      };
  return (
    <section className="sm:my-20 my-10  flex ssm:flex-row flex-col lg:gap-6 gap-4 container-1">
    <Navigation_Bar />
    <div className="w-full  ">
      <div className="border-2 border-[#E6E6E6] rounded-md   pb-14 ">
      <h2 className="text-xl font-medium leading-7 text-[#1A1A1A] px-[20px] py-1.5 ">
               Order History
            </h2>
            <div className='overflow-x-auto'>
            <table className="data-table w-full   ">
              <thead className="bg-[#F2F2F2]">
                <tr className="text-[#4D4D4D]">
                  <th className="column-header py-3 px-[24px] pl-[24px] text-start">ORDER ID</th>
                  <th className="column-header py-3 px-[24px] text-start">DATE</th>
                  <th className="column-header py-3 px-[24px] text-start">TOTAL</th>
                  <th className="column-header py-3 px-[24px] text-start">STATUS</th>
                  <th className="column-header py-3 px-[24px] text-start sr-only">View</th>
                  {/* Add more table headers as needed */}
                </tr>
              </thead>
              <tbody>
                {currentItems.map((item) => (
                  <tr key={item.id} className="data-row text-sm text-[#333333]">
                    <td className="data-cell py-3 pl-[24px] whitespace-nowrap">{item.order_id}</td>
                    <td className="data-cell py-3 whitespace-nowrap">{item.date}</td>
                    <td className="data-cell py-3 whitespace-nowrap">{item.total}</td>
                    <td className="data-cell py-3 whitespace-nowrap">{item.status}</td>
                    <td className="data-cell py-3 whitespace-nowrap"><a className="font-medium text-[#E6992A]">View Details</a></td>
                    {/* Add more table data as needed */}
                  </tr>
                ))}
              </tbody>
            </table>
            </div>
            <div className="pagination-buttons flex justify-center pt-8">
              <button
                onClick={handlePrevPage}
                disabled={currentPage <= 1}
                className="pagination-button px-3"
              >
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="36" height="36" rx="18" fill="#F2F2F2"/>
                    <path d="M20.9167 12.1668L15.0834 18.0002L20.9167 23.8335" stroke="#B3B3B3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>

              </button>
              {Array.from({ length: totalPages }, (_, index) => (
                <button
                  key={index + 1}
                  onClick={() => handlePageChange(index + 1)}
                  className={`pagination-button  text-[#666666] rounded-full px-3.5 py-1.5 ${
                    index + 1 === currentPage ? "selected bg-[#E6992A] text-white" : ""
                  }`}
                >
                  {index + 1}
                </button>
              ))}
              <button
                onClick={handleNextPage}
                disabled={currentPage >= totalPages}
                className="pagination-button px-3 rounded-full border-1 border-red-900"
              >
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="-0.5" y="0.5" width="35" height="35" rx="17.5" transform="matrix(-1 0 0 1 35 0)" fill={` ${currentPage >= totalPages ? "#F2F2F2" : "white"}`}/>
                <rect x="-0.5" y="0.5" width="35" height="35" rx="17.5" transform="matrix(-1 0 0 1 35 0)" stroke="#E6E6E6"/>
                <path d="M15.0833 12.1668L20.9166 18.0002L15.0833 23.8335" stroke="#1A1A1A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>


              </button>
            </div>
      </div>
    </div>

    </section>
  );
};

export default OrderHistory;
