// import { PayPalButtons } from '@paypal/react-paypal-js';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import React, { useState } from "react";
import { API_BASE_URL } from "../config";
// import { useState } from 'react';
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { CLEAR_CART } from "../redux/actions/types";
import { useDispatch } from "react-redux";
import "react-toastify/dist/ReactToastify.css";

const PaypalPayment = ({ orderItems }) => {
  const navigate = useNavigate();
  const dispatch= useDispatch();

  // Construct the cart array dynamically based on the actual items in the user's cart
  const products = orderItems;

  //getting the total amount of all product
  const getTotalAmount = () => {
    return products
      .reduce((total, product) => {
        return total + product.productRef.price * product.quantity;
      }, 0)
      .toFixed(2);
  };

  // calculating the total amount
  const orderAmount = getTotalAmount();

  const totalAmount =
    parseFloat(orderAmount) + (18 / 100) * parseFloat(orderAmount);

  const handleApprove = async (paymentId) => {
    const token = localStorage.getItem("token");
    console.log("token is ", token);
    const body = {
      products,
      paymentId: paymentId,
      amount: totalAmount,
    };

    const headers = {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    };
    //calling backend server function to fulfil the order

    try {
      const res = await axios.post(`${API_BASE_URL}/api/createorder`, body, {
        headers,
      });
      console.log("response is" , res.data);
      if (res.status === 200) {
        console.log("response on paypal payment");
        dispatch({ type: CLEAR_CART }); // Dispatch the clearCart action here
        //display the success message       
        navigate("/");  
        toast.success("thank you for your purchase");     
       
       
      }
    } catch (error) {
      console.error("Error capturing order:", error);
      // Handle error (e.g., show an error message to the user)
    }
    //refresh user's account and the subscription status

   
  };
  return (
    <>
      {console.log("paypay payment", products)}

      <PayPalScriptProvider
        options={{ clientId: process.env.REACT_APP_PAYPAL_CLIENT_ID }}
      >
        <PayPalButtons
          createOrder={(data, actions) => {
            console.log("paypay payment0", products);
            return actions.order.create({
              purchase_units: products.map((item) => ({
                description: item.productRef.title,
                amount: {
                  currency_code: "USD",
                  value: (item.quantity * item.productRef.price).toFixed(2),
                },
              })),
            });
          }}
          onApprove={async (data, actions) => {
            const order = await actions.order.capture();
            console.log("order", order);

            handleApprove(data.orderID);
          }}
        />
      </PayPalScriptProvider>
    </>
  );
};

export default PaypalPayment;
