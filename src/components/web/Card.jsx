import React from 'react';
import PropTypes from 'prop-types';

const Card = (props) => {
  return (
    <p>Hello this is a card.</p>
  );
};

Card.defaultProps = {
  className: '',
};

Card.propTypes = {
  className: PropTypes.string,
};

export default Card;
