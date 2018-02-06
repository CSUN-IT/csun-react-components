import React from 'react';
import PropTypes from 'prop-types';

const Card = (props) => {
  const title = props.title ? <h3>{props.title}</h3> : null;
  const contents = props.content ? <p>{props.content}</p> : null;
  const image = props.img ? <img src={props.img} alt={'alt text'} height={'100'} width={'300'} /> : null;
  return (
    <div className={props.className}>
      {image}
      {title}
      {contents}
    </div>
  );
};

Card.defaultProps = {
  className: '',
  title: null,
  content: null,
  img: null,
};

Card.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.string,
  img: PropTypes.string,
};

export default Card;
