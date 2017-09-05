import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MetaColumn extends Component {
  render() {
    return (
      <div className={`col-${this.props.size}-${this.props.value} col-${this.props.size}-offset-${this.props.offSet}`}>
        {this.props.children}
      </div>
    );
  }
}

MetaColumn.defaultProps = {
  children: {},
  size: 'sm',
  value: '12',
  offSet: '0'
};

MetaColumn.propTypes = {
  children: PropTypes.node.isRequired,
  size: PropTypes.oneOf([
    'xs',
    'sm',
    'md',
    'lg',
    'xl',
  ]),
  value: PropTypes.oneOf([
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    '11',
    '12',
  ]),
  offSet: PropTypes.string,
};

export default MetaColumn;
