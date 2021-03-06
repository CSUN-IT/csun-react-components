import React from 'react';
import { MetaContainer, MetaColumn, MetaRow, MetaTable } from '../../../src';

const DocGrid = () => {
  const code = `import { MetaContainer, MetaCoulumn, MetaRow } from 'csun-react-components';

<MetaContainer>
  <!-- Your Code Here -->
  <MetaRow>
    <!-- Your Code Here -->
    <MetaColumn sizes={['sm']} values={['9']}>
      <!-- Your Code here -->
    </MetaColumn>
  </MetaRow>
</MetaContainer>
    `;

  return (
    <MetaContainer>
      <MetaRow>
        <MetaColumn sizes={['sm']} values={['9']}>
          <h1>Grid System</h1>
          <hr />
          <MetaColumn className={'grid-outline'} sizes={['sm']} values={['12']}>
            12
          </MetaColumn>
          <MetaColumn className={'grid-outline'} sizes={['sm']} values={['1']}>
            1
          </MetaColumn>
          <MetaColumn className={'grid-outline'} sizes={['sm']} values={['11']}>
            11
          </MetaColumn>
          <MetaColumn className={'grid-outline'} sizes={['sm']} values={['2']}>
            2
          </MetaColumn>
          <MetaColumn className={'grid-outline'} sizes={['sm']} values={['10']}>
            10
          </MetaColumn>
          <MetaColumn className={'grid-outline'} sizes={['sm']} values={['3']}>
            3
          </MetaColumn>
          <MetaColumn className={'grid-outline'} sizes={['sm']} values={['9']}>
            9
          </MetaColumn>
          <MetaColumn className={'grid-outline'} sizes={['sm']} values={['4']}>
            4
          </MetaColumn>
          <MetaColumn className={'grid-outline'} sizes={['sm']} values={['8']}>
            8
          </MetaColumn>
          <MetaColumn className={'grid-outline'} sizes={['sm']} values={['5']}>
            5
          </MetaColumn>
          <MetaColumn className={'grid-outline'} sizes={['sm']} values={['7']}>
            7
          </MetaColumn>
          <MetaColumn className={'grid-outline'} sizes={['sm']} values={['6']}>
            6
          </MetaColumn>
          <MetaColumn className={'grid-outline'} sizes={['sm']} values={['6']}>
            6
          </MetaColumn>
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
              'children',
              'any',
              'Yes',
              'Requires having child elements/data within it.',
              'sizes',
              'Array/oneOf',
              'Yes',
              'xs, sm, md, lg, xl',
              'Values',
              'Array/oneOf',
              'Yes',
              '1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12',
            ]}
          />
        </MetaColumn>
      </MetaRow>
    </MetaContainer>
  );
};

export default DocGrid;
