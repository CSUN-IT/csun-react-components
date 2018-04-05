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

  const propTypesTitle = '// Prop Types';
  const propTypes = `
  menuItems: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
    exact: PropTypes.bool,
  }),
  ),
  navColor: PropTypes.string,
  subBrand: PropTypes.shape({
    to: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }),`;

  return (
    <MetaContainer>
      <MetaRow>
        <MetaColumn sizes={['sm']} values={['9']}>
          <MetaPrimaryNav
            subBrand={{ title: 'CSUN React Components', to: '' }}
            navColor={'cream'}
          />
          <MetaPrimaryNav menuItems={menuItems} />
          <MetaPrimaryNav menuItems={menuItems} navColor={'black'} />
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
              'menuItems',
              'Array',
              'Yes',
              'Contains additional sub prop types.',
              'navColor',
              'String',
              'No',
              '',
              'subBrand',
              'Shape',
              'Yes',
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
