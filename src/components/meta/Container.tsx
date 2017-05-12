import React, { Component } from 'react';

interface Props {
  children: {} 
}

class MetaContainer extends Component <Props, {}> {
  render() {
    return (
      <div className="container">
        {this.props.children}
      </div>
    );
  }
}

export default MetaContainer;
