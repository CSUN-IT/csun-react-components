import React from 'react';
import PropTypes from 'prop-types';

const CardList = (props) => {
  return (
    <p>Hello this is a card list</p>
  );
};

CardList.defaultProps = {
  className: '',
};

CardList.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default CardList;
