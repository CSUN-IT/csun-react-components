import React, { Component } from 'react';
import './sass/_chatBubble.scss';

const styles = {
  mainText: {
    margin: 0,
  },

  timeStamp: {
    fontSize: 10,
    margin: 0,
  },

};

class MetaChatBubble extends Component {
  render() {
    const bubbleStyle = this.props.receiver ? 'bubble bot' : 'bubble you';
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
  subtext: '',
  receiver: true,
};

MetaChatBubble.propTypes = {
  text: React.PropTypes.string.isRequired,
  subText: React.PropTypes.string.isRequired,
  receiver: React.PropTypes.bool.isRequired,
};


export default MetaChatBubble;
