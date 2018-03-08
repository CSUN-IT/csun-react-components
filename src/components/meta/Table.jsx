import React from 'react';
import PropTypes from 'prop-types';

const MetaTable = (props) => {
  const className = props.className ? `table-responsive ${props.className}` : 'table-responsive';
  const tableHead = [];
  const numColumns = props.header.length;
  for (let i = 0; i < props.header.length; i += 1) {
    tableHead.push(<th key={i}>{props.header[i]}</th>);
  }
  const tableBody = [];
  for (let i = 0; i < props.column.length / numColumns; i += 1) {
    const rowItems = [];
    for (let j = 0; j < numColumns; j += 1) {
      rowItems.push(<td>{props.column[i * numColumns + j]}</td>);
    }
    tableBody.push(<tr>{rowItems}</tr>);
    /*
    if (props.column[i] === '\n') {
      tableBody.push(
        <tr key={i + 1}>
          <td>{props.column[i + 1]}</td>
          <td>{props.column[i + 2]}</td>
          <td>{props.column[i + 3]}</td>
        </tr>,
      );
    } else {
      tableBody.push(<td key={i}>{props.column[i]}</td>);
    }
    */
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
  header: PropTypes.arrayOf(PropTypes.string).isRequired,
  column: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default MetaTable;
