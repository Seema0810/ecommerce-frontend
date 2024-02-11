import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import { API_BASE_URL } from "../config";
import axios from "axios";
import "../Css/orderhistory.css";

const Orderhistory = () => {
  const [orders, setOrders] = useState([]);

  const token = localStorage.getItem("token");
  console.log("token is ", token);
  // console.log("product quantity is ", addProducts);
  const headers = {
    "Content-Type": "application/json",
    Authorization: "Bearer " + token,
  };
  // calling the get request to show the order history of the customer
  const getOrderHistory = async () => {
    try {
      const res = await axios.get(`${API_BASE_URL}/api/order/custId`, {
        headers,
      });
      console.log("order history of customer is", res.data);
      if (res.status === 200) {
        setOrders(res.data);

        console.log("order details is", res.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getOrderHistory();
  }, []);

  return (
    <>
      <h1 className="text-center" style={{ marginTop: "5rem" }}>
        Orders by me{" "}
      </h1>
      <div className="container">
        <div className="row bg-dark order-row-style" style={{height:"3rem"}}>
          <div className="col-4  text-center fs-2 order-row-design">#Order Id</div>
          <div className="col-4  text-center fs-2 order-row-design">Order Info</div>
          <div className="col-4  text-center fs-2 order-row-design">Order Price</div>
        </div>
        {orders.map((order, index) => {
          return (
            <div className="row mt-2" key={index}>
              <div className="col-4  text-center order-id-font-size order-row-design">#{order._id}</div>
              {order.products.map((product) => (
                <div className="col-4 text-center order-row-design" key={product._id}>
                  <img
                    src={product.productRef.image}
                    className="image-responsive"
                    alt={product.name}
                    style={{ width: "8vw", height: "20vh" }}
                  />
                  <p>{product.productRef.title}</p>
                </div>
              ))}

              <div className="col-4   text-center order-row-design">${order.amount}</div>
            </div>
          );
        })}
        {/* <Table responsive striped bordered hover className='table-responsiveness w-75 mx-auto' variant="dark" > */}
        {/* <thead >
        <tr>
          <th className='text-center'>#Order Id</th> 
          <th className='text-center'> </th>        
          {/* <th className='text-center'>Order Image</th> */}
        {/* <th className='text-center'>Order Price</th>

        </tr>
      </thead> */}
        {/* <tbody>
        {orders.map((order)=>{
            return(
                <tr key={order._id}>
                <td className='text-center'>#{order._id}</td>
                {order.products.map((product) => (
                  <div key={product._id}>
                    
                    <p className='text-white'>{product.productRef.title}</p>
                  </div>
                ))}
                {/* <td className='text-center'>womens.jpg</td> */}
        {/* <td className='text-center'>${order.amount}</td>          */}
        {/* </tr>  */}
        {/* )
        })} */}

        {/* </tbody> */}
        {/* </Table> */}
      </div>
    </>
  );
};

export default Orderhistory;
