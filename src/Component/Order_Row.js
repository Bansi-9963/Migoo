import React from "react";
import { Link } from "react-router-dom";


const Order_Row = () => {
  let selected_id;
  const handleClick = (orderr_id) => {
    selected_id = order_array.filter( (order) => order.order_id === orderr_id );
    console.log("id" ,selected_id); 
  }
  const order_array = [
    { 
      order_id: "#738",
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
    }
  ];

  return (
    <>
      {/* {order_array.map((order) => {
        return (
          <tr className=" flex  2xl:h-[45px] items-center" key={order.order_id}>
            <td className="2xl:w-[194px] p-0 text-sm font-normal leading-[21px] text-[#333]">
              {order.order_id}
            </td>
            <td className="2xl:w-[190px] p-0 text-sm font-normal leading-[21px] text-[#333]">
              {order.date}
            </td>
            <td className="2xl:w-[215px] p-0 text-sm font-normal leading-[21px] text-[#333]">
              {order.total_products}
            </td>
            <td className="2xl:w-[252px] p-0 text-sm font-normal leading-[21px] text-[#333]">
              {order.status}
            </td>
            <td className="text-sm font-medium text-[#E6992A] cursor-pointer leading-[21px]" onClick={() => handleClick(order.order_id)}>
              View Details
            </td>
          </tr>
        );
      })} */}
      {order_array.map((order) => (
                  <tr key={order.order_id} className="data-row text-sm text-[#333333]">
                    <td className="data-cell py-3 xl:px-[24px] pr-[64px] pl-[24px] whitespace-nowrap">{order.order_id}</td>
                    <td className="data-cell py-3 px-[24px] whitespace-nowrap">{order.date}</td>
                    <td className="data-cell py-3 px-[24px] whitespace-nowrap">{order.total_products}</td>
                    <td className="data-cell py-3 px-[24px] whitespace-nowrap">{order.status}</td>
                    {/* <td className="data-cell py-3 whitespace-nowrap font-medium text-[#E6992A] text-end  " onClick={() => handleClick(order.order_id)}>View Details</td> */}
                    <td className="data-cell py-3 px-[24px] whitespace-nowrap font-medium text-[#E6992A] text-center  " ><Link to={`/order-detail/${order.order_id}`}>View Details</Link></td>
                   
                  </tr>
                ))}
    </>
  );
};

export default Order_Row;
