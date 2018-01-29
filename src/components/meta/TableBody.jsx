import React from 'react';
import PropTypes from 'prop-types';

const MetaTableBody = props => <tbody>{props.children}</tbody>;


MetaTableBody.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MetaTableBody;
