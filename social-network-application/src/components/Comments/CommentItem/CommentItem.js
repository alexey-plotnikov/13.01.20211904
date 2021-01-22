import React from "react";

import "./CommentItem.scss";

const CommentItem = (props) => {
  const {comment} = props;

  return (
    <div className="comment-item-container">
      <div className="comment-item-header">
        <div className="comment-item-header__name">{comment.NAME}</div>
        <div className="comment-item-header__date">{comment.DATE}</div>
      </div>
      <div className="comment-item-text">{comment.COMMENT_TEXT}</div>
    </div>
  );
};

export default CommentItem;
