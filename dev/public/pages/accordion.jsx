import React, { Component } from 'react';
import {
  MetaContainer,
  MetaColumn,
  MetaRow,
  MetaAccordion,
} from '../../../src';

class DocAccordion extends Component {
  render() {
    const bodyItems = [
      {
        heading: 'Topic #1',
        body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci ab eveniet cumque. Laborum, eveniet autem quae hic vitae corporis voluptates odio at culpa repellendus minus! Vitae architecto optio quae. Ad?',
      },
      {
        heading: 'Topic #2',
        body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci ab eveniet cumque. Laborum, eveniet autem quae hic vitae corporis voluptates odio at culpa repellendus minus! Vitae architecto optio quae. Ad?',
      },
      {
        heading: 'Topic #3',
        body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci ab eveniet cumque. Laborum, eveniet autem quae hic vitae corporis voluptates odio at culpa repellendus minus! Vitae architecto optio quae. Ad?',
      },
    ];
    const code = `import MetaList from 'csun-react-components';

const bodyItems = [
  {
    heading: 'Topic #1',
    body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci ab eveniet cumque. Laborum, eveniet autem quae hic vitae corporis voluptates odio at culpa repellendus minus! Vitae architecto optio quae. Ad?',
  },
  {
    heading: 'Topic #2',
    body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci ab eveniet cumque. Laborum, eveniet autem quae hic vitae corporis voluptates odio at culpa repellendus minus! Vitae architecto optio quae. Ad?',
  },
  {
    heading: 'Topic #3',
    to: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci ab eveniet cumque. Laborum, eveniet autem quae hic vitae corporis voluptates odio at culpa repellendus minus! Vitae architecto optio quae. Ad?',
  },
];
<MetaAccordion bodyItems={bodyItems} />
    `;

    const propTypesTitle = '// Prop Types';
    const propTypes = `
  bodyItems: React.PropTypes.arrayOf(React.PropTypes.shape({
    heading: React.PropTypes.string.isRequired,
    body: React.PropTypes.string.isRequired,
  })).isRequired,`;

    return (
      <MetaContainer>
        <MetaRow>
          <MetaColumn size={'sm'} value={'9'}>
            <MetaAccordion bodyItems={bodyItems} />
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

export default DocAccordion;
