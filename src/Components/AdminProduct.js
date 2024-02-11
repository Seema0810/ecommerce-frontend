import React from "react";
import { Container, Col, Row, Card, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { API_BASE_URL } from "../config";
import "../Css/adminproduct.css";

const AdminProduct = () => {
  const [products, setProducts] = useState([]);
  const token = localStorage.getItem("token");
  // const isAdmin=localStorage.getItem("")
  const getAllProducts = async () => {
    try {
      const res = await axios.get(`${API_BASE_URL}/seedProducts`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      });
      const result = res.data; // Access data directly from the Axios response
      console.log("Result is", result);
      setProducts(result);
    } catch (error) {
      console.log("Data not found or URL is incorrect");
    }
  };
  useEffect(() => {
    getAllProducts();
  }, []);

  const handleDelete = async (productId) => {
    try {
      const res = await axios.delete(
        `${API_BASE_URL}/deleteproduct/${productId}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
          },
        }
      );
      if (res.status === 200) {
        console.log("product is deleted successfully", res);
        getAllProducts();
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Link to="/productinfo">
        <Button
          style={{
            marginTop: "8rem",
            marginLeft: "68rem",
            position: "fixed",
            width: "8.5rem",
            borderTopLeftRadius: "5rem",
          }}
          variant="dark"
          className="btn-md admin-btn-add"
        >
          Add Product
        </Button>
      </Link>
      <Link to="/adminorder">
        <Button
          style={{
            marginTop: "15rem",
            marginLeft: "68rem",
            position: "fixed",
            width: "8.5rem",
            borderTopLeftRadius: "5rem",
          }}
          variant="dark"
          className="btn-md admin-btn-view"
        >
          View Orders
        </Button>
      </Link>
      <Container>
        <Row className="mt-5">
         
            <h2 className="mt-5">Product Information:</h2>
            {products.map((product) => {
              return (
                <Col md={10} xs={12} className="mx-5 admin-product-margin">
                <Card className="mt-3 admin-card" key={product._id}>
                  <Card.Body>
                    <Row>
                      <Col md={6} xs={12} className="d-inline-flex">
                        <img
                          src={product.image.startsWith('http') ? product.image : `${API_BASE_URL}${product.image}`}
                          className="border border-2 p-2 img-fluid rounded admin-product-image"
                          style={{ height: "8rem", width: "8rem" }}
                          alt=""
                        />
                        <a
                          href="/"
                          //   style={{ fontSize: "13px" }}
                          className="mt-5 mx-3 fs-6"
                        >
                          <b>{product.title.slice(0,20)}</b>
                        </a>
                      </Col>

                      <Col md={1} xs={12} className="d-inline-flex admin-product-margin mx-4 ">
                        <span className=" admin-product-price m-2 fs-3 mt-5">${product.price}</span>
                      </Col>
                      <Col md={3} xs={12} className="mx-5">
                        <button
                          className="btn btn-danger border-0  mt-5 float-end rounded-end-circle admin-delete-btn"
                          onClick={() => handleDelete(product._id)}
                        >
                          <i class="fa-solid fa-trash"></i>
                        </button>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
                </Col>
              );
            })}
          
        </Row>
        <p className="text-center m-5 text-secondary">
          <b>All rights reserved</b>
        </p>
      </Container>
    </>
  );
};

export default AdminProduct;
