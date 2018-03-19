import React from 'react';
import { shallow, mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
import MetaColumn from '../../src/components/meta/Column';

configure({ adapter: new Adapter() });

describe('MetaColumn', () => {
  it('Should be defined', () => {
    expect(MetaColumn).toBeDefined();
  });

  it('Renders component correctly', () => {
    const tree = shallow(
      <MetaColumn sizes={['sm']} values={['4']}>
        1
      </MetaColumn>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Renders children correctly', () => {
    const tree = mount(
      <div>
        <MetaColumn sizes={['sm']} values={['4']}>
          1
        </MetaColumn>
        <MetaColumn sizes={['sm']} values={['4']}>
          2
        </MetaColumn>
      </div>,
    );
    expect(tree.find(MetaColumn)).toHaveLength(2);
  });
});
