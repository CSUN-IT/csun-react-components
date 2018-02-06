import React from 'react';
import PropTypes from 'prop-types';
import './sass/_webCard.scss';

const Card = (props) => {
  const title = props.title ? <h3>{props.title}</h3> : null;
  const contents = props.content ? <p>{props.content}</p> : null;
  const image = props.img ? <img src={props.img} alt={'alt text'} height={'100'} width={'300'} /> : null;
  const btn = props.linkTo ? (typeof props.linkTo === 'string' ? <a href={props.linkTo}>Button</a> : <a>Arr Button</a>) : null;
  return (
    <div className={`${props.className} cardz`}>
      {image}
      {title}
      {contents}
      {btn}
    </div>
  );
};

Card.defaultProps = {
  className: '',
  title: null,
  content: null,
  img: null,
  linkTo: null,
};

Card.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.string,
  img: PropTypes.string,
  linkTo: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)])
};

export default Card;
