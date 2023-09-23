import React from "react";
import { services } from "../constants";
import ServiceCard from "../components/ServiceCard";

const Services = () => {
  return (
    <div className="flex justify-center gap-8 max-container sm:gap-12 flex-wrap">
      {services.map((service, i) => (
        <ServiceCard key={i} {...service} />
      ))}
    </div>
  );
};

export default Services;
