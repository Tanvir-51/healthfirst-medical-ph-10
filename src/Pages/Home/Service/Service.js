import React from "react";
import { Button, Card } from "react-bootstrap";
import "./Service.css";

const Service = ({ service }) => {
  const { name, image, description, details } = service;
  return (
    <div className="col-lg-4 col-sm-6 col-12">
      <Card className="service" style={{ width: "26rem" }}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Button variant="primary">Details</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Service;
