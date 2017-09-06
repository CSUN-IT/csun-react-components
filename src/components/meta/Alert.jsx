import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MetaAlert extends Component {

  render() {
    const alertParentClasses = `alert ${this.props.color ? `alert--${this.props.color}` : ''}`;
    const strongText = <strong>{this.props.strongText}</strong>;

    return (<div className={alertParentClasses}>
      {this.props.strongText ? strongText : ''} {this.props.text}
      <a href={this.props.to} className="alert__close" data-alert-close>&times;</a>
    </div>
    );
  }
}

MetaAlert.defaultProps = {
  color: '',
  strongText: '',
  text: '',
  to: '#',
};

MetaAlert.propTypes = {
  color: PropTypes.oneOf([
    'info',
    'success',
    'warning',
    'danger',
  ]),
  strongText: PropTypes.string,
  text: PropTypes.string.isRequired,
  to: PropTypes.string,
};

export default MetaAlert;
