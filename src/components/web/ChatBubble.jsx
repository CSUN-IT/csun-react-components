import React from 'react';
import PropTypes from 'prop-types';
import './sass/_chatBubble.scss';

const MetaChatBubble = (props) => {
  const bubbleStyle = props.receiver ? 'bubble receiver' : 'bubble sender';
  const alignmentStyle = `${props.className} ${props.receiver
    ? 'bubble-container bubble-container--left'
    : 'bubble-container bubble-container--right'}`;
  return (
    <div className={alignmentStyle}>
      <p className={bubbleStyle}>{props.text}</p>
    </div>
  );
};

MetaChatBubble.defaultProps = {
  className: '',
  text: '',
  subText: '',
  receiver: true,
};

MetaChatBubble.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string.isRequired,
  receiver: PropTypes.bool.isRequired,
};

export default MetaChatBubble;
