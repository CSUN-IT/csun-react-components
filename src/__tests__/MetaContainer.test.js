import React from 'react';
import { shallow, mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
import { MetaContainer, MetaColumn, MetaRow } from '../../src';

configure({ adapter: new Adapter() });

describe('MetaContainer', () => {
  it('Should be defined', () => {
    expect(MetaContainer).toBeDefined();
  });

  it('Renders component correctly', () => {
    const tree = shallow(
      <MetaContainer id={'containerId'} className={'containerClass'}>
        <MetaRow>
          <MetaColumn sizes={['sm']} values={['4']}>
            1
          </MetaColumn>
        </MetaRow>
      </MetaContainer>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Renders children correctly', () => {
    const tree = mount(
      <MetaContainer>
        <MetaRow>
          <MetaColumn sizes={['sm']} values={['4']}>
            1
          </MetaColumn>
          <MetaColumn sizes={['sm']} values={['4']}>
            2
          </MetaColumn>
        </MetaRow>
      </MetaContainer>,
    );
    expect(tree.find(MetaColumn)).toHaveLength(2);
  });
});
