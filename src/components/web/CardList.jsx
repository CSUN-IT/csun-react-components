import React from 'react';
import PropTypes from 'prop-types';

const CardList = (props) => {

  return (
    <div>
      <div className={props.className}>
        {props.children}
      </div>
    </div>
  );
};

CardList.defaultProps = {
  className: 'card-list',
};

CardList.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default CardList;
