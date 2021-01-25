import React from "react";

import ProfileSection from "components/Profile/ProfileSection";
import ServicesSection from "components/Services/ServicesSection";
import CommentsSection from "components/Comments/CommentsSection";
import NewCommentSection from "components/NewComment/NewCommentSection";

import "./Content.scss";

const Content = (props) => {
  const {
    profileData,
    services,
    comments,
    handleChange,
    newComment,
    handleKeyDown,
    handleSubmit,
  } = props;

  return (
    <div className="content-section-container">
      <ProfileSection profileData={profileData} />
      <ServicesSection services={services} />
      <CommentsSection profileData={profileData} comments={comments} />
      <NewCommentSection
        newComment={newComment}
        handleChange={(event) => handleChange(event)}
        handleKeyDown={(event) => handleKeyDown(event)}
        handleSubmit={() => handleSubmit()}
      />
    </div>
  );
};

export default Content;
