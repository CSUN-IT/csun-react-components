import React from 'react';
import PropTypes from 'prop-types';
import { generate as shortIdGenerate } from 'shortid';
import './sass/_chatBubble.scss';

const MetaChatBubble = (props) => {
  const bubbleStyle = props.receiver ? 'bubble receiver' : 'bubble sender';
  const alignmentStyle = `${props.className} ${props.receiver
    ? 'bubble-container bubble-container--left'
    : 'bubble-container bubble-container--right'}`;
  const paragraphs = props.text.split(/\\n|\n/).map(sentence => <p key={shortIdGenerate()}>{sentence}</p>);
  return (
    <div className={alignmentStyle}>
      <div className={bubbleStyle}>
        {paragraphs}
      </div>
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
