import React from 'react';
import PropTypes from 'prop-types';

const MetaTableHead = props => <thead>{props.children}</thead>;

MetaTableHead.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MetaTableHead;
