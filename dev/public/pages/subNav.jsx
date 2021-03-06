import React from 'react';
import { MetaContainer, MetaColumn, MetaRow, MetaTable, MetaSubNav } from '../../../src';

const DocSubNav = () => {
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

  const code = `import MetaSubNav from 'csun-react-components';

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

<MetaSubNav menuItems={menuItems} />
    `;

  return (
    <MetaContainer>
      <MetaRow>
        <MetaColumn sizes={['sm']} values={['9']}>
          <MetaSubNav className={'test'} menuItems={menuItems} />
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
              'menuItems',
              'Array/Shape',
              'No',
              'Contains additional sub prop types.',
              'typeColor',
              'Type Color',
              'No',
              '',
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
              'typeStyle',
              'Type Style',
              'No',
              '',
            ]}
          />
        </MetaColumn>
      </MetaRow>
    </MetaContainer>
  );
};

export default DocSubNav;
