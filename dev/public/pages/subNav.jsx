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

    const code = `import MetaSubNav from 'csun-react-components';

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

<MetaSubNav menuItems={menuItems} />
    `;

    const propTypesTitle = '// Prop Types';
    const propTypes = `
  menuItems: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
    exact: PropTypes.bool,
    typeStyle: PropTypes.oneOf(typeStyles),
  }),
  ),
  typeColor: PropTypes.oneOf(typeColors),`;

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

