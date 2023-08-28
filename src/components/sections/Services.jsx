import { ServiceCard } from "../reusables";

import { serviceData } from "../../assets/data";

const Services = () => {
  return (
    <div className="services">
      <p>Our Services</p>
      <h1>Handshake infographic mass market crowdfunding iteration.</h1>

      <div className="services__cards">
        {serviceData.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}

        {/* <ServiceCard /> */}
      </div>
    </div>
  );
};

export default Services;
