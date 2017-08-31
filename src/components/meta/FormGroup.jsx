import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MetaFormGroup extends Component {
  render() {
    return (
      <div className="form__group">
        {this.props.children}
      </div>
    );
  }
}

MetaFormGroup.defaultProps = {
  children: {},
};

MetaFormGroup.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MetaFormGroup;
