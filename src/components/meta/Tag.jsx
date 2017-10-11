import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const MetaTag = (props) => {
  const tagStatus = `${props.color ? `tag--${props.color}` : ''}`;
  const tagAction = `${props.action ? `tag--${props.action}` : ''}`;
  const tagClasses = `tag ${tagStatus} ${tagAction}`;
  return (
    <Link to={props.to} className={tagClasses}>
      {props.text}
    </Link>
  );
};

MetaTag.defaultProps = {
  color: '',
  action: '',
  text: 'Tag',
  to: '',
};

MetaTag.propTypes = {
  text: PropTypes.string,
  color: PropTypes.oneOf(['success', 'warning', 'danger', '']),
  action: PropTypes.oneOf(['close', '']),
  to: PropTypes.string.isRequired,
};

export default MetaTag;
