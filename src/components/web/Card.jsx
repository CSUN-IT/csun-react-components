import React from 'react';
import PropTypes from 'prop-types';
import { generate as shortIdGenerate } from 'shortid';
import { MetaButtonLink } from '../../../src';
import './sass/_webCard.scss';


const Card = (props) => {
  const title = props.title ? <h3 className="card-title">{props.title}</h3> : null;
  const contents = props.content ? <p className="card-copy">{props.content}</p> : null;
  const image = props.img ? <img className="card-img" src={props.img} alt={'alt text'} height={'100'} width={'300'} /> : null;
  const buttonArray = props.buttonArray ?
    props.buttonArray.map(button => {
      return (<MetaButtonLink text={button.title} color={'default'} size={''} to={button.link} key={shortIdGenerate()} />)
    })
    : null;

  return (
    props.linkTo ?
      <div>
        <a href={`${props.linkTo}`}>
          <div className={`${props.className}`}>
            {image}
            <div className="card-content">
              {title}
              {contents}
            </div>
          </div>
        </a>
        <div className="card-btn-wrapper">
          {buttonArray}
        </div>
      </div>
      :
      <div>
        <div className={`${props.className}`}>
          {image}
          <div className="card-content">
            {title}
            {contents}
          </div>
        </div>
        <div className="card-btn-wrapper">
          {buttonArray}
        </div>
      </div>
  );
};

Card.defaultProps = {
  className: 'chatbot-card',
  title: null,
  content: null,
  img: null,
  linkTo: null,
  buttonArray: null,
};

Card.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.string,
  img: PropTypes.string,
  linkTo: PropTypes.string,
  buttonArray: PropTypes.arrayOf(PropTypes.object),
};

export default Card;
