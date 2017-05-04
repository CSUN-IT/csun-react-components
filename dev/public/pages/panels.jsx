import React, { Component } from 'react';
import {
  MetaContainer,
  MetaColumn,
  MetaRow,
  MetaPanel,
} from '../../../src';

class DocPanels extends Component {
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
  panelHeader: React.PropTypes.shape({
    text: React.PropTypes.string.isRequired,
  }),
  panelImage: React.PropTypes.shape({
    imageURL: React.PropTypes.string.isRequired,
  }),
  panelContent: React.PropTypes.shape({
    text: React.PropTypes.string.isRequired,
  }).isRequired,
  panelFooter: React.PropTypes.shape({
    strongText: React.PropTypes.string,
    text: React.PropTypes.string.isRequired,
  }),`;

    return (
      <MetaContainer>
        <MetaRow>
          <MetaColumn size={'sm'} value={'9'}>
            <MetaPanel panelContent={{ text: 'This is a basic panel' }} />
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

export default DocPanels;
