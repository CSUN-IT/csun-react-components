import React from 'react';
import PropTypes from 'prop-types';
import './sass/_webCard.scss';

const Card = (props) => {
  const title = props.title ? <h3>{props.title}</h3> : null;
  const contents = props.content ? <p>{props.content}</p> : null;
  const image = props.img ? <img src={props.img} alt={'alt text'} height={'100'} width={'300'} /> : null;

  const createButtons = (obj) => {
    return Array.isArray(obj) ?
      obj.map(lnk => <a className={'btn btn-default'} href={lnk.link}> {lnk.title}</a>) : <a href={obj.link} > {obj.title}</a>;
  };

  const buttons = createButtons(props.linkTo);


  return (
    <div className={`${props.className}`}>
      {image}
      {title}
      {contents}
      {buttons}
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
  linkTo: PropTypes.oneOfType([PropTypes.object, PropTypes.arrayOf(PropTypes.object)]),
};

export default Card;
