import React from 'react';
import { shallow, mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
import { MetaColumn, MetaRow } from '../../src';

configure({ adapter: new Adapter() });

describe('MetaRow', () => {
  it('Should be defined', () => {
    expect(MetaRow).toBeDefined();
  });

  it('Renders component correctly', () => {
    const tree = shallow(
      <MetaRow>
        <MetaColumn sizes={['sm']} values={['4']}>
          1
        </MetaColumn>
      </MetaRow>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Renders children correctly', () => {
    const tree = mount(
      <MetaRow>
        <MetaColumn sizes={['sm']} values={['4']}>
          1
        </MetaColumn>
        <MetaColumn sizes={['sm']} values={['4']}>
          2
        </MetaColumn>
      </MetaRow>,
    );
    expect(tree.find(MetaColumn)).toHaveLength(2);
  });
});
