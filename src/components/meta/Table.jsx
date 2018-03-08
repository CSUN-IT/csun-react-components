import React from 'react';
import PropTypes from 'prop-types';

const MetaTable = (props) => {
  const className = props.className ? `table-responsive ${props.className}` : 'table-responsive';
  const tableHead = [];
  for (let i = 0; i < props.header.length; i += 1) {
    tableHead.push(<th key={i}>{props.header[i]}</th>);
  }
  const tableBody = [];
  for (let i = 0; i < props.column.length; i += 1) {
    if (props.column[i] === '\n') {
      tableBody.push(
        <tr key={i + 1}>
          <td>{props.column[i + 1]}</td>
        </tr>,
      );
    } else {
      tableBody.push(<td key={i}>{props.column[i]}</td>);
    }
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
  header: PropTypes.arrayOf(PropTypes.string),
  column: PropTypes.arrayOf(PropTypes.string),
  children: PropTypes.node.isRequired,
};

export default MetaTable;
