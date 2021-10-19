import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer-container ">
      <h2>Come To The Best Medical Facility In This City</h2>
      <h5>With All Modern Amenities Available</h5>
      <Link to="/login">
        <Button className="mt-3" variant="success" size="lg">
          Login
        </Button>
      </Link>
      <p className="mt-5">©2021 Tanvir All rights reserved </p>
    </div>
  );
};

export default Footer;
