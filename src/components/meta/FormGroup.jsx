import React from 'react';
import PropTypes from 'prop-types';

const MetaFormGroup = props => (
  <form className="form__group" onSubmit={props.submitFunction}>
    {props.children}
  </form>
);

MetaFormGroup.defaultProps = {
  children: {},
  submitFunction() {},
};

MetaFormGroup.propTypes = {
  children: PropTypes.node.isRequired,
  submitFunction: PropTypes.func,
};

export default MetaFormGroup;
