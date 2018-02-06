import React from 'react';
import { MetaContainer, MetaColumn, MetaRow, WebCardList, WebCard } from '../../../src';

const DocCardList = (props) => {
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
  return (
    <MetaContainer>
      <MetaRow>
        <MetaColumn sizes={['sm']} values={['12']}>
          <h1>Cards</h1>
          <hr />
        </MetaColumn>
        <MetaColumn sizes={['sm']} values={['12']}>
          <WebCardList>
            <WebCard title={'Title'} content={'This here is content'} img={'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png'} />
          </WebCardList>
        </MetaColumn>
      </MetaRow>
    </MetaContainer>
  );
};

export default DocCardList;
