import React from 'react';
import { MetaContainer, MetaColumn, MetaRow, MetaAccordion } from '../../../src';

const DocAccordion = () => {
  const bodyItems = [
    {
      heading: 'Topic #1',
      body:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci ab eveniet cumque. Laborum, eveniet autem quae hic vitae corporis voluptates odio at culpa repellendus minus! Vitae architecto optio quae. Ad?',
    },
    {
      heading: 'Topic #2',
      body:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci ab eveniet cumque. Laborum, eveniet autem quae hic vitae corporis voluptates odio at culpa repellendus minus! Vitae architecto optio quae. Ad?',
    },
    {
      heading: 'Topic #3',
      body:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci ab eveniet cumque. Laborum, eveniet autem quae hic vitae corporis voluptates odio at culpa repellendus minus! Vitae architecto optio quae. Ad?',
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
  className: PropTypes.string,
  bodyItems: PropTypes.arrayOf(PropTypes.shape({
    heading: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  })).isRequired,`;

  return (
    <MetaContainer>
      <MetaRow>
        <MetaColumn size={'sm'} value={'9'}>
          <MetaAccordion bodyItems={bodyItems} />
          <br />
          <pre>
            <code>
              {code}
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
};

export default DocAccordion;
