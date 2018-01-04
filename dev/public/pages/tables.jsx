import React from 'react';
import { MetaContainer, MetaColumn, MetaRow, MetaTable } from '../../../src';

const DocTables = () => {
  const code = 'Code goes here';

  const propTypesTitle = '// Prop Types';
  const propTypes = 'Prop types goe here';

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
          <MetaTable test="It finally works" />
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
