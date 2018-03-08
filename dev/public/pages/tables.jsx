import React from 'react';
import {
  MetaContainer,
  MetaColumn,
  MetaRow,
  MetaTable,
  MetaTableHead,
  MetaTableRow,
  MetaTableCell,
  MetaTableHeaderCell,
  MetaTableBody,
} from '../../../src';

const DocTables = () => {
  const importCode =
    'import { MetaTable, MetaTableHead, MetaTableRow, MetaTableBody, MetaTableHeaderCell, MetaTableCell } from csun-react-components\n';
  const code = `\n\n<MetaTable>
  <MetaTableHead>
    <MetaTableRow>
      <MetaTableHeaderCell> Hello </MetaTableHeaderCell>
      <MetaTableHeaderCell> World </MetaTableHeaderCell>
    </MetaTableRow>
  </MetaTableHead>
  <MetaTableBody>
    <MetaTableRow>
      <MetaTableCell> Foo </MetaTableCell>
      <MetaTableCell> Bar </MetaTableCell>
    </MetaTableRow>
  </MetaTableBody>
</MetaTable>`;

  const propTypesTitle = '\n\nProp Types:\n';
  const propTypes = `  className: PropTypes.string,
  header: PropTypes.arrayOf(PropTypes.string),
  body: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string).isRequired).isRequired,`;

  return (
    <MetaContainer>
      <MetaRow>
        <MetaColumn sizes={['sm']} values={['12']}>
          <h1>Tables</h1>
          <hr />
        </MetaColumn>
      </MetaRow>
      <MetaRow>
        <MetaColumn sizes={['sm']} values={['9']}>
          <MetaTable
            header={['Test Header', 'Test Header 2', 'Test Header 3', 'Test Header 4']}
            column={[
              'Test Child',
              'Test Child 2',
              'Test Child 3',
              'Test Child 4',
              'Test Child 5',
              'Test Child 6',
              'Test Child 7',
              'Test Child 8',
              'Test Child 9',
              'Test Child 10',
              'Test Child 11',
              'Test Child 12',
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
        </MetaColumn>
      </MetaRow>
    </MetaContainer>
  );
};

export default DocTables;
