import React from "react";

import "./ServiceItem.scss";

const ServiceItem = (props) => {
  const { service } = props;

  return (
    <div className="service-item-container">
      <div className="service-name">{service.NAME}</div>
      <div className="service-amount">{service.AMOUNT}</div>
    </div>
  );
};

export default ServiceItem;
