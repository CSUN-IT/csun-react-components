import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class MetaTag extends Component {
  render() {
    const tagStatus = `${this.props.color ? `tag--${this.props.color}` : ''}`;
    const tagAction = `${this.props.action ? `tag--${this.props.action}` : ''}`;
    const tagClasses = `tag ${tagStatus} ${tagAction}`;
    return (
      <Link to={this.props.to} className={tagClasses}>{this.props.text}</Link>
    );
  }
}

MetaTag.defaultProps = {
  color: '',
  action: '',
  text: 'Tag',
  to: '',
};

MetaTag.propTypes = {
  text: React.PropTypes.string,
  color: React.PropTypes.oneOf([
    'success',
    'warning',
    'danger',
    '',
  ]),
  action: React.PropTypes.oneOf(['close', '']),
  to: React.PropTypes.string.isRequired,
};

export default MetaTag;
