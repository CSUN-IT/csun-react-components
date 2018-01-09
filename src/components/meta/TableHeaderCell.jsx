import React from 'react';
import PropTypes from 'prop-types';


const TableHeaderCell = props => <th>{props.children}</th>;

TableHeaderCell.propTypes = {
  children: PropTypes.string.isRequired,
};

export default TableHeaderCell;
