import React from 'react';
import PropTypes from 'prop-types';

const MetaButtonLink = (props) => {
  const buttonClassName = `btn btn-${props.color}${
    props.size ? ` btn-${props.size}` : ''}${
    props.className ? ` ${props.className}` : ''}${
    props.btnStyle ? ` btn-${props.btnStyle}` : ''}`;

  return (
    <a
      className={buttonClassName}
      href={props.href}
    >
      {props.text}
    </a>
  );
};

MetaButtonLink.defaultProps = {
  className: '',
  color: '',
  size: '',
  btnStyle: '',
  text: 'button',
  href: '#',
};

MetaButtonLink.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string.isRequired,
  color: PropTypes.oneOf(['default', 'primary', 'success']).isRequired,
  size: PropTypes.oneOf(['sm', 'lg', '']),
  btnStyle: PropTypes.oneOf(['default-outline', 'primary-outline', 'success-outline', '']),
  href: PropTypes.string.isRequired,
};

export default MetaButtonLink;
