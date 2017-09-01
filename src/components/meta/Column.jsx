import React, { Component } from 'react';

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
  children: React.PropTypes.node.isRequired,
  size: React.PropTypes.oneOf([
    'xs',
    'sm',
    'md',
    'lg',
    'xl',
  ]),
  value: React.PropTypes.oneOf([
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
  offSet: React.PropTypes.string,
};

export default MetaColumn;
