import React, { Component } from 'react';
import {
  MetaContainer,
  MetaColumn,
  MetaRow,
  MetaSideNav,
} from '../../../src';

class DocSideNav extends Component {
  render() {
    const menuItems = [
      {
        title: 'Link #1',
        to: '#',
        active: true,
      },
      {
        title: 'Link #2',
        to: '#',
        active: false,
      },
      {
        title: 'Link #3',
        to: '#',
        active: false,
      },
      {
        title: 'Link #4',
        to: '#',
        active: false,
      },
    ];

    const menuItemsFill = [
      {
        title: 'Link #1',
        to: '#',
        active: true,
        fill: true,
      },
      {
        title: 'Link #2',
        to: '#',
        active: false,
      },
      {
        title: 'Link #3',
        to: '#',
        active: false,
      },
      {
        title: 'Link #4',
        to: '#',
        active: false,
      },
    ];
    const code = `import MetaSideNav from 'csun-react-components';

    const menuItems = [
      {
        title: 'Link #1',
        to: '#',
        active: true,
      },
      {
        title: 'Link #2',
        to: '#',
        active: false,
      },
      {
        title: 'Link #3',
        to: '#',
        active: false,
      },
      {
        title: 'Link #4',
        to: '#',
        active: false,
      },
    ];

<MetaSideNav menuItems={menuItems} />
    `;

    const propTypesTitle = '// Prop Types';
    const propTypes = `
  menuItems: React.PropTypes.arrayOf(React.PropTypes.shape({
    title: React.PropTypes.string.isRequired,
    to: React.PropTypes.string.isRequired,
    active: React.PropTypes.bool.isRequired,
    fill: React.PropTypes.bool,
  }),
  ),`;

    return (
      <MetaContainer>
        <MetaRow>
          <MetaColumn size={'sm'} value={'9'}>
            <MetaColumn size={'sm'} value={'6'}>
              <MetaSideNav menuItems={menuItems} />
            </MetaColumn>
            <MetaColumn size={'sm'} value={'6'}>
              <MetaSideNav menuItems={menuItemsFill} />
            </MetaColumn>
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

export default DocSideNav;
