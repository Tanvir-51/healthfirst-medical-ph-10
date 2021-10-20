import React from "react";
import "./Resources.css";
import { Button, Col, Container, Row } from "react-bootstrap";

const Resources = () => {
  return (
    <Container className="my-5">
      <Row>
        <Col className="p-5" style={{ backgroundColor: "#aacfe1" }}>
          <h2 className="fw-bold">For Patients</h2>
          <Button className="my-5" variant="primary" size="lg">
            <a
              className="anchor-link"
              href="https://my.clevelandclinic.org/patients"
              target="_blank"
              rel="noreferrer"
            >
              View All Patients Resources
            </a>
          </Button>
        </Col>
        <Col className="p-5" style={{ backgroundColor: "#bde6fb" }}>
          <h2 className="fw-bold">For Doctors</h2>
          <Button className="my-5" variant="primary" size="lg">
            <a
              className="anchor-link"
              href="https://my.clevelandclinic.org/professionals"
              target="_blank"
              rel="noreferrer"
            >
              View All Doctors Resources
            </a>
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Resources;
