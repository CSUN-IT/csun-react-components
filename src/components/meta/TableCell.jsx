import React from 'react';
import PropTypes from 'prop-types';


const MetaTableCell = props => <td>{props.children}</td>;

MetaTableCell.propTypes = {
  children: PropTypes.string.isRequired,
};

export default MetaTableCell;
