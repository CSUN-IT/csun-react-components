import React from 'react';
import { MetaContainer, MetaColumn, MetaRow, MetaTable } from '../../../src';

const DocTables = () => {
  const importCode = 'import { MetaTable } from csun-react-components\n';
  const code = `<MetaTable
  headerCells={['Test Header', 'Test Header 2']}
  dataCells={[
    'Test Child',
    'Test Child 2',
    'Test Child 3',
    'Test Child 4',
    'Test Child 5',
    'Test Child 6',
  ]}
/>`;

  return (
    <MetaContainer>
      <MetaRow>
        <MetaColumn sizes={['sm']} values={['12']}>
          <h1>Tables</h1>
          <hr />
        </MetaColumn>
      </MetaRow>
      <MetaTable
        headerCells={['Test Header', 'Test Header 2']}
        dataCells={[
          'Test Child',
          'Test Child 2',
          'Test Child 3',
          'Test Child 4',
          'Test Child 5',
          'Test Child 6',
        ]}
      />
      <br />
      <strong>Example Code</strong>
      <pre>
        <code>
          {importCode}
          {code}
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
          'headerCells',
          'Array',
          'Yes',
          '',
          'dataCells',
          'Array',
          'Yes',
          '',
        ]}
      />
    </MetaContainer>
  );
};

export default DocTables;
