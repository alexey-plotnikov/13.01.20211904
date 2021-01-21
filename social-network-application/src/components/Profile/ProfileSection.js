import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { ProfileConstants } from "common/constants";
import "./ProfileSection.scss";

const ProfileSection = (props) => {
  const {} = props;

  return (
    <div className="profile-section-container">
      <div className="profile-picture-col">
        <div className="profile-picture-col picture"></div>
      </div>
      <div className="profile-data-col">
        <div className="profile-data-col name flex-start">{ProfileConstants.NAME}</div>
        <div className="profile-data-col job-title flex-start">{ProfileConstants.JOB_TITLE}</div>
        <div className="profile-data-col slogan flex-start">{ProfileConstants.SLOGAN}</div>
      </div>
    </div>
  );
};

export default ProfileSection;
