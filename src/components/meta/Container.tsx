import React, { Component } from 'react';

class MetaContainer extends Component {
  render() {
    return (
      <div className="container">
        {this.props.children}
      </div>
    );
  }
}

MetaContainer.defaultProps = {
  children: {},
};

MetaContainer.propTypes = {
  children: React.PropTypes.node.isRequired,
};

export default MetaContainer;
