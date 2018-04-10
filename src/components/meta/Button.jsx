import React from 'react';
import PropTypes from 'prop-types';

const MetaButton = (props) => {
  const buttonClassName = `btn btn-${props.color}${
    props.size ? ` btn-${props.size}` : ''}${
    props.className ? ` ${props.className}` : ''}${
    props.btnStyle ? ` btn-${props.btnStyle}` : ''}`;

  return (
    <button
      role="button"
      className={buttonClassName}
      type={props.type}
      value={props.value}
      onClick={props.onClick}
    >
      {props.text}
    </button>
  );
};

MetaButton.defaultProps = {
  className: '',
  color: 'default',
  size: '',
  btnStyle: '',
  text: 'button',
  type: null,
  value: null,
  onClick: () => { },
};

MetaButton.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string.isRequired,
  type: PropTypes.string,
  onClick: PropTypes.func,
  value: PropTypes.string,
  color: PropTypes.oneOf(['default', 'primary', 'success']).isRequired,
  size: PropTypes.oneOf(['sm', 'lg', '']),
  btnStyle: PropTypes.oneOf(['default-outline', 'primary-outline', 'success-outline', '']),
};

export default MetaButton;
