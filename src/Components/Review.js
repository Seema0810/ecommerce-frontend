import React from "react";
import { Container, Row, Card,Form, Button } from "react-bootstrap";
import "../Css/review.css";

const Review = () => {
  return (
    <>
      <Container className="mt-5">
        <Row>
          <h3 className=" mx-5">Reviews</h3>
          <Card className=" form-select mx-5">
            <Card.Body>
              <Card.Subtitle className="mb-2 text-muted">Basir</Card.Subtitle>
              <Card.Text>
                <i className="fa-solid fa-star text-warning"></i>
                <i className="fa-solid fa-star text-warning"></i>
                <i className="fa-solid fa-star text-warning"></i>
                <i className="fa-solid fa-star text-warning"></i>
                <i className="fa-solid fa-star text-warning"></i>
                <p>2023-12-29</p>
                <h5>Good Shirt</h5>
              </Card.Text>
            </Card.Body>
          </Card>
        </Row>
        <h4  className="review-heading mx-5">Write a customer review</h4>
        <h6  className="mx-5">Rating</h6>
        <Row>
        <Form.Select  className=" form-select mx-5" style={{ width: "60rem" }}>
        <option>Select any one</option>
        <option>1-fine</option>
        <option>2-Good</option>
        <option>3-better</option>
        <option>4-best</option>
        <option>5-excellent</option>
      </Form.Select>
      {/* <div className="form-select input-group mt-5 mx-5" style={{ width: "60rem" }}> */}
  
  <textarea className=" mx-5 form-select form-control mt-4" aria-label="With textarea" placeholder="comment here..." style={{ width: "60rem" }}></textarea>
{/* </div> */}

<Button variant="warning" className="mt-4 mx-5  mb-3"  style={{ width: "10rem" }}>Submit</Button>{' '}
        </Row>
      </Container>
    </>
  );
};

export default Review;
