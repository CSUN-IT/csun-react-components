import React from 'react';
import PropTypes from 'prop-types';

const MetaTable = props => <p>{props.test}</p>;

MetaTable.propTypes = {
  test: PropTypes.string.isRequired,
};

export default MetaTable;
