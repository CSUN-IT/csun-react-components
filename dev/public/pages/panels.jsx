import React, { Component } from 'react';
import {
  MetaContainer,
  MetaColumn,
  MetaRow,
  MetaPanel,
} from '../../../src';

class DocPanels extends Component {
  render() {
    const panelObject = {
      header: 'Awesome Example Title',
      content: 'This is clearly example content.',
      footer: {
        text: 'This text is in the footer.',
      },
    };
    const code = `import MetaPanel from 'csun-react-components';
    
const panelObject = {
  header: 'Awesome Example Title',
  content: 'This is clearly example content.',
  footer: {
    text: 'This text is in the footer.'
  }

}

<MetaPanel panelObject={panelObject} />
    `;

    const propTypesTitle = '// Prop Types';
    const propTypes = `
  PanelObject: {
    header: React.PropTypes.string,
    content: React.PropTypes.string,
    imageURL: React.PropTypes.string,
    footer: React.PropTypes.shape({
      text: React.PropTypes.string,
      strongText: React.PropTypes.string
    }),
  }`;

    return (
      <MetaContainer>
        <MetaRow>
          <MetaColumn size={'sm'} value={'9'}>
            <MetaPanel panelObject={panelObject} />
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
