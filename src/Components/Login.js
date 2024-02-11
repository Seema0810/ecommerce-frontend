import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import {Link, useNavigate } from 'react-router-dom';
import { API_BASE_URL } from '../config';


const Login = () => {
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [name]: value,
    }));
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      const headers = {
        'Content-Type': 'application/json'
      }
      const response = await axios.post(`${API_BASE_URL}/login`, JSON.stringify(credentials), {
        headers: headers,
      });
      if (response.status === 200) {
        console.log('Login successful', response.data);
      localStorage.setItem("token", response.data.result.token);
        const isAdmin= response.data.result.Customer.isAdmin;
        console.log("value of isAdmin", isAdmin);
        if(isAdmin){
          navigate('/adminproduct');
        }else        
        {
          navigate('/cart');
        }
      }
    } catch (error) {
      console.error('Login error:', error.response);
     
    }
  };
  return (
    <> 
    <div className="container-fluid  ">
    <div className="row justify-content-center">
      <div className="col-lg-4 col-sm-8 margin-form">
        <h1 className="text-center  h1-login-form" style={{color:"Black", marginTop:'5rem' }}>Login</h1>
        <form className="form-width rounded p-3 mt-2" onSubmit={handleLoginSubmit} name="myForm" 
        style={{backgroundColor: "rgb(79, 61, 61)",  boxShadow: "10px 10px 10px #111010"}}>
          <div className="mb-3">
            <label htmlor="exampleInputEmail1" className="form-label text-light">
              <b>E-mail: </b>
              </label>
            {/* <!-- used bootstrap classes to change the border --> */}
            <input
              type="email"
              className="form-control border-warning rounded-5 border-3"
              id="E-mail"
              name="email"
              aria-describedby="emailHelp"
              placeholder="Enter your E-mail"
              required
              onChange={handleInputChange} 
              value={credentials.email}
            />
            <div className="text-danger form-error"><b></b></div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label text-light"
              ><b>Password:</b></label>
            {/* <!-- given minlength Property for the password --> */}
            <input
              type="password"
              className="form-control border-warning rounded-5 border-3"
              id="password"
              name="password"
              placeholder="Password "
              minLength="8"
              required
              onChange={handleInputChange} 
              value={credentials.password}

            />
            <div className="text-danger"><b></b></div>
          </div>
          <div>
            <button type="submit" className="btn btn-primary btn-sm border border-2" value="Submit">
              Submit
            </button>
          </div>
          <p className='text-white mt-2'>New Customer? <Link to ="/signup">Create your account</Link></p>
        </form>
       <p className='text-center mt-5'><b>All rights reserved</b></p>
      </div>
    </div>
  </div>
  </>
  )
}

export default Login;