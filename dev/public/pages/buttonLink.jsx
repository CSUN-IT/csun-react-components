import React from 'react';
import { MetaContainer, MetaColumn, MetaTable, MetaRow, MetaButtonLink } from '../../../src';

const DocButtonLink = () => {
  const code = `import MetaButtonLink from 'csun-react-components';

<MetaButtonLink text={'Button'} color={'default'} size={''} to={''}/>
    `;

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
              'href',
              'String',
              'Yes',
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
              'oneOf',
              'No',
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

export default DocButtonLink;
