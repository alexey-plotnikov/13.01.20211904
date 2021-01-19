import React from "react";

import Content from "components/Content/Content";

class ContentContainer extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <div>
          <Content />
      </div>
    );
  }
}

export default ContentContainer;
