import React from 'react';
import { MetaContainer, MetaColumn, MetaTable, MetaRow, MetaAccordion } from '../../../src';

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

  return (
    <MetaContainer>
      <MetaRow>
        <MetaColumn sizes={['sm']} values={['9']}>
          <MetaAccordion bodyItems={bodyItems} />
          <br />
          <strong>Example Code</strong>
          <pre>
            <code>{code}</code>
          </pre>
          <strong>Prop Types</strong>
          <MetaTable
            headerCells={['Name', 'Type', 'Required', 'Additional Notes']}
            dataCells={[
              'className',
              'String',
              'No',
              '',
              'bodyItems',
              'Array/Shape',
              'Yes',
              'Contains additional sub prop types.',
            ]}
          />

          <strong>bodyItems Prop Types</strong>
          <MetaTable
            headerCells={['Name', 'Type', 'Required', 'Additional Notes']}
            dataCells={['heading', 'String', 'Yes', '', 'body', 'String', 'Yes', '']}
          />
        </MetaColumn>
      </MetaRow>
    </MetaContainer>
  );
};

export default DocAccordion;
