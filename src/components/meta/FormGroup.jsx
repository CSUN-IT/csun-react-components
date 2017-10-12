import React from 'react';
import PropTypes from 'prop-types';

const MetaFormGroup = props => (
  <form className={`${props.className} form__group`} onSubmit={props.submitFunction}>
    {props.children}
  </form>
);

MetaFormGroup.defaultProps = {
  children: {},
  submitFunction() {},
  className: '',
};

MetaFormGroup.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  submitFunction: PropTypes.func,
};

export default MetaFormGroup;
