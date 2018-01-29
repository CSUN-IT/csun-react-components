import React from 'react';
import PropTypes from 'prop-types';

const MetaContainer = props => (
  <div id={props.id} className={`${props.className} container`}>
    {props.children}
  </div>
);

MetaContainer.defaultProps = {
  className: '',
  children: {},
  id: null,
};

MetaContainer.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  id: PropTypes.string,
};

export default MetaContainer;
