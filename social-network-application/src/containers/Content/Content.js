import React from "react";
import moment from "moment";

import Content from "components/Content/Content";
import { ProfileData, Services, Comments } from "common/mocks";
import { NewCommentConstans } from "common/constants";
import "moment/locale/ru";

class ContentContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      profileData: ProfileData,
      services: Services,
      comments: Comments,
      newComment: "",
    };
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleKeyDown(event) {
    if(event.keyCode === NewCommentConstans.ENTER_KEYCODE && event.ctrlKey) {
      this.handleSubmit();
    }
    
  }

  handleSubmit() {
    const { newComment } = this.state;

    if (newComment.replace(/^\s+|\s+$/g,"") !== "") {
      this.setState((prevState) => ({
        comments: [
          ...prevState.comments,
          {
            NAME: NewCommentConstans.NAME,
            DATE: moment().format(NewCommentConstans.DATE_FORMAT),
            COMMENT_TEXT: String(newComment),
          },
        ],
        newComment: "",
      }));
    }
  }

  render() {
    const { profileData, services, comments, newComment } = this.state;
    return (
      <div>
        <Content
          profileData={profileData}
          services={services}
          comments={comments}
          newComment={newComment}
          handleChange={(event) => this.handleChange(event)}
          handleKeyDown={(event) => this.handleKeyDown(event)}
          handleSubmit={() => this.handleSubmit()}
        />
      </div>
    );
  }
}

export default ContentContainer;
