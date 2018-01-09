import React from 'react';
import { MetaContainer, MetaColumn, MetaRow, MetaTable, MetaTableHead, MetaTableRow, MetaTableCell, MetaTableHeaderCell, MetaTableBody } from '../../../src';

const DocTables = () => {
  const importCode = `import { MetaTable, MetaTableHead, MetaTableRow, MetaTableBody, MetaTableHeaderCell, MetaTableCell } from csun-react-components\n`;
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
        <MetaColumn size={'sm'} value={'12'}>
          <h1>Tables</h1>
          <hr />
        </MetaColumn>
      </MetaRow>
      <MetaRow>
        <MetaColumn size={'sm'} value={'9'}>
          <MetaTable>
            <MetaTableHead>
              <MetaTableRow>
                <MetaTableHeaderCell>Hello</MetaTableHeaderCell>
                <MetaTableHeaderCell>World</MetaTableHeaderCell>
              </MetaTableRow>
            </MetaTableHead>
            <MetaTableBody>
              <MetaTableRow>
                <MetaTableCell>Foo</MetaTableCell>
                <MetaTableCell>Bar</MetaTableCell>
              </MetaTableRow>
            </MetaTableBody>
          </MetaTable>
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
