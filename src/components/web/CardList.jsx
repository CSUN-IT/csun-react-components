import React from 'react';
import PropTypes from 'prop-types';

const CardList = (props) => {
  return (
    <div className={props.className}>
      {props.children}
    </div>
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
