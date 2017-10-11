import React from 'react';
import PropTypes from 'prop-types';

const MetaContainer = props => <div className="container">{props.children}</div>;

MetaContainer.defaultProps = {
  children: {},
};

MetaContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MetaContainer;
