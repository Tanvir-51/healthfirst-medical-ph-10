import "./Services.css";
import React, { useEffect, useState } from "react";
import Service from "../Service/Service";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
      <h2 className="text-primary m-5">Our Services</h2>
      <div className="service-container">
        {services.map((service) => (
          <Service key={service.name} service={service}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
