import React from 'react';
import PropTypes from 'prop-types';

const MetaRow = props => <div className={` row ${props.className}`}>{props.children}</div>;

MetaRow.defaultProps = {
  className: '',
  children: {},
};

MetaRow.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default MetaRow;
