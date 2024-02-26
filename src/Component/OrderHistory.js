import React, { useState, useEffect , useContext } from 'react';
import axios from 'axios';
import Navigation_Bar from "./Navigation_Bar";
import '../CSS/Order_detail.css';
import { Link } from "react-router-dom";
import { UserContext } from '../App';


const OrderHistory = () => {
  const user_data = useContext(UserContext);
  console.log("user Data" ,user_data)
  const { useState, useEffect } = React;
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  useEffect(() => {


    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
       try {
          const response = await fetch('http://192.168.2.134:8000/api/order/');
          const response_data = await response.json();
          const filteredData = response_data.filter(item => {

            return item.user == 1;
         });

          setData(filteredData);
         console.log(filteredData);
       } catch (error) {
          console.error('Error fetching data:', error);
       }
    };

    fetchData();
 }, []);

  // const [data, setData] = useState([]);
  // const [currentPage, setCurrentPage] = useState(1);
  // const itemsPerPage = 1; // Number of items per page
  // const [loading, setLoading] = useState(true);

  const products = [
    {
      order_id: "738",
      date: "8 Sep, 2020",
      total_products: "$135.00 (5 Products)",
      status: "Processing",
    },
    {
      order_id: "#703",
      date: "24 May, 2020",
      total_products: "$25.00 (1 Product)",
      status: "On the way",
    },
    {
      order_id: "#130",
      date: "22 Oct, 2020",
      total_products: "$250.00 (4 Products)",
      status: "Completed",
    },
    {
      order_id: "#561",
      date: "1 Feb, 2020",
      total_products: "$35.00 (1 Products)",
      status: "Completed",
    },
    {
      order_id: "#536",
      date: "21 Sep, 2020",
      total_products: "$578.00 (13 Products)",
      status: "Completed",
    },
    {
      order_id: "#492",
      date: "22 Oct, 2020",
      total_products: "$345.00 (7 Products)",
      status: "Completed",
    },
    {
      order_id: "#438",
      date: "8 Sep, 2020",
      total_products: "$135.00 (5 Products)",
      status: "Processing",
    },
    {
      order_id: "#346",
      date: "24 May, 2020",
      total_products: "$25.00 (1 Product)",
      status: "On the way",
    },
    {
      order_id: "#754",
      date: "22 Oct, 2020",
      total_products: "$250.00 (4 Products)",
      status: "Completed",
    },
    {
      order_id: "#345",
      date: "1 Feb, 2020",
      total_products: "$35.00 (1 Products)",
      status: "Completed",
    },
    {
      order_id: "#543",
      date: "21 Sep, 2020",
      total_products: "$578.00 (13 Products)",
      status: "Completed",
    },
    {
      order_id: "#236",
      date: "22 Oct, 2020",
      total_products: "$345.00 (7 Products)",
      status: "Completed",
    }

  ];

  
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5; // Number of items per page
  const [loading, setLoading] = useState(true);

  const totalPages = Math.ceil(data.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems =
  data.slice(indexOfFirstItem, indexOfLastItem);

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


  let startPage = Math.max(1, currentPage - 2);
  let endPage = Math.min(totalPages, startPage + 2);

  if (endPage - startPage < 2) {
    startPage = Math.max(1, totalPages - 2);
    endPage = totalPages;
  }

  return (
    <>
      <section className='container-1'>
        {/* breadcrumbs */}
        <div id='breadcrumbs' className='lg:h-[62px] h-11 w-full flex items-center gap-[10px]'>
          <div className='flex items-center'>
            <div>
              <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.875 15.2498V11.4998C9.875 11.334 9.80915 11.1751 9.69194 11.0579C9.57473 10.9406 9.41576 10.8748 9.25 10.8748H6.75C6.58424 10.8748 6.42527 10.9406 6.30806 11.0579C6.19085 11.1751 6.125 11.334 6.125 11.4998V15.2498C6.125 15.4156 6.05915 15.5745 5.94194 15.6917C5.82473 15.809 5.66576 15.8748 5.5 15.8748H1.75C1.58424 15.8748 1.42527 15.809 1.30806 15.6917C1.19085 15.5745 1.125 15.4156 1.125 15.2498V8.02324C1.1264 7.93674 1.14509 7.8514 1.17998 7.77224C1.21486 7.69308 1.26523 7.6217 1.32812 7.5623L7.57812 1.88261C7.69334 1.77721 7.84384 1.71875 8 1.71875C8.15616 1.71875 8.30666 1.77721 8.42187 1.88261L14.6719 7.5623C14.7348 7.6217 14.7851 7.69308 14.82 7.77224C14.8549 7.8514 14.8736 7.93674 14.875 8.02324V15.2498C14.875 15.4156 14.8092 15.5745 14.6919 15.6917C14.5747 15.809 14.4158 15.8748 14.25 15.8748H10.5C10.3342 15.8748 10.1753 15.809 10.0581 15.6917C9.94085 15.5745 9.875 15.4156 9.875 15.2498Z" stroke="#5F6C72" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div className='pl-2 pt-[3px]'>
              <Link to="/">
                <p className='text-[#5F6C72] text-base'>Home</p>
              </Link>
            </div>
          </div>
          <div className='pt-1'>
            <svg width="10" height="12" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.5 1.25L5.25 5L1.5 8.75" stroke="#77878F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div className='pt-1'>
            <p className='text-[#E6992A] font-medium text-base'>Order History</p>
          </div>
        </div>
      </section>
      <section className="sm:my-5 my-5  flex ssm:flex-row flex-col lg:gap-6 gap-4 container-1">
        {screenWidth >= 1024 ? <Navigation_Bar /> : null}
        <div className="overflow-x-hidden w-full">
          <div className="border-2 border-[#E6E6E6] rounded-md   pb-14 ">
            <h2 className="text-xl font-medium leading-7 text-[#1A1A1A] px-[20px] py-1.5 ">
              Order History
            </h2>
            <div className='overflow-x-auto order-history'>
              <table className="data-table  w-full">
                <thead className="bg-[#F2F2F2]">
                  <tr className="text-[#4D4D4D]">
                    <th className="column-header py-3 px-[24px] pl-[24px] text-start">ORDER ID</th>
                    <th className="column-header py-3 px-[24px] text-start">DATE</th>
                    <th className="column-header py-3 px-[24px] text-start">TOTAL</th>
                    <th className="column-header py-3 px-[24px] text-start">STATUS</th>
                    <th className="column-header py-3 px-[24px] text-start "> <span className='hidden'>View</span></th>
                    {/* Add more table headers as needed */}
                  </tr>
                </thead>
                <tbody>
                  {currentItems.map((item) => (
                    <tr key={item.id} className="data-row text-sm text-[#333333]">
                      <td className="data-cell py-3 xl:px-[24px] pr-[64px] pl-[24px] whitespace-nowrap">{item.number}</td>
                      <td className="data-cell py-3 px-[24px] whitespace-nowrap">{item.date_placed}</td>
                      <td className="data-cell py-3 px-[24px] whitespace-nowrap">{item.total_products}</td>
                      <td className="data-cell py-3 px-[24px] whitespace-nowrap">{item.status}</td>
                      <td className="data-cell py-3 px-[24px] whitespace-nowrap"><a className="font-medium text-[#E6992A]"><Link to={`/order-detail/${item.number}`}>View Details</Link></a></td>
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
                className="pagination-button px-3 rounded-full border-1 border-red-900"
              >
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="36" height="36" rx="18" fill={`${currentPage <= 1 ? "#F2F2F2" : "white"}`} />
                  <rect x="-0.5" y="0.5" width="35" height="35" rx="17.5" transform="matrix(-1 0 0 1 35 0)" stroke="#E6E6E6" />
                  <path d="M20.9167 12.1668L15.0834 18.0002L20.9167 23.8335" stroke={` ${currentPage <= 1 ? "#B3B3B3" : "#1A1A1A"}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </button>
              {/* Render pagination buttons */}
              {Array.from({ length: endPage - startPage + 1 }, (_, index) => (
                <button
                  key={startPage + index}
                  onClick={() => handlePageChange(startPage + index)}
                  className={`pagination-button  text-[#666666] rounded-full px-3.5 py-1.5 ${startPage + index === currentPage ? "selected bg-[#E6992A] text-white" : ""
                    }`}
                >
                  {startPage + index}
                </button>
              ))}
              <button
                onClick={handleNextPage}
                disabled={currentPage >= totalPages}
                className="pagination-button px-3 rounded-full border-1 border-red-900"
              >
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="-0.5" y="0.5" width="35" height="35" rx="17.5" transform="matrix(-1 0 0 1 35 0)" fill={` ${currentPage >= totalPages ? "#F2F2F2" : "white"}`} />
                  <rect x="-0.5" y="0.5" width="35" height="35" rx="17.5" transform="matrix(-1 0 0 1 35 0)" stroke="#E6E6E6" />
                  <path d="M15.0833 12.1668L20.9166 18.0002L15.0833 23.8335" stroke={` ${currentPage >= totalPages ? "#B3B3B3" : "#1A1A1A"}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>

              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OrderHistory;
