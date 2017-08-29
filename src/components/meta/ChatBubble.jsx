import React, { Component } from 'react';
import './css/ChatBubble.css';

const styles = {

  senderStyle: {
    backgroundColor: '#D00D2D',
    color: '#fff',
    width: '20%',
    borderRadius: 5,
    padding: 10,
  },

  receiverStyle: {
    backgroundColor: '#a9aba9',
    color: '#333',
    width: '20%',
    borderRadius: 5,
    padding: 10,
  },

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
    const chatStyle = this.props.receiver ? styles.receiverStyle : styles.senderStyle;
    return (
      <div className="bubble-container">
        <p className="bubble me">{this.props.text}</p>
        {/*<p className="bubble me">{this.props.subText}</p>*/}
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
