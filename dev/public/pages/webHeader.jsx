import React from 'react';
import { MetaContainer, MetaColumn, MetaTable, MetaRow, WebHeader } from '../../../src';

const DocWebHeader = () => {
  const code = `import Webheader from 'csun-components';

      const menuItems = [
      {
        title: 'Home',
        to: '',
        exact: true,
      },
      {
        title: 'IT',
        to: 'it',
      },
      {
        title: 'Giving',
        to: 'giving',
      },
    ];
    const secondaryWordmark = {
      to: 'https://www.csun.edu/it',
      title: 'Information\nTechnology',
    };
  
    const tertiaryWordmark = {
      to: 'https://www.csun.edu/it',
      title: 'AI',
    };
    
    <WebHeader
      secondaryWordmark={secondaryWordmark}
      tertiaryWordmark={tertiaryWordmark}
      menuItems={menuItems}
    />
    `;

  const secondaryWordmark = {
    title: 'Information \nTechnology',
    to: '/it',
  };

  const tertiaryWordmark = {
    to: 'https://www.csun.edu/it',
    title: 'AI',
  };

  const menuItems = [
    {
      title: 'About IT',
      to: 'https://www.csun.edu/it/about',
      external: true,
    },
    {
      title: 'IT',
      to: 'it',
      external: true,
    },
    {
      title: 'Giving',
      to: 'giving',
      external: true,
    },
  ];

  return (
    <MetaContainer>
      <MetaRow>
        <MetaColumn sizes={['sm']} values={['9']}>
          <h1>Web Header</h1>
          <hr />
          <WebHeader
            secondaryWordmark={secondaryWordmark}
            tertiaryWordmark={tertiaryWordmark}
            menuItems={menuItems}
          />
          <br />
          <strong>Example Code</strong>
          <pre>
            <code>{code}</code>
          </pre>
          <strong>Prop Types</strong>
          <MetaTable
            headerCells={['Name', 'Type', 'Required', 'Additional Notes']}
            dataCells={[
              'id',
              'String',
              'No',
              '',
              'secondaryWordmark',
              'Shape',
              'No',
              'Contains additional sub prop types.',
              'tertiaryWordmark',
              'Shape',
              'No',
              'Contains additional sub prop types.',
              'menuItems',
              'Array/Shape',
              'No',
              'Contains additional sub prop types.',
            ]}
          />

          <strong>secondaryWordmark Prop Types</strong>
          <MetaTable
            headerCells={['Name', 'Type', 'Required', 'Additional Notes']}
            dataCells={['title', 'String', 'Yes', '', 'to', 'String', 'Yes', '']}
          />

          <strong>tertiaryWordmark Prop Types</strong>
          <MetaTable
            headerCells={['Name', 'Type', 'Required', 'Additional Notes']}
            dataCells={['title', 'String', 'Yes', '', 'to', 'String', 'Yes', '']}
          />

          <strong>menuItems Prop Types</strong>
          <MetaTable
            headerCells={['Name', 'Type', 'Required', 'Additional Notes']}
            dataCells={[
              'title',
              'String',
              'Yes',
              '',
              'to',
              'String',
              'Yes',
              '',
              'exact',
              'Boolean',
              'No',
              '',
              'external',
              'Boolean',
              'No',
              '',
            ]}
          />
        </MetaColumn>
      </MetaRow>
    </MetaContainer>
  );
};

export default DocWebHeader;
