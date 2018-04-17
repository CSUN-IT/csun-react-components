import React from 'react';
import { MetaContainer, MetaColumn, MetaRow, MetaTable, MetaSideNav } from '../../../src';

const DocSideNav = () => {
  const menuItems = [
    {
      title: 'Link #1',
      to: '#',
    },
    {
      title: 'Link #2',
      to: '#',
    },
    {
      title: 'Link #3',
      to: '#',
    },
    {
      title: 'Link #4',
      to: '#',
    },
  ];

  const menuItemsFill = [
    {
      title: 'Link #1',
      to: '#',
    },
    {
      title: 'Link #2',
      to: '#',
    },
    {
      title: 'Link #3',
      to: '#',
    },
    {
      title: 'Link #4',
      to: '#',
    },
  ];
  const code = `import MetaSideNav from 'csun-react-components';

    const menuItems = [
      {
        title: 'Link #1',
        to: '#',
      },
      {
        title: 'Link #2',
        to: '#',
      },
      {
        title: 'Link #3',
        to: '#',
      },
      {
        title: 'Link #4',
        to: '#',
      },
    ];

<MetaSideNav menuItems={menuItems} />
    `;

  return (
    <MetaContainer>
      <MetaRow>
        <MetaColumn sizes={['sm']} values={['9']}>
          <h1>Side Nav</h1>
          <hr />
          <MetaColumn sizes={['sm']} values={['6']}>
            <MetaSideNav className={'test'} menuItems={menuItems} />
          </MetaColumn>
          <MetaColumn sizes={['sm']} values={['6']}>
            <MetaSideNav menuItems={menuItemsFill} />
          </MetaColumn>
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
              'Yes',
              '',
              'menuItems',
              'Array/Shape',
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
              'fill',
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

export default DocSideNav;
