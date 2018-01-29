import React from 'react';
import { MetaContainer, MetaColumn, MetaRow } from '../../../src';

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

  const propTypesTitle = '// Prop Type for MetaColumn';
  const propTypes = `MetaColumn.defaultProps = {
    children: {},
    sizes: ['sm'],
    values: ['12'],
    className: '',
  };
  
  MetaColumn.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
    sizes: PropTypes.arrayOf(PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl'])),
    values: PropTypes.arrayOf(PropTypes.oneOf(['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'])),
  };`;

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
