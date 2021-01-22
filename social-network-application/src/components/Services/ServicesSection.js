import React from "react";

import ServiceItem from "components/Services/ServiceItem/ServiceItem";
import "./ServicesSection.scss";

const ServicesSection = (props) => {
  const { services } = props;

  let totalAmount = () => {
    return services.reduce(
      (result, service) => (result = result + parseFloat(service.AMOUNT)),
      0
    );
  };

  return (
    <div className="services-section-container">
      <div className="services-container">
        <div className="services-header">Услуг</div>
        <div className="horizontal-line"></div>
        <div className="service-items">
          {services.map((service, index) => (
            <ServiceItem key={index} service={service} />
          ))}
        </div>
        <div className="horizontal-line"></div>
        <div className="services-footer">
          <div className="services-footer__title">Всего</div>
          <div className="services-footer__total-amount">{totalAmount()}</div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
