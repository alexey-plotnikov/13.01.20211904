import React from "react";

import CommentItem from "components/Comments/CommentItem/CommentItem";

import { CommentsConstants } from "common/constants";
import "./CommentsSection.scss";

const CommentsSection = (props) => {
  const { profileData, comments } = props;

  return (
    <div className="comments-section-container">
      <div className="comments-header">
        <div className="comments-header__last-comments">
          {CommentsConstants.RECENT_COMMENTS}
        </div>
        <div className="comments-header__all-comments">
          <a href="/" className="comments-header__all-comments-link">
            {CommentsConstants.ALL_COMMENTS}
          </a>
        </div>
        <div className="comments-header__likes-icon">
          <img
            src={process.env.PUBLIC_URL + CommentsConstants.LIKES_ICON}
            alt=""
          />
          <p>{profileData.AMOUNT_OF_LIKES}</p>
        </div>
        <div className="comments-header__comments-icon">
          <img
            src={process.env.PUBLIC_URL + CommentsConstants.COMMENTS_ICON}
            alt=""
          />
          <p>{profileData.AMOUNT_OF_COMMENTS}</p>
        </div>
      </div>
      <div className="comments-item">
        {comments.map((comment, index) => (
          <CommentItem key={index} comment={comment} />
        ))}
      </div>
    </div>
  );
};

export default CommentsSection;
