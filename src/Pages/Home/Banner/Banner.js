import React from "react";
import { Carousel } from "react-bootstrap";
import img1 from "../images/Banner/Healthcare-Software-Solution.jpg";
import img2 from "../images/Banner/hospital-management-banner.jpg";
import img3 from "../images/Banner/healthcare-banner.jpg";

const Banner = () => {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={img1} alt="First slide" />
          <Carousel.Caption>
            <h3 className="text-dark fs-1 fw-bold">Treatment First</h3>
            <p className="text-dark fs-3">We offer the best service for you</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={img2} alt="Second slide" />

          <Carousel.Caption>
            <h3 className="text-dark fs-1 fw-bold">
              Your satisfaction is our motivation
            </h3>
            <p className="text-dark fs-3">
              For a happy and healthy life for the patients
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={img3} alt="Third slide" />

          <Carousel.Caption>
            <h3 className="text-dark fs-1 fw-bold">
              Be a part of our glorious journey
            </h3>
            <p className="text-dark fs-3">
              Select a health plan that includes Healthfirst Medical Center
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default Banner;
