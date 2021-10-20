import React from "react";
import "./Locations.css";
import { Col, Container, Row } from "react-bootstrap";
import img1 from "../images/locations/cleveland-clinic-main.jpg";
import img2 from "../images/locations/cleveland-clinic-florida.webp";
import img3 from "../images/locations/cleveland-clinic-abu-dhabi.jpg";
import img4 from "../images/locations/cleveland-clinic-canada.jpg";

const Locations = () => {
  return (
    <Container className="my-5">
      <h2 className="fw-bold text-primary ">Healthfirst Center Near You</h2>
      <Row>
        <Col>
          <img src={img1} alt="" />
          <a
            className="links fs-4"
            target="_blank"
            rel="noreferrer"
            href="https://my.clevelandclinic.org/locations/ohio-locations"
          >
            Cleveland Clinic Locations in Ohio
          </a>
        </Col>
        <Col>
          <img src={img2} alt="" />
          <a
            className="links fs-4"
            target="_blank"
            rel="noreferrer"
            href="https://my.clevelandclinic.org/florida/locations"
          >
            Cleveland Clinic Locations in Florida{" "}
          </a>
        </Col>
        <Col>
          <img src={img3} alt="" />
          <a
            className="links fs-4"
            target="_blank"
            rel="noreferrer"
            href="https://www.clevelandclinicabudhabi.ae/en/pages/default.aspx"
          >
            Cleveland Clinic Abu Dhabi
          </a>
        </Col>
        <Col>
          <img src={img4} alt="" />
          <a
            className="links fs-4"
            target="_blank"
            rel="noreferrer"
            href="https://my.clevelandclinic.org/canada"
          >
            Cleveland Clinic Canada
          </a>
        </Col>
      </Row>
    </Container>
  );
};

export default Locations;
