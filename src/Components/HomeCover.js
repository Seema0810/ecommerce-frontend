import React from 'react';
import "../Css/home.css";

const HomeCover = () => {
  return (
    <>
      {/* <!-- carousel for home image started --> */}
    <div
      id="carouselExampleAutoplaying"
      className="carousel slide"
      data-bs-ride="carousel"
      
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="https://imgfast.net/wp-content/uploads/2019/07/ecommerce-shopping.jpeg"
            className="d-block w-100 carousel-image"
            style={{height: "30rem"}}
            alt="..."
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://i0.wp.com/www.opencircle.co.za/wp-content/uploads/2018/03/ecommerce-marketing.jpg?resize=1080%2C675&quality=99&strip=all&ssl=1"
            className="d-block w-100 carousel-image"
            style={{height: "30rem"}}
            alt="..."
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://hitusupdesigns.com/wp-content/uploads/2018/05/Clothing-Store.jpg"
            className="d-block w-100 carousel-image"
            style={{height: "30rem"}}
            alt="..."
          />
        </div>
      </div>
    </div>
    <div className="div-text">
      <p className="businice-logo">Businice! Keep Shopping</p>

      <div className="text-center fs-4 fst-italic fw-bold text-light">
        Fashion thats fits you well
      </div>
    </div>

    {/* <!-- carousel for home image ended --> */}
    </>
  )
}

export default HomeCover