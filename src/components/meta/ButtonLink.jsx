import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const MetaButtonLink = (props) => {
  const buttonClassName = `btn btn-${props.color}${
    props.size ? ` btn-${props.size}` : ''}${
    props.className ? ` ${props.className}` : ''}${
    props.btnStyle ? ` btn-${props.btnStyle}` : ''}`;

  return (
    <NavLink
      className={buttonClassName}
      to={props.to}
    >
      {props.text}
    </NavLink>
  );
};

MetaButtonLink.defaultProps = {
  className: '',
  color: '',
  size: '',
  btnStyle: '',
  text: 'button',
  to: '',
};

MetaButtonLink.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string.isRequired,
  color: PropTypes.oneOf(['default', 'primary', 'success']).isRequired,
  size: PropTypes.oneOf(['sm', 'lg', '']),
  btnStyle: PropTypes.oneOf(['default-outline', 'primary-outline', 'success-outline', '']),
  to: PropTypes.string.isRequired,
};

export default MetaButtonLink;
