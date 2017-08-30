import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

class MetaPagination extends Component {

  buildPagers(start, end) {
    
  }

  render() {
    const startRange = this.props.startRange;
    const startRangeStart = startRange.start;
    const startRangeEnd = startRange.end;


    return (
      <ul className="pagination">
        <li className="disabled"><span>«</span></li>
        <li className="active"><span>1</span></li>
        <li><a href="#">2</a></li>
        <li><a href="#">3</a></li>
        <li><a href="#">4</a></li>
        <li className="disabled"><span>...</span></li>
        <li><a href="">20</a></li>
        <li><a href="#">21</a></li>
        <li><a href="#" rel="next">»</a></li>
      </ul>
    );
  }
}

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
