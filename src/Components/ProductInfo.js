import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { API_BASE_URL } from '../config';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "../Css/productinfo.css"

const ProductInfo = () => {
  const [newProduct, setNewProduct]= useState({
    pname:"",
    pprice:"",
    pdescription:"",
    file:""
  });
  const navigate= useNavigate();

  const token = localStorage.getItem("token");
  const headers = {
    "Content-Type": "multipart/form-data",
    Authorization: "Bearer " + token,
  };

  const handleProductChange = (e) => {
    const { name, value } = e.target;
    setNewProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };
  const handleFileUpload=(e)=>{
    const file = e.target.files[0];
    setNewProduct((prevProduct) => ({ ...prevProduct, file:file }));
   }


  const handleProductSubmit=async(e)=>{

    e.preventDefault();
    console.log("added new product is ", newProduct);
    try{  
            
      let body= new FormData()
      body.append("title",newProduct.pname);
      body.append("price",newProduct.pprice);
      body.append("description",newProduct.pdescription);
    
      body.append("file", newProduct.file);
      console.log("body of product is ", body);
  
  //     let formData = new FormData();
  // formData.append("file", "file");
      // const body=newProduct;
      await axios.post(`${API_BASE_URL}/addproduct`,body, {headers});
      navigate('/adminproduct'); 
      
    }catch(error){
      console.log(error);
    }

  }

  

  return (
    <>
    <h1 className='text-center bg-black text-white' style={{marginTop:"6rem"}}>Add Product Information</h1>
     <Form className=' mx-auto  w-25 admin-product-info ' encType="multipart/form-data" onSubmit={handleProductSubmit}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Product Name:</Form.Label>
        <Form.Control type="text" placeholder="enter product name" name="pname" value={newProduct.pname} onChange={handleProductChange} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Product Price:</Form.Label>
        <Form.Control type="text" placeholder="enter product Price" name="pprice"  value={newProduct.pprice} onChange={handleProductChange}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Product Description</Form.Label>
        <Form.Control as="textarea" rows={3} name="pdescription" value={newProduct.pdescription}  onChange={handleProductChange} />
      </Form.Group>
      <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>Product Image:</Form.Label>
        <Form.Control type="file" onChange={handleFileUpload} name="file" />
      </Form.Group>
      <Button
          type="submit"
          variant="dark"
          className="btn-md mb-3"
        >
          Add Product
        </Button>
    </Form>
    </>
  )
}

export default ProductInfo;