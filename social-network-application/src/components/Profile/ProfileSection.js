import React from "react";
// import {  } from "commonjs";
import { ProfileConstants } from "common/constants";
import "./ProfileSection.scss";

const ProfileSection = (props) => {
  const { profileData } = props;

  return (
    <div className="profile-section-container">
      <div className="profile-picture">
        <div className="profile-picture__image-box">
          <img
            className="image"
            src={process.env.PUBLIC_URL + profileData.PROFILE_PICTURE}
            alt=""
          />
        </div>
      </div>
      <div className="profile-data">
        <div className="profile-data__name">
          {profileData.NAME}
        </div>
        <div className="profile-data__job-title">{profileData.JOB_TITLE}</div>
        <div className="profile-data__slogan">{profileData.SLOGAN}</div>
      </div>
    </div>
  );
};

export default ProfileSection;
