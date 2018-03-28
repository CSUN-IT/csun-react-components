import React from 'react';
import { MetaContainer, MetaColumn, MetaRow, MetaButton } from '../../../src';

const DocButtons = () => {
  const code = `import MetaButton from 'csun-react-components';

<MetaButton text={'Button'} color={'default'} size={''} />
    `;

  const propTypesTitle = '// Prop Types';
  const propTypes = `
  className: PropTypes.string,
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
            <MetaButton text={'Button'} color={'default'} size={''} />
            <MetaButton text={'Button'} color={'primary'} size={''} />
            <MetaButton text={'Button'} color={'success'} size={''} />
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

export default DocButtons;
