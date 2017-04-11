import React, { Component } from 'react';

class MetaRow extends Component {
  render() {
    return (
      <div className="row">
        {this.props.children}
      </div>
    );
  }
}

MetaRow.defaultProps = {
  children: {},
};

MetaRow.propTypes = {
  children: React.PropTypes.node.isRequired,
};

export default MetaRow;
