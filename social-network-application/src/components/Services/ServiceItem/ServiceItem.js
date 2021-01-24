import React from "react";

import { ServiceItemConstants } from "common/constants";
import "./ServiceItem.scss";

const ServiceItem = (props) => {
  const { service, maxAmount } = props;

  const getProgressBarColor = () => {
    if (maxAmount === parseFloat(service.AMOUNT)) {
      return ServiceItemConstants.GREEN;
    } else {
      return ServiceItemConstants.BLUE;
    }
  };

  const getProgressBarScale = () => {
    const scale = 100 / maxAmount;

    const style = {
      width: parseFloat(service.AMOUNT * scale) + "%",
      background: `${getProgressBarColor()}`,
    };
    return style;
  };

  return (
    <div className="service-item-container">
      <div className="service-name">
        <p>{service.NAME}</p>
        <div className="progress-bar" style={getProgressBarScale()}></div>
      </div>
      <div className="service-amount">{service.AMOUNT}</div>
    </div>
  );
};

export default ServiceItem;
