import React from "react";

import "./CommentItem.scss";

const CommentItem = (props) => {
  const {} = props;

  return (
    <div className="comment-item-container">
        <div className="comment-item-header">
          <div className="comment-item-header name">Самуил </div>
          <div className="comment-item-header date">13 октября</div>
        </div>
        <div className="comment-item-text"></div>
    </div>
  );
};

export default CommentItem;