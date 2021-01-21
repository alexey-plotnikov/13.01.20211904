import React from "react";

import CommentItem from "components/Comment/CommentItem";

import { CommentsConstants } from "common/constants";
import "./CommentsSection.scss";

const CommentsSection = (props) => {
  const { profileData, comments } = props;

  return (
    <div className="comments-section-container">
      <div className="comments-section-header">
        <div className="comments-section-header__last-comments">
          {CommentsConstants.RECENT_COMMENTS}
        </div>
        <div className="comments-section-header__all-comments">
          <a href="" className="comments-section-header__all-comments-link">
            {CommentsConstants.ALL_COMMENTS}
          </a>
        </div>
        <div className="comments-section-header__likes-icon">
          {profileData.AMOUNT_OF_LIKES}
        </div>
        <div className="comments-section-header__comments-icon">
          {profileData.AMOUNT_OF_COMMENTS}
        </div>
      </div>
      <div className="comments-section-comment-item">
        {comments.map((comment, index) => (
          <CommentItem key={index} comment={comment} />
        ))}
      </div>
    </div>
  );
};

export default CommentsSection;
