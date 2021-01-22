import React from "react";

import Content from "components/Content/Content";

import { ProfileData, Services, Comments } from "common/mocks";

class ContentContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      profileData: ProfileData,
      services: Services,
      comments: Comments,
    };
  }
  
  render() {
    const { profileData, services, comments } = this.state;
    return (
      <div>
        <Content profileData={profileData} services={services} comments={comments} />
      </div>
    );
  }
}

export default ContentContainer;
