import React from "react";

import "./NewCommentSection.scss";

const NewCommentSection = (props) => {
  const {} = props;

  return (
    <div className="new-comment-section-container">
        <div className="new-comment-section input-field">
        </div>
        <div className="new-comment-section submit-button">
          Написать консультанту
        </div>
    </div>
  );
};

export default NewCommentSection;
