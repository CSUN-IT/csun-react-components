import React, { Component } from 'react';
import './sass/_chatBubble.scss';

class MetaChatBubble extends Component {
  render() {
    const bubbleStyle = this.props.receiver ? 'bubble receiver' : 'bubble sender';
    return (
      <div className="bubble-container">
        <p className={bubbleStyle}>
          {this.props.text}
          <br />
          <span className="timeStamp">{this.props.subText}</span>
        </p>
      </div>
    );
  }
}

MetaChatBubble.defaultProps = {
  text: '',
  subText: '',
  receiver: true,
};

MetaChatBubble.propTypes = {
  text: React.PropTypes.string.isRequired,
  subText: React.PropTypes.string,
  receiver: React.PropTypes.bool.isRequired,
};

export default MetaChatBubble;