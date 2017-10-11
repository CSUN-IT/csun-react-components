import React from 'react';
import { MetaContainer, MetaColumn, MetaRow } from '../../../src';

const DocGrid = () => {
  const code = `import { MetaContainer, MetaCoulumn, MetaRow } from 'csun-react-components';

<MetaContainer>
  <!-- Your Code Here -->
  <MetaRow>
    <!-- Your Code Here -->
    <MetaColumn size={'sm'} value={'9'}>
      <!-- Your Code here -->
    </MetaColumn>
  </MetaRow>
</MetaContainer>
    `;

  const propTypesTitle = '// Prop Type for MetaColumn';
  const propTypes = `
  children: PropTypes.node.isRequired,
  size: PropTypes.oneOf([
    'xs',
    'sm',
    'md',
    'lg',
    'xl',
  ]),
  value: PropTypes.oneOf([
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    '11',
    '12',
  ]),`;

  return (
    <MetaContainer>
      <MetaRow>
        <MetaColumn size={'sm'} value={'9'}>
          <div className={'grid--outline cf'}>
            <MetaColumn size={'sm'} value={'12'}>
              12
            </MetaColumn>
            <MetaColumn size={'sm'} value={'1'}>
              1
            </MetaColumn>
            <MetaColumn size={'sm'} value={'11'}>
              11
            </MetaColumn>
            <MetaColumn size={'sm'} value={'2'}>
              2
            </MetaColumn>
            <MetaColumn size={'sm'} value={'10'}>
              10
            </MetaColumn>
            <MetaColumn size={'sm'} value={'3'}>
              3
            </MetaColumn>
            <MetaColumn size={'sm'} value={'9'}>
              9
            </MetaColumn>
            <MetaColumn size={'sm'} value={'4'}>
              4
            </MetaColumn>
            <MetaColumn size={'sm'} value={'8'}>
              8
            </MetaColumn>
            <MetaColumn size={'sm'} value={'5'}>
              5
            </MetaColumn>
            <MetaColumn size={'sm'} value={'7'}>
              7
            </MetaColumn>
            <MetaColumn size={'sm'} value={'6'}>
              6
            </MetaColumn>
            <MetaColumn size={'sm'} value={'6'}>
              6
            </MetaColumn>
          </div>
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

export default DocGrid;
