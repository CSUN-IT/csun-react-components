import React from 'react';
import PropTypes from 'prop-types';

const MetaColumn = props => (
  <div
    className={`${props.className} col-${props.size}-${props.value} col-${props.size}-offset-${props.offSet}`}
  >
    {props.children}
  </div>
);

MetaColumn.defaultProps = {
  children: {},
  size: 'sm',
  value: '12',
  offSet: '0',
  className: '',
};

MetaColumn.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
  value: PropTypes.oneOf(['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']),
  offSet: PropTypes.string,
};

export default MetaColumn;
