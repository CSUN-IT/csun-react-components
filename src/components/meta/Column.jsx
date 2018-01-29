import React from 'react';
import PropTypes from 'prop-types';

const MetaColumn = (props) => {
  let className = props.className ? `${props.className}` : '';
  props.sizes.forEach((val, index) => {
    className = `${className} col-${val}-${props.values[index]}`;
  });

  return (
    <div
      className={className}
    >
      {props.children}
    </div>);
};

MetaColumn.defaultProps = {
  children: {},
  className: '',
};

MetaColumn.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  sizes: PropTypes.arrayOf(PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl'])).isRequired,
  values: PropTypes.arrayOf(PropTypes.oneOf(['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'])).isRequired,
};

export default MetaColumn;
