import React, { useState } from "react";
import { API_BASE_URL } from "../config";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signup = () => {
  const [customer, setCustomer] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  const navigate = useNavigate();
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCustomer((prevCustomer) => ({
      ...prevCustomer,
      [name]: value,
    }));
  };

  const handleRegistrationSubmit = async (e) => {
    e.preventDefault();
    try {
      const headers = {
        "Content-Type": "application/json",
      };
      const res = await axios.post(`${API_BASE_URL}/signup`, JSON.stringify(customer), {headers});
      console.log("registration status", res.status);
      if (res.status === 200) {        
        toast.success("Registration successful. Please log in.");
        navigate("/login");
      }
    } catch (error) {
      console.log("registration error is", error.response);
      toast.error("Registration failed. Please try again.");
    }
  };

  return (
    <>
     
      <div className="container">
        <div className="row signup-style mt-5 ">
          <div className="col-md-5 col-xs-12 mx-auto register-background">
            <h3 className="text-center text-dark mt-5">
              <b>Register</b>
            </h3>
            <form onSubmit={handleRegistrationSubmit}>
              <div className="mb-3  login-div ">
                <input
                  type="text"
                  className="form-control sign-input rounded-5"
                  name="name"
                  placeholder="Full Name"
                  onChange={handleInputChange}
                  value={customer.name}
                />
              </div>
              <div className="mb-3  login-div ">
                <input
                  type="email"
                  className="form-control sign-input rounded-5"
                  name="email"
                  placeholder="Email"
                  onChange={handleInputChange}
                  value={customer.email}
                />
              </div>

              <div className="mb-3  login-div">
                <input
                  type="password"
                  className="form-control sign-input rounded-5 pl-5 pt-2"
                  name="password"
                  placeholder="*********"
                  onChange={handleInputChange}
                  value={customer.password}
                />
              </div>
              <div className="mb-3  login-div ">
                <input
                  type="text"
                  className="form-control sign-input rounded-5"
                  name="confirmPassword"
                  placeholder="confirmPassword"
                  onChange={handleInputChange}
                  value={customer.confirmPassword}
                />
              </div>
              <button
                type="submit"
                className="signup-button d-block rounded-5"
                              >
                Sign Up
              </button>
              <p className="mt-2 ml-5 click-here-style">
                Already registered? <a href="./Login.js">Click here</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
