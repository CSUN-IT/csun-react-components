import React from 'react';
import './sass/_chatBubble.scss';

const MetaChatBubble = (props) => {
  const bubbleStyle = props.receiver ? 'bubble receiver' : 'bubble sender';
  const alignmentStyle = props.receiver ? 'bubble-container-left' : 'bubble-container-right';
  return (
    <div className={alignmentStyle}>
      <p className={bubbleStyle} dangerouslySetInnerHTML={{ __html: props.text }} />
    </div>
  );
};

MetaChatBubble.defaultProps = {
  text: '',
  subText: '',
  receiver: true,
};

MetaChatBubble.propTypes = {
  text: React.PropTypes.string.isRequired,
  receiver: React.PropTypes.bool.isRequired,
};

export default MetaChatBubble;
