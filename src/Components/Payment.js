import React from "react";
import { Button } from "react-bootstrap";
import {Link} from "react-router-dom";

const Payment = () => {
  return (
    <>
      <h3 className="text-center" style={{ marginTop: "6rem" }}>
        Payment Method
      </h3>
      <div className="form-check " style={{marginLeft:"40%"}}>
        <input
          className="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckDefault"
        />
        <label className="form-check-label " htmlFor="flexCheckDefault">
          Paypal
        </label>
      </div>
      <div className="form-check"  style={{marginLeft:"40%"}}>
        <input
          className="form-check-input "
          type="checkbox"
          value=""
          id="flexCheckDefault"
        />
        <label className="form-check-label " htmlFor="flexCheckDefault">
          Stripe
        </label>
      </div>
      <Link to="/order"><Button type="submit" className="btn btn-warning mt-3"  style={{marginLeft:"40%"}}  >Continue</Button></Link>
      <p className="mt-4" style={{marginLeft:"40%"}}><b>All rights reserved</b> </p>
    </>
  );
};

export default Payment;
