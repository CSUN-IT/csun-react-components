import React from 'react';
import { MetaContainer, MetaColumn, MetaRow, MetaBreadcrumbs, MetaTable } from '../../../src';

const DocPrimaryNav = () => {
  const breadcrumbs = [
    {
      title: 'Home',
      to: '',
      home: true,
    },
    {
      title: 'IT',
      to: 'it',
    },
    {
      title: 'Giving',
    },
  ];

  const code = `import MetaBreadcrumbs from 'csun-react-components';

    const breadcrumbs = [
      {
        title: 'Home',
        to: '',
        home: true,
      },
      {
        title: 'IT',
        to: 'it',
      },
      {
        title: 'Giving',
      },
    ];
    
    <MetaBreadcrumbs breadcrumbItems={breadcrumbs} typecColor={'red'} />
    `;

  return (
    <MetaContainer>
      <MetaRow>
        <MetaColumn sizes={['sm']} values={['9']}>
          <h1>Breadcrumbs</h1>
          <hr />
          <MetaBreadcrumbs className={'test'} breadcrumbItems={breadcrumbs} typecColor={'red'} />
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
              'breadcrumbItems',
              'Array/Shape',
              'No',
              'Contains additional sub prop types.',
              'typeColor',
              'Type Color',
              'No',
              '',
            ]}
          />
          <strong>breadcrumbItems Prop Types</strong>
          <MetaTable
            headerCells={['Name', 'Type', 'Required', 'Additional Notes']}
            dataCells={[
              'title',
              'String',
              'Yes',
              '',
              'to',
              'String',
              'No',
              '',
              'home',
              'bool',
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

export default DocPrimaryNav;
