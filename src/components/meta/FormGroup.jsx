import React, { Component } from 'react';

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
  children: React.PropTypes.node.isRequired,
};

export default MetaFormGroup;
