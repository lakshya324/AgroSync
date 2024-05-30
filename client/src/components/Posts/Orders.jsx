import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import newRequest from "../../utils/newRequest";

function Orders() {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const navigate = useNavigate();
  const { isLoading, error, data } = useQuery({
    queryKey: ["orders"],
    queryFn: () =>
      newRequest.get(`/orders`).then((res) => {
        return res.data;
      }),
  });
  console.log("isLoading:", isLoading);
console.log("error:", error);
console.log("data:", data);

      return (
        <div className="flex flex-wrap pt-16 px-12 justify-center bg-white ">
          {isLoading ? (
        "loading"
      ) : error ? (
        "error"
      ) : (
            <div className="w-full pt-12">
            <div className="flex fle justify-between">
              <h1 className="text-3xl mb-5 font-bold">Orders</h1>
            </div>
            <table className='w-full'>
              <tr className="h-12">
                <th className='text-left'>Image</th>
                <th className='text-left'>Title</th>
                <th className='text-left'>Price</th>
                {<th className='text-left'>{currentUser.isSeller ? "Buyer" : "Seller"}</th>}
              </tr>
              {data.map((order) => (
              <tr key={order._id} className="h-12" >
                <td>
                  <img
                    className="w-12  h-6 object-cover"
                    src={order.img}
                    alt=""
                  />
                </td>
                <td className="px-3">{order.title}</td>
                <td>{order.price}</td>
                <td>{order.buyerName}</td>
              </tr>
              ))}
              
            </table>
          </div>)}
        </div>
  );
}

export default Orders
