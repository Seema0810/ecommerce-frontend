import React, { useState, useEffect } from "react";
import { Container, Col, Row, Card, Button} from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import { API_BASE_URL } from "../config";
// import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { useSelector, useDispatch } from "react-redux";
import { UPDATE_CART } from "../redux/actions/types";
import PaypalPayment from "./PaypalPayment";
import "../Css/order.css"

const Order = () => {
  const dispatch = useDispatch();
  
  const [shippingData, setShippingData] = useState("");
  const [addProducts, setAddProducts] = useState([]);
  const token = localStorage.getItem("token");
  const headers = {
    "Content-Type": "application/json",
    Authorization: "Bearer " + token,
  };


  const getShippingDetails = async () => {
    const headers = {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    };
    try {
      const res = await axios.get(`${API_BASE_URL}/shipping`, { headers });
      console.log("shipping response is", res);
      if (res.status === 200) {
        setShippingData(res.data);
        console.log("shipping details are", shippingData);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getShippingDetails();
  }, []);



  const orderItems = useSelector((state) => state.cart.cartItems);
  console.log("orderIems on orderPage", orderItems);

  //getting the total amount of all product
  const getTotalAmount = () => {
    return orderItems
      .reduce((total, product) => {
        return total + product.productRef.price * product.quantity;
      }, 0)
      .toFixed(2);
  };
 
  // calculating the total amount
  const orderAmount = getTotalAmount();
  console.log("orderAmount",orderAmount, typeof(orderAmount));
  const totalOrderAmount = parseFloat(orderAmount) + (18 / 100) * parseFloat(orderAmount);

  return (
    <>
      <Container>
        <Row style={{ marginTop: "50px" }}>
          <Col md={8} xs={12}>
            <h2 className="mt-5">Preview Order</h2>
            <Col md={8} xs={12}>
            <Card className="card-order">
              <Card.Body>
                <h5>
                  <b>Shipping</b>
                </h5>
                <p style={{ lineHeight: "0.7" }}>
                  <b>Name:</b>
                  {shippingData.name}
                </p>
                <p style={{ lineHeight: "0.9" }}>
                  <b>Address:</b>
                  {shippingData.address}
                </p>
                <a href="/">Edit</a>
              </Card.Body>
            </Card>
            </Col>
            <Col md={8} xs={12}>
            <Card className="mt-3">
              <Card.Body>
                <h5>
                  <b>Payment</b>
                </h5>
                <p style={{ lineHeight: "0.8" }}>
                  <b>Method:</b>Paypal
                </p>
                <a href="/">Edit</a>
              </Card.Body>
            </Card>
            </Col>
            {orderItems.map((item, index) => (
               <Col md={8} xs={12}  key={index}>
              <Card className="mt-3 card-order">
                <Card.Body>
                  <h5>
                    <b>Items</b>
                  </h5>
                  {/* Assuming orderItem is an array, use map to iterate over its items */}
                
                    <div >
                      <img
                        src={item.productRef.image}
                        className="border border-2 p-2 img-fluid"
                        style={{ height: "5.5rem", width: "4.5rem" }}
                        alt="Product Image"
                      />
                      <span className="mx-2">
                        <a href="/">{item.productRef.title.slice(0, 20)}</a>
                      </span>
                      <span style={{ marginLeft: "5rem" }}>
                        {item.quantity}
                      </span>
                      <span style={{ marginLeft: "5rem" }}>
                        ${item.productRef.price}
                      </span>
                    </div>
                
                </Card.Body>
              </Card>
              </Col>
            ))}
          </Col>
          <Col md={4} xs={12}>
            <Card className="mt-5">
              <Card.Body>
                <p>
                  <b>Order Summary</b>
                </p>
                <hr />
                <p>
                  <span>Amount</span>
                  <span style={{ marginLeft: "6rem" }}>${orderAmount}</span>
                </p>
                <hr />
                <p>
                  <span>tax</span>
                  <span style={{ marginLeft: "7rem" }}>
                    ${((18 / 100) * orderAmount).toFixed(2)}
                  </span>
                </p>
                <hr />
                <p>
                  <span>Shipping</span>
                  <span style={{ marginLeft: "5rem" }}>0</span>
                </p>
                <hr />
                <p>
                  <span>
                    <b>Order Total:</b>
                  </span>
                  <span style={{ marginLeft: "4rem" }}>
                    <b>${totalOrderAmount}</b>
                  </span>
                </p>
              </Card.Body>   
              <Button className="paypal-button">        
                  <PaypalPayment orderItems= {orderItems}  />
                  </Button>  
           
            </Card>
          </Col>
        </Row>
        <p className="text-center m-5 text-secondary">
          <b>All rights reserved</b>
        </p>
      </Container>
    </>
  );
};

export default Order;
