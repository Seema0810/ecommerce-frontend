import React from "react";
import "../Css/footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink, faHouse, faRightToBracket, faIdCard } from "@fortawesome/free-solid-svg-icons";
// import { faLink } from "@fortawesome/free-solid-svg-icons";
// import { faTwitter, faFontAwesome, faSquareFacebook } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <>
      <div className="container-fluid bg-dark  text-white mt-5">
        <div className="row  ">
          <div className=" icons d-inline-flex justify-content-end  ">
            <a
              className=" nav-link"
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
            >
              {/* <FontAwesomeIcon icon={faSquareFacebook} /> */}
            </a>
            <a
              className="nav-link "
              href="https://www.twitter.com/"
              target="_blank"
              rel="noreferrer"
            >
              {/* <i
                className="fa-brands fa-twitter m-2 link-hover"
                style={{ fontSize: "1.5em", color: "#e9dbcb" }}
              ></i> */}
            </a>
            <a
              className="nav-link "
              href="https://www.google.com/"
              target="_blank"
              rel="noreferrer"
            >
              {/* <i
                className="fa-brands fa-google-plus m-2 link-hover"
                style={{ fontSize: "1.5em", color: "#e9dbcb" }}
              ></i> */}
            </a>
            <a
              className="nav-link "
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
            >
              {/* <i
                className="fa-brands fa-square-instagram m-2 link-hover"
                style={{ fontSize: "1.5em", color: "#e9dbcb" }}
              ></i> */}
            </a>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-2 col-md-4 col-sm-12 m-2 text-center  ">
            <a href="/All Pages/Women/women.html" className="nav-link">
              <b>Women</b>
            </a>
            <a href="/All Pages/Women/dresses.html" className="nav-link">
              Dresses
            </a>
            <a href="/All Pages/Women/Pants.html" className="nav-link">
              pants
            </a>
            <a href="/All Pages/Women/skirts.html" className="nav-link">
              Skirts
            </a>
          </div>

          <div className="col-lg-2 col-md-4  col-sm-12 m-2 text-center ">
            <a href="/All Pages/Men/men.html" className="nav-link">
              <b>Men</b>
            </a>
            <a href="/All Pages/Men/pants.html" className="nav-link">
              Pants
            </a>
            <a href="/All Pages/Men/shirts.html" className="nav-link">
              Shirts
            </a>
            <a href="/All Pages/Men/hoddies.html" className="nav-link">
              Hoodies
            </a>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-12 m-2 text-center ">
            {" "}
            <a href="/All Pages/kids.html" className="nav-link">
              <b>Kids</b>
            </a>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-12 m-2 text-center ">
            <a href="/" className="nav-link ">
              <FontAwesomeIcon icon={faLink} />

              <b className="fs-5">Links</b>
            </a>
            <a href="/index.html" className="nav-link">
              <FontAwesomeIcon icon={faHouse} />
              <span className="fs-5">Home</span>
            </a>
            <a href="/login.html" className="nav-link">
             
              <FontAwesomeIcon icon={faRightToBracket} />            
              <span className="fs-5">Login</span>
            </a>
            <a href="/contact.html" className="nav-link">
            <FontAwesomeIcon icon={faIdCard} /> 
              <span className="fs-5">Contacts</span>
            </a>
          </div>
          <hr className="w-75  mx-auto" />
          <p className="text-center">Copyright &copy;Businice 2023-2024</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
