import React, { Component } from 'react';

class PageHeader extends Component {
  render() {
    return (
      <div className="page-header">
        {this.props.title}
      </div>
    );
  }
}

export default PageHeader;
