import React, { Component } from 'react';
import {
  MetaContainer,
  MetaColumn,
  MetaRow,
  MetaSubNav,
} from '../../../src';

class DocSubNav extends Component {
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

    const code = `import MetaSubNav from 'csun-react-components';

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

<MetaSubNav menuItems={menuItems} />
    `;

    const propTypesTitle = '// Prop Types';
    const propTypes = `
  menuItems: React.PropTypes.arrayOf(React.PropTypes.shape({
    title: React.PropTypes.string.isRequired,
    to: React.PropTypes.string.isRequired,
    active: React.PropTypes.bool.isRequired,
    typeStyle: React.PropTypes.oneOf(typeStyles),
  }),
  ),
  typeColor: React.PropTypes.oneOf(typeColors),`;

    return (
      <MetaContainer>
        <MetaRow>
          <MetaColumn size={'sm'} value={'9'}>
            <MetaSubNav menuItems={menuItems} />
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

export default DocSubNav;

