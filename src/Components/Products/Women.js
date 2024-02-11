import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { API_BASE_URL } from "../../config";

const Women = () => {
  const [products, setProducts] = useState([]);

  const getAllProducts = async () => {
    try {
      const res = await axios.get(`${API_BASE_URL}/seedProducts`, {
        headers: {
          "Content-Type": "application/json",
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

  return (
   
    <div>

      {" "}
    
      <div
        className="bg-light container-fluid product-page-m"
        style={{ marginTop: "5rem" }}
      >
        <h1 className="text-center">Women-All Products</h1>
        <div className="row">
          {products.map((product) => (
            <div className="col-lg-3 col-md-4 col-sm-12" key={product._id}>
              <Link to={`/singleproduct/${product._id}`}>
                <div className="card m-lg-2 text-center card-products">
                  <img src={product.image} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h6 className="card-title text-center text-primary">
                      {product.title}
                    </h6>
                    <div className="card-text">
                      <p>
                        {" "}
                        <i class="fa-solid fa-star text-warning"></i>
                        <i class="fa-solid fa-star text-warning"></i>
                        <i class="fa-solid fa-star text-warning"></i>
                        <i class="fa-solid fa-star text-warning"></i>
                        <i class="fa-solid fa-star text-warning"></i>
                        <span className="text-danger mx-1">5.3 reviews</span>
                      </p>
                      <p className="float-start ">
                        <b>${product.price}</b>
                      </p>
                      <br />
                      <p className="float-start d-block">
                        {product.description.slice(0, 50)}...
                      </p>
                    </div>
                    <a href="/" className="btn cart-btn">
                      <i className="fa-solid fa-cart-shopping m-1"></i>Add to
                      Cart
                    </a>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
      Women
    </div>
  );
};

export default Women;
