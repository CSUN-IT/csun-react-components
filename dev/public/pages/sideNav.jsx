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

    const menuItemsFill = [
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
    const code = `import MetaSideNav from 'csun-react-components';

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

<MetaSideNav menuItems={menuItems} />
    `;

    const propTypesTitle = '// Prop Types';
    const propTypes = `
  menuItems: React.PropTypes.arrayOf(React.PropTypes.shape({
    title: React.PropTypes.string.isRequired,
    to: React.PropTypes.string.isRequired,
    exact: React.PropTypes.bool,
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