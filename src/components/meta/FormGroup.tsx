import React, { Component } from 'react';

interface MyProps {
  children: any
}

class MetaFormGroup extends Component<MyProps, undefined> {
  render() {
    return (
      <div className="form__group">
        {this.props.children}
      </div>
    );
  }
}

export default MetaFormGroup;
