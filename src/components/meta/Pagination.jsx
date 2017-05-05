import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

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
  startRange: React.PropTypes.shape({
    start: React.PropTypes.number.isRequired,
    end: React.PropTypes.number.isRequired,
  }).isRequired,
  endRange: React.PropTypes.shape({
    start: React.PropTypes.number.isRequired,
    end: React.PropTypes.number.isRequired,
  }),
  activeNumber: React.PropTypes.number.isRequired,
};

export default MetaPagination;
