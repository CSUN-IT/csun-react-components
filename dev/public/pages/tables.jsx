import React from 'react';
import { MetaContainer, MetaColumn, MetaRow, MetaTable, MetaTableHead, MetaTableRow, MetaTableCell, MetaTableHeaderCell, MetaTableBody } from '../../../src';

const DocTables = () => {
  const code = `import MetaTable from csun-react-components\n\n<MetaTable header={['Hello', 'World']} body={[['Foo', 'Bar'], ['Welcome', 'Back'], ['Aces', 'Clubs']]} />`;


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
                <MetaTableHeaderCell content="Hello" />
                <MetaTableHeaderCell content="World" />
              </MetaTableRow>
            </MetaTableHead>
            <MetaTableBody>
              <MetaTableRow>
                <MetaTableCell content="Foo" />
                <MetaTableCell content="Bar" />
              </MetaTableRow>
            </MetaTableBody>
          </MetaTable>
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

export default DocTables;
