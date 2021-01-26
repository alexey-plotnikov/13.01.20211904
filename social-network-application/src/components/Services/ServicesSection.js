import React from "react";

import ServiceItem from "components/Services/ServiceItem/ServiceItem";
import "./ServicesSection.scss";

const ServicesSection = (props) => {
  const { services } = props;

  const totalAmount = () => {
    return services.reduce(
      (result, service) => (result = result + parseFloat(service.AMOUNT)),
      0
    );
  };

  const getMaxServiceAmount = () => {
    const result = Math.max.apply(
      Math,
      services.map((service) => {
        return parseFloat(service.AMOUNT);
      })
    );

    return result;
  };

  return (
    <div className="services-section-container">
      <div className="services-container">
        <div className="services-header">Услуг</div>
        <div className="horizontal-line"></div>
        <div className="services-item">
          <div className="vertical-line"></div>
          <div className="services-item__item">
            {services.map((service, index) => (
              <ServiceItem
                key={index}
                service={service}
                maxAmount={getMaxServiceAmount()}
              />
            ))}
          </div>
        </div>

        <div className="horizontal-line"></div>
        <div className="services-footer">
          <div className={"services-footer__title"}>Всего</div>
          <div className="services-footer__total-amount">{totalAmount()}</div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
