import React from 'react';
import { MetaContainer, MetaColumn, MetaRow, MetaTable, MetaButton } from '../../../src';

const DocButtons = () => {
  const code = `import MetaButton from 'csun-react-components';

<MetaButton text={'Button'} color={'default'} size={''} />
    `;

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
            <code>{code}</code>
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
              'oneOf',
              'Yes',
              'default, primary, success',
              'size',
              'oneOf',
              'no',
              "sm, lg, or ' '",
              'btnStyle',
              'oneOf',
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
