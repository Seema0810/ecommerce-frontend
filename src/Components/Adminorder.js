import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import { API_BASE_URL } from '../config';
import axios from "axios";
import "../Css/adminorder.css";


const Adminorder = () => {
    const [orders, setOrders]= useState([]);

    const token = localStorage.getItem("token");
    console.log("token is ", token);
    // console.log("product quantity is ", addProducts);
    const headers = {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    };
// calling the get request to show the order history of the customer
    const getOrderHistory = async () => {
        const res = await axios.get(`${API_BASE_URL}/api/order`, { headers });
        console.log("order history of customer is", res.data);
        if (res.status === 200) {
         
          setOrders(res.data);
     
          console.log("order details is", res.data);
        }
      };
      useEffect(() => {
        getOrderHistory();
      }, []);

  return (
    <> 
    <h1 className='text-center' style={{marginTop:"5rem"}}>Adminorder</h1>
    <div className="container">
        <div className="row bg-dark order-row-style" style={{height:"3rem"}}>
          <div className="col-md-3 col-3 text-center fs-2 order-row-design">#Order Id</div>
          <div className="col-md-3 col-3 text-center fs-2 order-row-design">#Customer Id</div>
          <div className="col-md-3 col-3 text-center fs-2 order-row-design">Order Info</div>
          <div className="col-md-3 col-3 text-center fs-2 order-row-design">Order Price</div>
        </div>
        {orders.map((order, index) => {
          return (
            <div className="row mt-2" key={index}>
              <div className="col-md-3 col-3 text-center order-id-font-size order-row-design">#{order._id}</div>
              <div className="col-md-3 col-3 text-center order-id-font-size order-row-design">{order.customerId}</div>
              {order.products.map((product) => (
                <div className="col-md-3 col-3 text-center order-row-design" key={product._id}>
                  <img
                    src={product.productRef.image}
                    className="image-responsive"
                    alt={product.name}
                    style={{ width: "8vw", height: "20vh" }}
                  />
                  <p>{product.productRef.title}</p>
                </div>
              ))}

              <div className="col-md-3 col-3  text-center order-row-design">${order.amount}</div>
            </div>
          );
        })}
       
        
               
      </div>
       

 
    </>
  )
}

export default Adminorder

