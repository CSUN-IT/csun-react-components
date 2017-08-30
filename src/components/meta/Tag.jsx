import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

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
  text: PropTypes.string,
  color: PropTypes.oneOf([
    'success',
    'warning',
    'danger',
    '',
  ]),
  action: PropTypes.oneOf(['close', '']),
  to: PropTypes.string.isRequired,
};

export default MetaTag;
