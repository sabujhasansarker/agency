import React from "react";

import Heading from "../../../utils/Heading";

import "./Service.scss";

const Service = () => {
  const services = [
    {
      name: "UX/UL Design",
      text:
        "From structuring information to architecture and mapping out functionalities.",
    },
    {
      name: "Application",
      text:
        "From structuring information to architecture and mapping out functionalities.",
    },
    {
      name: "Development",
      text:
        "From structuring information to architecture and mapping out functionalities.",
    },
    {
      name: "Research",
      text:
        "From structuring information to architecture and mapping out functionalities.",
    },
    {
      name: "Marketing",
      text:
        "From structuring information to architecture and mapping out functionalities.",
    },
    {
      name: "Advertising",
      text:
        "From structuring information to architecture and mapping out functionalities.",
    },
  ];
  return (
    <div className="services">
      <div className="container">
        <Heading>Our services</Heading>
        <div className="service_container">
          {services.map((service, index) => (
            <div className="card_item button" key={index}>
              <h4>{service.name}</h4>
              <p>{service.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
