import React from 'react';
import PropTypes from 'prop-types';


const TableHeaderCell = props => <th>{props.content}</th>;

TableHeaderCell.propTypes = {
  content: PropTypes.string.isRequired,
};

export default TableHeaderCell;
