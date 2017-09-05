import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
  children: PropTypes.node.isRequired,
};

export default MetaContainer;
