import React, { Component } from 'react';

class MetaTable extends Component {
  render() {
    const headerRow = this.props.headerItems.map(title => <th>{title.title}</th>);
    // const bodyRow = this.props.bodyItems.map(body => <)
    const tableClassName = `table${this.props.tableProperties ?
      (this.props.tableProperties.map(style => ` table--${style}`)).join('') : ''}`;
    console.log(tableClassName);
    return (
      <div className="table--responsive">
        <table className={tableClassName}>
          {this.props.headerItems ?
            <thead>
              <tr>
                {headerRow}
                {/*<th>{this.props.headerItems[0].title}</th>*/}
              </tr>
            </thead>
            :
            ''
          }
          {this.props.bodyItems ?
            <tbody>
              <tr>
                <td>{this.props.bodyItems[0].text}</td>
              </tr>
            </tbody>
            :
            ''
          }
        </table>
      </div>
    );
  }
}

MetaTable.defaultProps = {
  headerItems: {},
  bodyItems: {},
  tableProperties: undefined,
};

MetaTable.propTypes = {
  column: React.PropTypes.arrayOf(React.PropTypes.shape({
    headerTitle: React.PropTypes.string.isRequired,
    items: React.PropTypes.arrayOf(React.PropTypes.string.isRequired),
  }),
  ),
  headerItems: React.PropTypes.arrayOf(React.PropTypes.object),
  bodyItems: React.PropTypes.arrayOf(React.PropTypes.object),
  tableProperties: React.PropTypes.arrayOf(React.PropTypes.oneOf([
    'striped',
    'bordered',
    'padded',
    'hover',
  ])),
};

export default MetaTable;
