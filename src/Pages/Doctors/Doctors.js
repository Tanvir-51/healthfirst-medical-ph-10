import React from "react";
import "./Doctors.css";
import { Button, Col, Container, Row } from "react-bootstrap";
import img1 from "./Doctors/1.jpg";
import img2 from "./Doctors/2.jpg";
import img3 from "./Doctors/3.jpg";
import img4 from "./Doctors/4.jpg";
import img5 from "./Doctors/5.jpg";
import img6 from "./Doctors/6.jpg";

const Doctors = () => {
  return (
    <Container className="my-5">
      <Row className="mb-3">
        <Col>
          <img src={img1} alt="" />
          <h2 className="fs-3 mb-3">Richard Atkinson</h2>
          <Button variant="primary" size="lg">
            Book an appointment
          </Button>
        </Col>
        <Col>
          <img src={img2} alt="" />
          <h2 className="fs-3 mb-3">Samantha Ruth</h2>
          <Button variant="primary" size="lg">
            Book an appointment
          </Button>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col>
          <img src={img3} alt="" />
          <h2 className="fs-3 mb-3">Edward Jenner</h2>
          <Button variant="primary" size="lg">
            Book an appointment
          </Button>
        </Col>
        <Col>
          <img src={img4} alt="" />
          <h2 className="fs-3 mb-3">Patricia Bath</h2>
          <Button variant="primary" size="lg">
            Book an appointment
          </Button>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col>
          <img src={img5} alt="" />
          <h2 className="fs-3 mb-3">Ashkan Farouza</h2>
          <Button variant="primary" size="lg">
            Book an appointment
          </Button>
        </Col>
        <Col>
          <img src={img6} alt="" />
          <h2 className="fs-3 mb-3">Virginia Apgar</h2>
          <Button variant="primary" size="lg">
            Book an appointment
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Doctors;
