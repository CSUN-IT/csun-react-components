import React from 'react';
import { MetaContainer, MetaColumn, MetaRow, MetaTable, MetaButton } from '../../../src';

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
          <strong>Example Code</strong>
          <pre>
            <code>
              {code}
              <div className="type--dark-gray">
                <strong>{propTypesTitle}</strong>
                {propTypes}
              </div>
            </code>
          </pre>
          <strong>Prop Types</strong>
          <MetaTable
            headerCells={['Name', 'Type', 'Required', 'Additional Notes']}
            dataCells={[
              'className',
              'String',
              'No',
              '',
              'text',
              'String',
              'Yes',
              '',
              'color',
              'String',
              'Yes',
              'default, primary, success',
              'size',
              'String',
              'no',
              "sm, lg, or ' '",
              'btnStyle',
              'String',
              'No',
              "default-outline, primary-outline, success-outline, or ' '",
            ]}
          />
        </MetaColumn>
      </MetaRow>
    </MetaContainer>
  );
};

export default DocButtons;
