import React from 'react';
import PropTypes from 'prop-types';

const MetaRow = props => <div className="row">{props.children}</div>;

MetaRow.defaultProps = {
  children: {},
};

MetaRow.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MetaRow;
