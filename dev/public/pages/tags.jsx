import React from 'react';
import { MetaContainer, MetaColumn, MetaTable, MetaRow, MetaTag } from '../../../src';

const DocTags = () => {
  const code = `import MetaTag from 'csun-react-components';

<MetaTag text={'Warning'} action={'close'} to={'#'} color={'warning'} />
    `;

  return (
    <MetaContainer>
      <MetaRow>
        <MetaColumn sizes={['sm']} values={['9']}>
          <h1>Tags</h1>
          <hr />
          <p>
            <span>Tag Cloud: </span>
            <MetaTag className={'test'} text={'When'} action={'close'} to={'#'} />
            <MetaTag text={'A'} action={'close'} to={'#'} />
            <MetaTag text={'Problem'} action={'close'} to={'#'} />
            <MetaTag text={'Comes'} action={'close'} to={'#'} />
            <MetaTag text={'Along'} action={'close'} to={'#'} />
            <MetaTag text={'You'} action={'close'} to={'#'} />
            <MetaTag text={'Must'} action={'close'} to={'#'} />
            <MetaTag text={'Whip It'} action={'close'} to={'#'} />
          </p>
          <p>
            <span>Status: </span>
            <MetaTag text={'Approved'} action={'close'} to={'#'} color={'success'} />
            <MetaTag text={'Pending'} action={'close'} to={'#'} color={'warning'} />
            <MetaTag text={'Error'} action={'close'} to={'#'} color={'danger'} />
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
              'No',
              '',
              'color',
              'oneOf',
              'No',
              "success, warning, danger, or ' '",
              'action',
              'oneOf',
              'No',
              "close, or ' '",
              'to',
              'String',
              'Yes',
              '',
            ]}
          />
        </MetaColumn>
      </MetaRow>
    </MetaContainer>
  );
};

export default DocTags;
