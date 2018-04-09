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

  const propTypesTitle = '// Prop Types';
  const propTypes = `
  className: PropTypes.string,
  breadcrumbItems: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    to: PropTypes.string,
    home: PropTypes.bool,
    typeStyle: PropTypes.oneOf(typeStyles),
  }),
  ),
  typeColor: PropTypes.oneOf(typeColors),`;

  return (
    <MetaContainer>
      <MetaRow>
        <MetaColumn sizes={['sm']} values={['9']}>
          <MetaBreadcrumbs className={'test'} breadcrumbItems={breadcrumbs} typecColor={'red'} />
          <br />
          <strong>Example Code</strong>
          <pre>
            <code>
              {code}
              <div className="type--dark-gray">
                <strong>{propTypesTitle}</strong>
                {propTypes}
              </div>
            </code>
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
