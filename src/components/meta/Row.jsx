import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MetaRow extends Component {
  render() {
    return (
      <div className="row">
        {this.props.children}
      </div>
    );
  }
}

MetaRow.defaultProps = {
  children: {},
};

MetaRow.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MetaRow;
