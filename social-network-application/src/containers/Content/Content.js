import React from "react";

import Content from "components/Content/Content";

import { ProfileData, Comments } from "common/mocks";

class ContentContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      profileData: ProfileData,
      comments: Comments,
    };
  }
  
  render() {
    const { profileData, comments } = this.state;
    return (
      <div>
        <Content profileData={profileData} comments={comments} />
      </div>
    );
  }
}

export default ContentContainer;
