import React from 'react';
import PropTypes from 'prop-types';


const MetaTableCell = props => <td>{props.content}</td>;

MetaTableCell.propTypes = {
  content: PropTypes.string.isRequired,
};

export default MetaTableCell;
