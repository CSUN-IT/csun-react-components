import React from 'react';
import PropTypes from 'prop-types';

const MetaTableRow = props => <tr>{props.children}</tr>;


MetaTableRow.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MetaTableRow;
