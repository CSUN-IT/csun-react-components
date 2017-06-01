import React, { Component } from 'react';
import {
  MetaContainer,
  MetaColumn,
  MetaRow,
  MetaPanel,
} from '../../../src';

class DocTables extends Component {
  render() {
    const code = `import MetaTable from 'csun-react-components';

    const headerItems = [
      {
        headerTitle: 'Title 1',
      },
      {
        headerTitle: 'Title 2',
        headerStyle: ['italic'],
      },
      {
        headerTitle: 'Title 3',
        headerStyle: ['italic'],
      },
    ];

    const rows = [
      {
        row: [
          {
            text: 'Sample text',
            textStyle: ['strike', 'bold'],
          },
          {
            text: 'Another sample',
            textStyle: ['italic'],
          },
          {
            text: 'Beep Boop',
            textStyle: ['bold'],
          },
        ],
      },
    ];

<MetaTable headerItems={headerItems} bodyItems={rows} tableProperties={['padded', 'bordered', 'hover']} />
    `;

    const propTypesTitle = '// Prop Types';
    const propTypes = `

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
};`;

    return (
      <MetaContainer>
        <MetaRow>
          <MetaColumn size={'sm'} value={'9'}>
            <br />
            <pre>
              <code>
                { code }
                <div className="type--dark-gray">
                  <strong>{propTypesTitle}</strong>
                  {propTypes}
                </div>
              </code>
            </pre>
          </MetaColumn>
        </MetaRow>
      </MetaContainer>
    );
  }
}

export default DocTables;
