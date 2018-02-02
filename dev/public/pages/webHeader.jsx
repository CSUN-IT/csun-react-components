import React from 'react';
import { MetaContainer, MetaColumn, MetaRow, WebHeader } from '../../../src';

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

  const propTypesTitle = '// Prop Types';
  const propTypes = `
  WebHeader.defaultProps = {
    secondaryWordmark: null,
    tertiaryWordmark: null,
    showMobileNav: false,
    menuItems: null,
    id: null,
  };
  
  WebHeader.propTypes = {
    id: PropTypes.string,
    secondaryWordmark: PropTypes.shape({
      title: PropTypes.string.isRequired,
      to: PropTypes.string.isRequired,
    }),
    tertiaryWordmark: PropTypes.shape({
      title: PropTypes.string.isRequired,
      to: PropTypes.string.isRequired,
    }),
    menuItems: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        to: PropTypes.string.isRequired,
        exact: PropTypes.bool,
        external: PropTypes.bool,
      }),
    ),
  }`;

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
          <WebHeader
            secondaryWordmark={secondaryWordmark}
            tertiaryWordmark={tertiaryWordmark}
            menuItems={menuItems}
          />
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

export default DocWebHeader;
