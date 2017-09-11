import React, { Component } from 'react';
import './sass/_chatBubble.scss';

class MetaChatBubble extends Component {
  render() {
    const bubbleStyle = this.props.receiver ? 'bubble receiver' : 'bubble sender';
    const alignmentStyle = this.props.receiver ? 'bubble-container-left' : 'bubble-container-right';
    return (
      <div className={alignmentStyle}>
        <p className={bubbleStyle} dangerouslySetInnerHTML={{ __html: this.props.text }} />
      </div>
    );
  }
}

MetaChatBubble.defaultProps = {
  text: '',
  receiver: true,
};

MetaChatBubble.propTypes = {
  text: React.PropTypes.string.isRequired,
  receiver: React.PropTypes.bool.isRequired,
};

export default MetaChatBubble;
