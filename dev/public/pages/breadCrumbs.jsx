import React, { Component } from 'react';
import {
  MetaContainer,
  MetaColumn,
  MetaRow,
  MetaBreadcrumbs,
} from '../../../src';

class DocPrimaryNav extends Component {
  render() {
    const breadcrumbs = [
      {
        title: 'Home',
        to: '',
        home: true,
      },
      {
        title: 'IT',
        to: 'it',
      },
      {
        title: 'Giving',
      },
    ];

    const code = `import MetaBreadcrumbs from 'csun-react-components';

    const breadcrumbs = [
      {
        title: 'Home',
        to: '',
        home: true,
      },
      {
        title: 'IT',
        to: 'it',
      },
      {
        title: 'Giving',
      },
    ];
    
    <MetaBreadcrumbs breadcrumbItems={breadcrumbs} typecColor={'red'} />
    `;

    const propTypesTitle = '// Prop Types';
    const propTypes = `
  breadcrumbItems: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    to: PropTypes.string,
    home: PropTypes.bool,
    typeStyle: PropTypes.oneOf(typeStyles),
  }),
  ),
  typeColor: PropTypes.oneOf(typeColors),`;

    return (
      <MetaContainer>
        <MetaRow>
          <MetaColumn size={'sm'} value={'9'}>
            <MetaBreadcrumbs breadcrumbItems={breadcrumbs} typecColor={'red'} />
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
