import React from 'react';
import { MetaContainer, MetaColumn, MetaRow, MetaTable, MetaPrimaryNav } from '../../../src';

const DocPrimaryNav = () => {
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
  const code = `import MetaPrimaryNav from 'csun-react-components';

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
    
    <MetaPrimaryNav menuitems={menuItems} navColor={'cream'}
    `;

  return (
    <MetaContainer>
      <MetaRow>
        <MetaColumn sizes={['sm']} values={['9']}>
          <h1>Nav</h1>
          <hr />
          <MetaPrimaryNav
            subBrand={{ title: 'CSUN React Components', to: '' }}
            navColor={'cream'}
          />
          <MetaPrimaryNav menuItems={menuItems} />
          <MetaPrimaryNav menuItems={menuItems} navColor={'black'} />
          <br />
          <strong>Example Code</strong>
          <pre>
            <code>{code}</code>
          </pre>
          <strong>Prop Types</strong>
          <MetaTable
            headerCells={['Name', 'Type', 'Required', 'Additional Notes']}
            dataCells={[
              'menuItems',
              'Array/Shape',
              'No',
              'Contains additional sub prop types.',
              'navColor',
              'String',
              'No',
              '',
              'subBrand',
              'Shape',
              'No',
              'Contains additional sub prop types.',
            ]}
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
            ]}
          />
          <strong>subBrand Prop Types</strong>
          <MetaTable
            headerCells={['Name', 'Type', 'Required', 'Additional Notes']}
            dataCells={['to', 'String', 'Yes', '', 'title', 'String', 'Yes', '']}
          />
        </MetaColumn>
      </MetaRow>
    </MetaContainer>
  );
};

export default DocPrimaryNav;
