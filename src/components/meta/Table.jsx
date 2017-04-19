import React, { Component } from 'react';

class MetaTable extends Component {
  render() {
    const headerRow = this.props.columns.map(column => <th>{column.headerTitle}</th>);
    //const bodyRow = this.props.columns.map((column) => { test = column.items.map(item => <tr><td>{item}</td></tr>); return test; });
    const test = this.props.columns.map(column => column.items);
    console.table(test);
    const newArray = test[0].map((col, i) => test.map(row => row[i]));

    console.table(newArray);

    const bodyRow = newArray.map(row => <tr>{row.map(item => <td>{item}</td>)}</tr>);
    //const bodyRow = this.props.columns.map(column => <tr>{ newArray.map(item => <td>{item}</td>)}</tr>);








    const tableClassName = `table${this.props.tableProperties ?
      (this.props.tableProperties.map(style => ` table--${style}`)).join('') : ''}`;
    return (
      <div className="table--responsive">
        <table className={tableClassName}>
          {
            <thead>
              <tr>
                {headerRow}
              </tr>
            </thead>
          }
          {
            <tbody>
              {bodyRow}
            </tbody>
          }
        </table>
      </div>
    );
  }
}

MetaTable.defaultProps = {
  tableProperties: undefined,
};

MetaTable.propTypes = {
  columns: React.PropTypes.arrayOf(
    React.PropTypes.shape({
      headerTitle: React.PropTypes.string.isRequired,
      items: React.PropTypes.arrayOf(React.PropTypes.string.isRequired),
    }).isRequired,
  ),
  tableProperties: React.PropTypes.arrayOf(React.PropTypes.oneOf([
    'striped',
    'bordered',
    'padded',
    'hover',
  ])),
};

export default MetaTable;
