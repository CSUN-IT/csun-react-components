import React from 'react';
import PropTypes from 'prop-types';
import './sass/_quickResponse.scss';

const QuickResponseButton = (props) => {
  const buttonClassName = `btn quickResponse-${props.size} btn-${props.color} ${props.size ? `btn-${props.size}` : ''} ${props.btnStyle ? `btn-${props.btnStyle}` : ''}`;

  return (
    <button type={props.type} value={props.text} role="button" className={buttonClassName} onClick={props.action} disabled={props.disabled === 'true' || props.disabled === ''}>
      {props.text}
    </button>
  );
};

QuickResponseButton.defaultProps = {
  color: 'default',
  size: 'med',
  btnStyle: '',
  text: 'button',
  disabled: 'false',
  action: '',
  type: 'submit',
};

QuickResponseButton.propTypes = {
  type: PropTypes.oneOf([
    'submit',
    'reset',
    'button',
  ]),
  text: PropTypes.string.isRequired,
  color: PropTypes.oneOf([
    'default',
    'primary',
    'success',
  ]).isRequired,
  size: PropTypes.oneOf([
    'lg',
    'med',
    'sm',
    'mini',
    '',
  ]),
  disabled: PropTypes.oneOf([
    'true',
    'false',
    '',
  ]),
  action: PropTypes.func,
  btnStyle: PropTypes.oneOf([
    'default-outline',
    'primary-outline',
    'success-outline',
    '',
  ]),
};

export default QuickResponseButton;
