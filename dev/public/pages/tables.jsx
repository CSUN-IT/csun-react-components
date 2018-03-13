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

  const propTypesTitle = '\n\nProp Types:\n';
  const propTypes = `  className: PropTypes.string,
  header: PropTypes.arrayOf(PropTypes.string).isRequired,
  dataCells: PropTypes.arrayOf(PropTypes.string).isRequired,`;

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
      <pre>
        <code>
          {importCode}
          {code}
          <div className="type--dark-gray">
            <strong>{propTypesTitle}</strong>
            {propTypes}
          </div>
        </code>
      </pre>
      <strong>Prop Types</strong>
      <MetaTable
        headerCells={['Name', 'Type', 'Required']}
        dataCells={[
          'className',
          'String',
          'No',
          'Header',
          'Array',
          'Yes',
          'dataCells',
          'Array',
          'Yes',
        ]}
      />
    </MetaContainer>
  );
};

export default DocTables;
