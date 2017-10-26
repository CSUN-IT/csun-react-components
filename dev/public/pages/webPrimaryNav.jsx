import React from 'react';
import { MetaContainer, MetaColumn, MetaRow, WebPrimaryNav } from '../../../src';

const DocWebPrimaryNav = () => {
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
        <MetaColumn size={'sm'} value={'9'}>
          <WebPrimaryNav menuItems={menuItems} />
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

export default DocWebPrimaryNav;
