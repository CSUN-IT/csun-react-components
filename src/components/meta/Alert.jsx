import React, { Component } from 'react';

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
  color: React.PropTypes.oneOf([
    'info',
    'success',
    'warning',
    'danger',
  ]),
  strongText: React.PropTypes.string,
  text: React.PropTypes.string.isRequired,
  to: React.PropTypes.string,
};

export default MetaAlert;
