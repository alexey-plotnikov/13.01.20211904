import React from "react";

import CommentItem from "components/Comment/CommentItem";
import "./CommentsSection.scss";

const CommentsSection = (props) => {
  const {} = props;

  return (
    <div className="comments-section-container">
      <CommentItem />
      <CommentItem />
      <CommentItem />
      <CommentItem />
    </div>
  );
};

export default CommentsSection;