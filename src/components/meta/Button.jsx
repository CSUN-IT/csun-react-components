import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MetaButton extends Component {
  render() {
    const buttonClassName = `btn btn-${this.props.color} ${this.props.size ? `btn-${this.props.size}` : ''} ${this.props.btnStyle ? `btn-${this.props.btnStyle}` : ''}`;

    return (
      <button role="button" className={buttonClassName}>{this.props.text}</button>
    );
  }
}

MetaButton.defaultProps = {
  color: 'default',
  size: '',
  btnStyle: '',
  text: 'button',
};

MetaButton.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.oneOf([
    'default',
    'primary',
    'success',
  ]).isRequired,
  size: PropTypes.oneOf([
    'sm',
    'lg',
    '',
  ]),
  btnStyle: PropTypes.oneOf([
    'default-outline',
    'primary-outline',
    'success-outline',
    '',
  ]),
};

export default MetaButton;
