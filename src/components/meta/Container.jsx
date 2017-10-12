import React from 'react';
import PropTypes from 'prop-types';

const MetaContainer = props => (
  <div className={`${props.className} container`}>{props.children}</div>
);

MetaContainer.defaultProps = {
  className: '',
  children: {},
};

MetaContainer.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default MetaContainer;
