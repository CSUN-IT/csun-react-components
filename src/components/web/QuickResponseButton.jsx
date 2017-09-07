import React, { Component } from 'react';
import './sass/_quickResponse.scss';

class QuickResponseButton extends Component {
  constructor() {
    super();
    this.state = {
      value: null,
    };
  }

  render() {
    const button = this.props.button;

    return (
      <button role="button" className="quickResponse" onClick={() => console.log(button)}>
        {button.title}
      </button>
    );
  }
}

QuickResponseButton.defaultProps = {
  items: React.PropTypes.object,
};

export default QuickResponseButton;
