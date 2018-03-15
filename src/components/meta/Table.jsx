import React from 'react';
import PropTypes from 'prop-types';

const MetaTable = (props) => {
  const className = props.className ? `table-responsive ${props.className}` : 'table-responsive';
  const tableHead = [];
  const numColumns = props.headerCells.length;
  for (let i = 0; i < props.headerCells.length; i += 1) {
    tableHead.push(<th key={i}>{props.headerCells[i]}</th>);
  }
  const tableBody = [];
  for (let i = 0; i < props.dataCells.length / numColumns; i += 1) {
    const rowItems = [];
    for (let j = 0; j < numColumns; j += 1) {
      rowItems.push(<td key={i + j}>{props.dataCells[i * numColumns + j]}</td>);
    }
    tableBody.push(<tr key={i}>{rowItems}</tr>);
  }
  return (
    <div className={className}>
      <table className="table table--striped table--bordered table--padded table--hover">
        <tr>{tableHead}</tr>
        <tbody>{tableBody}</tbody>
      </table>
    </div>
  );
};

MetaTable.defaultProps = {
  className: '',
  header: [],
};

MetaTable.propTypes = {
  className: PropTypes.string,
  headerCells: PropTypes.arrayOf(PropTypes.string).isRequired,
  dataCells: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default MetaTable;
