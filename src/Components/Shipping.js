import React, { useState } from 'react';
import{ Button, Form }from 'react-bootstrap';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import { API_BASE_URL } from '../config';
import "../Css/form.css";

const Shipping = () => {
    const [shippingDetails, setShippingDetails]= useState({fullName:"", address:"", city:"", postalcode:"", country:""});
    const navigate= useNavigate();
    const handleChange=(e)=>{
        const { name, value } = e.target;
        setShippingDetails((prevShipping) => ({
          ...prevShipping,
          [name]: value,
        }));
        console.log("ShippingDetails", shippingDetails);
    }
    //handling the shipping submit
    const handleShippingSubmit=async(e)=>{
        e.preventDefault();
        const token= localStorage.getItem("token");
    if(!token){
      navigate('/login');
    }
    try {
         // Concatenate address components into a single string
      const fullAddress = `${shippingDetails.address}, ${shippingDetails.city}, ${shippingDetails.postalcode}, ${shippingDetails.country}`;
      const headers = {
        "Content-Type": "application/json",
        "Authorization":"Bearer "+token
      };
      const body={
        address: fullAddress,
        name:shippingDetails.fullName
      }
      const res = await axios.post(`${API_BASE_URL}/shipping`, JSON.stringify(body), {headers});
      if (res.status === 200) {
        console.log("shipping details added  successfully");
        navigate("/choosepayment");
      }
        }
        catch(error){
            console.log(error);
        }
    }
  return (
    <>    
    <h1 className='text-center' style={{marginTop:"5rem"}}>Shipping Address</h1>
<Form onSubmit={handleShippingSubmit}>
      <Form.Group className="mb-3 mt-4 w-25 mx-auto form-styling"  controlId="exampleForm.ControlInput1">
        <Form.Label><b>Full Name</b></Form.Label>
        <Form.Control type="text" placeholder="" onChange={handleChange}  name="fullName" value={shippingDetails.fullName} />
      </Form.Group>
      <Form.Group className="mb-3 mt-2 w-25 form-styling mx-auto"  controlId="exampleForm.ControlInput1">
        <Form.Label><b>Address</b></Form.Label>
        <Form.Control type="city" placeholder="" onChange={handleChange} name="address"  value={shippingDetails.address} />
      </Form.Group>
      <Form.Group className="mb-3 mt-2 w-25 form-styling mx-auto"  controlId="exampleForm.ControlInput1">
        <Form.Label><b>City</b></Form.Label>
        <Form.Control type="text" placeholder="" onChange={handleChange} name="city"   value={shippingDetails.city} />
      </Form.Group>
      <Form.Group className="mb-3 mt-2 w-25 form-styling  mx-auto"  controlId="exampleForm.ControlInput1">
        <Form.Label><b>Postal Code</b></Form.Label>
        <Form.Control type="number" placeholder="" onChange={handleChange} name="postalcode"  value={shippingDetails.postalcode}/>
      </Form.Group>
      <Form.Group className="mb-3 mt-2 w-25 form-styling mx-auto"  controlId="exampleForm.ControlInput1">
        <Form.Label><b>Country</b></Form.Label>
        <Form.Control type="text" placeholder="" onChange={handleChange} name="country"  value={shippingDetails.country}/>
      </Form.Group>
      <p className='text-center text-dark'>Choose location on map</p>
      <Button type="submit" style={{marginLeft:"38%"}} className='mb-3' variant="warning">Continue</Button>{' '}    
    </Form>
 
   
    </>
  )
}

export default Shipping