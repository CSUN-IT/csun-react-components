import React, { Component } from 'react';
import { generate as shortIdGenerate } from 'shortid';
import { typeStyles, typeColors } from './commons/typographyStyles';


class MetaTable extends Component {
  render() {
    const tableClassName = `table${this.props.tableProperties ?
      (this.props.tableProperties.map(style => ` table--${style}`)).join('') : ''}`;
    return (
      <div className="table--responsive">
        <table className={tableClassName}>
          {
            <thead>
              <tr>
                {this.props.headerItems.map((header) => {
                  const tableHeaderclassName = `${header.headerStyle ? header.headerStyle.map(style => `type--${style} `).join('') : ''}`;
                  return (<th className={tableHeaderclassName}key={shortIdGenerate()}>{header.headerTitle}</th>);
                })
                }
              </tr>
            </thead>
          }
          {
            <tbody>
              {this.props.bodyItems.map((tableRow) => {
                return (
                  <tr key={shortIdGenerate()}>
                    {tableRow.row.map((textObject) => {
                      const tableCellClassName = `${textObject.textStyle ? textObject.textStyle.map(style => `type--${style} `).join('') : ''}`;
                      return (<td key={shortIdGenerate()} className={tableCellClassName}>{textObject.text}</td>);
                    })
                    }
                  </tr>
                );
              })
              }
            </tbody>
          }
        </table>
      </div>
    );
  }
}

MetaTable.defaultProps = {
  tableProperties: undefined,
  headerItems: {
    headerStyle: undefined,
  },
  bodyItems: {
    row: {
      textStyle: undefined,
    },
  },
};

MetaTable.propTypes = {
  headerItems: React.PropTypes.arrayOf(React.PropTypes.shape({
    headerTitle: React.PropTypes.string.isRequired,
    headerStyle: React.PropTypes.arrayOf(React.PropTypes.oneOf(typeStyles)),
  })).isRequired,

  bodyItems: React.PropTypes.arrayOf(React.PropTypes.shape({
    row: React.PropTypes.arrayOf(React.PropTypes.shape({
      text: React.PropTypes.string.isRequired,
      textStyle: React.PropTypes.arrayOf(React.PropTypes.oneOf(typeStyles)),
    })),
  })).isRequired,

  tableProperties: React.PropTypes.arrayOf(React.PropTypes.oneOf([
    'striped',
    'bordered',
    'padded',
    'hover',
  ])),
};

export default MetaTable;
