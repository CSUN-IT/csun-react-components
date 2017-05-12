import React, { Component } from 'react';

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
  text: React.PropTypes.string.isRequired,
  color: React.PropTypes.oneOf([
    'default',
    'primary',
    'success',
  ]).isRequired,
  size: React.PropTypes.oneOf([
    'sm',
    'lg',
    '',
  ]),
  btnStyle: React.PropTypes.oneOf([
    'default-outline',
    'primary-outline',
    'success-outline',
    '',
  ]),
};

export default MetaButton;
