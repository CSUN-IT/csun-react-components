import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MetaButton extends Component {
  render() {
    const buttonClassName = `btn btn-${this.props.color} 
    ${this.props.size ? `btn-${this.props.size}` : ''} 
    ${this.props.className ? `${this.props.className}` : ''}
    ${this.props.btnStyle ? `btn-${this.props.btnStyle}` : ''}`;

    return (
      <button
        role="button"
        className={buttonClassName}
        type={this.props.type}
        value={this.props.value}
        onClick={this.props.onClick}
      >
        {this.props.text}
      </button>
    );
  }
}

MetaButton.defaultProps = {
  className: '',
  color: 'default',
  size: '',
  btnStyle: '',
  text: 'button',
  type: '',
  value: '',
  onClick: () => {},
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
