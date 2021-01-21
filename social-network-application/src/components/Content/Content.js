import React from "react";

import ProfileSection from "components/Profile/ProfileSection";
import CommentsSection from "components/Comments/CommentsSection";
import NewCommentSection from "components/NewComment/NewCommentSection";

import "./Content.scss";

const Content = (props) => {
  const {} = props;

  return (
    <div className="content-section-container">
      <ProfileSection />
      <CommentsSection />
      <NewCommentSection />
    </div>
  );
};

export default Content;
