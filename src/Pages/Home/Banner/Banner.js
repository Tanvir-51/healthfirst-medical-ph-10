import React from "react";
import { Carousel } from "react-bootstrap";
import img1 from "../images/Healthcare-Software-Solution.jpg";
import img2 from "../images/hospital-management-banner.jpg";
import img3 from "../images/healthcare-banner.jpg";

const Banner = () => {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={img1} alt="First slide" />
          {/* <Carousel.Caption>
            <h3 className="text-dark">Treatment First</h3>
            <p className="text-dark">We offer the best service for you</p>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={img2} alt="Second slide" />

          {/* <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={img3} alt="Third slide" />

          {/* <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption> */}
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default Banner;
