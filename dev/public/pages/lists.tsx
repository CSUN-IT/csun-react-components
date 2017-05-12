import React, { Component } from 'react';
import {
  MetaContainer,
  MetaColumn,
  MetaRow,
  MetaList,
} from '../../../src';

class DocLists extends Component {
  render() {
    const listItems = [
      {
        text: 'Side Nav Link',
        to: '#',
      },
      {
        text: 'Side Nav Link',
        to: '#',
      },
      {
        text: 'Side Nav Link',
        to: '#',
      },
    ];
    const code = `import MetaList from 'csun-react-components';

const listItems = [
  {
    text: 'Side Nav Link',
    to: '#',
  },
  {
    text: 'Side Nav Link',
    to: '#',
  },
  {
    text: 'Side Nav Link',
    to: '#',
  },
];

<MetaList listItems={listItems} modifiers={['arrows']} />
    `;

    const propTypesTitle = '// Prop Types';
    const propTypes = `
  listItems: React.PropTypes.arrayOf(React.PropTypes.shape({
    text: React.PropTypes.string.isRequired,
    to: React.PropTypes.string.isRequired,
  })),
  modifiers: React.PropTypes.arrayOf(React.PropTypes.oneOf([
    'arrows',
    'hover',
    'underlined',
  ])),`;

    return (
      <MetaContainer>
        <MetaRow>
          <MetaColumn size={'sm'} value={'9'}>
            <MetaColumn size={'sm'} value={'4'}>
              <MetaList listItems={listItems} />
            </MetaColumn>
            <MetaColumn size={'sm'} value={'4'}>
              <MetaList listItems={listItems} modifiers={['arrows']} />
            </MetaColumn>
            <MetaColumn size={'sm'} value={'4'}>
              <MetaList listItems={listItems} modifiers={['underlined']} />
            </MetaColumn>
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

export default DocLists;
