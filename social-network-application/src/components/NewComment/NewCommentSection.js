import React from "react";

import { NewCommentConstans } from "common/constants";
import "./NewCommentSection.scss";

const NewCommentSection = (props) => {
  const { handleChange, newComment, handleKeyDown, handleSubmit } = props;

  return (
    <div className="new-comment-section-container">
      <textarea
        name="newComment"
        value={newComment}
        onChange={(event) => handleChange(event)}
        onKeyDown={handleKeyDown}
        className="new-comment__input-field"
      />
      <div
        className="new-comment__submit-button"
        onClick={handleSubmit}
      >
        {NewCommentConstans.SUBMIT_COMMENT}
      </div>
    </div>
  );
};

export default NewCommentSection;
