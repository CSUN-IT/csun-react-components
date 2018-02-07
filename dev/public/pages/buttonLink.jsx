import React from 'react';
import { MetaContainer, MetaColumn, MetaRow, MetaButtonLink } from '../../../src';

const DocButtonLink = () => {
  const code = `import MetaButtonLink from 'csun-react-components';

<MetaButtonLink text={'Button'} color={'default'} size={''} to={''}/>
    `;

  const propTypesTitle = '// Prop Types';
  const propTypes = `
  className: PropTypes.string,
  href: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  color: PropTypes.oneOf([
    'default',
    'primary',
    'success',
  ]).isRequired,
  size: PropTypes.oneOf([
    'sm',
    'lg',
    '',
  ]),
  btnStyle: PropTypes.oneOf([
    'default-outline',
    'primary-outline',
    'success-outline',
    '',
  ]),`;

  return (
    <MetaContainer>
      <MetaRow>
        <MetaColumn sizes={['sm']} values={['9']}>
          <p>
            <MetaButtonLink text={'Home'} color={'default'} size={''} to={'/home'} />
            <MetaButtonLink text={'Breadcrumbs'} color={'primary'} size={''} to={'breadcrumbs'} />
            <MetaButtonLink text={'Nav'} color={'success'} size={''} to={'nav'} />
          </p>
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

export default DocButtonLink;
