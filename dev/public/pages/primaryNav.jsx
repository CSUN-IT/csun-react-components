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
        active: true,
      },
      {
        title: 'IT',
        to: 'it',
        active: false,
      },
      {
        title: 'Giving',
        to: 'giving',
        active: false,
      },
    ];
    const code = `import MetaPrimaryNav from 'csun-react-components';

      const menuItems = [
      {
        title: 'Home',
        to: '',
        active: true,
      },
      {
        title: 'IT',
        to: 'it',
        active: false,
      },
      {
        title: 'Giving',
        to: 'giving',
        active: false,
      },
    ];
    
    <MetaPrimaryNav menuitems={menuItems} navColor={'cream'}
    `;

    const propTypesTitle = '// Prop Types';
    const propTypes = `
  menuItems: React.PropTypes.arrayOf(React.PropTypes.shape({
    title: React.PropTypes.string.isRequired,
    to: React.PropTypes.string.isRequired,
    active: React.PropTypes.bool.isRequired,
  }),
  ),
  navColor: React.PropTypes.string,`;

    return (
      <MetaContainer>
        <MetaRow>
          <MetaColumn size={'sm'} value={'9'}>
            <MetaPrimaryNav menuItems={menuItems} navColor={'cream'} />
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
