import React, { Component } from 'react';
import {
  MetaContainer,
  MetaColumn,
  MetaRow,
  MetaPrimaryNav,
} from '../../../src';

class DocPrimaryNav extends Component {
  render() {
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
  menuItems: React.PropTypes.arrayOf(React.PropTypes.shape({
    title: React.PropTypes.string.isRequired,
    to: React.PropTypes.string.isRequired,
    exact: React.PropTypes.bool,
  }),
  ),
  navColor: React.PropTypes.string,
  subBrand: React.PropTypes.shape({
    to: React.PropTypes.string.isRequired,
    title: React.PropTypes.string.isRequired,
  }),`;

    return (
      <MetaContainer>
        <MetaRow>
          <MetaColumn size={'sm'} value={'9'}>
            <MetaPrimaryNav subBrand={{title: 'CSUN React Components', to: ''}} navColor={'cream'} />
            <MetaPrimaryNav menuItems={menuItems} />
            <MetaPrimaryNav menuItems={menuItems} navColor={'black'} />
            <br />
            <pre>
              <code>
                { code }
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
  }
}

export default DocPrimaryNav;
