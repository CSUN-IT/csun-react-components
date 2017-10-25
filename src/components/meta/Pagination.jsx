import React from 'react';
import PropTypes from 'prop-types';

const MetaPagination = () => (
  <ul className="pagination">
    <li className="disabled">
      <span>«</span>
    </li>
    <li className="active">
      <span>1</span>
    </li>
    <li>
      <a href="#2">2</a>
    </li>
    <li>
      <a href="#3">3</a>
    </li>
    <li>
      <a href="#4">4</a>
    </li>
    <li className="disabled">
      <span>...</span>
    </li>
    <li>
      <a href="">20</a>
    </li>
    <li>
      <a href="#21">21</a>
    </li>
    <li>
      <a href="#22" rel="next">
        »
      </a>
    </li>
  </ul>
);

MetaPagination.defaultProps = {
  endRange: null,
};

MetaPagination.propTypes = {
  startRange: PropTypes.shape({
    start: PropTypes.number.isRequired,
    end: PropTypes.number.isRequired,
  }).isRequired,
  endRange: PropTypes.shape({
    start: PropTypes.number.isRequired,
    end: PropTypes.number.isRequired,
  }),
  activeNumber: PropTypes.number.isRequired,
};

export default MetaPagination;
