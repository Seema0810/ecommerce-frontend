import React, { useState, useEffect } from "react";
import axios from "axios";
import { ListGroup, Card, Button, Row, Col } from "react-bootstrap";
import "../Css/singleproduct.css";
import Review from "./Review";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { API_BASE_URL } from "../config";
import { useParams, Link, useNavigate } from "react-router-dom";

const SingleProduct = () => {
  const quantity = 1;
  const { productId } = useParams(); //allows you to access the parameters of the current route
  // console.log("product Id is", productId )

  console.log(`product Id is ${productId}`);
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();

  const handleAddToCart = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        navigate("/login");
      }
      const headers = {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
      };
      const body = {
        productRef: productId,
        quantity: quantity,
      };
      console.log("Cart Button clicked");
      const res = await axios.post(
        `${API_BASE_URL}/api/cart`,
        JSON.stringify(body),
        { headers }
      );
      console.log("response of cart is", res);
      if (res.status === 200) {
        navigate("/cart");
        toast.success("Item is added in the cart successfully");
      }
    } catch (error) {
      console.log("post request failed");
    }
  };
  const fetchProductDetails = async () => {
    console.log("i am called");
    try {
      const response = await axios.get(`${API_BASE_URL}/product/${productId}`);
      console.log("response is", response);
      setProduct(response.data);
    } catch (error) {
      console.error("Error fetching product details:", error);
    }
  };
  useEffect(() => {
    fetchProductDetails();
  }, [productId]);

  return (
    <>
      <div className="container" style={{ marginTop: "5rem" }}>
        {product && (
          <div className="row">
            <div className="col-md-4 col-xs-12 ">
              <img
                src={product.image}
                style={{ height: "30vw", width: "25vw" }}
                alt=""
                className="mt-4"
              />
            </div>
            <div className="col-md-3 col-xs-12  ">
              <h3 className="mt-5">{product.title}</h3>
              <ListGroup>
                <ListGroup.Item className="border-0 border-3 border-bottom">
                  <i class="fa-solid fa-star text-warning"></i>
                  <i class="fa-solid fa-star text-warning"></i>
                  <i class="fa-solid fa-star text-warning"></i>
                  <i class="fa-solid fa-star text-warning"></i>
                  <i class="fa-solid fa-star text-warning"></i>
                  <span className="mx-2">5.3 rating</span>
                </ListGroup.Item>

                <ListGroup.Item className=" border-0 border-3 border-bottom">
                  Price: ${product.price}
                </ListGroup.Item>

                <ListGroup.Item className=" border-0 border-3 border-bottom">
                  Description:
                  <p>{product.description.slice(0, 50)}</p>
                </ListGroup.Item>
              </ListGroup>
            </div>
            <div className="col-md-3 col-xs-12 ">
              <Card style={{ width: "18rem" }} className="mt-5 mx-3 sigleproduct-styling">
                <Card.Body>
                  <Card.Title>Seller</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    <h2>
                      <a>PUMA</a>
                    </h2>
                  </Card.Subtitle>
                  <Card.Text>
                    <i class="fa-solid fa-star text-warning"></i>
                    <i class="fa-solid fa-star text-warning"></i>
                    <i class="fa-solid fa-star text-warning"></i>
                    <i class="fa-solid fa-star text-warning"></i>
                    <i class="fa-solid fa-star text-warning"></i>
                    <span className="mx-2">10 Reviews</span>
                    <Row className="border-0 border-3 border-bottom mt-2">
                      <Col>
                        <p>Price:</p>
                      </Col>
                      <Col>
                        {" "}
                        <p>${product.price}</p>
                      </Col>
                    </Row>
                    <Row className="border-0 border-3 border-bottom mt-2">
                      <Col>
                        {" "}
                        <p>Status:</p>
                      </Col>
                      <Col>InStock</Col>
                    </Row>
                  </Card.Text>
                
                </Card.Body>
                <Card.Footer> 
                   <Button
                    variant="outline-warning"
                    size="sm"
                    className="w-50"
                    onClick={handleAddToCart}
                  >
                    Add to Cart
                  </Button></Card.Footer>
              </Card>
            </div>
          </div>
        )}
      </div>
      <Review />
    </>
  );
};

export default SingleProduct;
