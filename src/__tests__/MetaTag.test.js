import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
import MetaTag from '../../src/components/meta/Tag';

configure({ adapter: new Adapter() });

describe('MetaTag', () => {
  it('Should be defined', () => {
    expect(MetaTag).toBeDefined();
  });

  it('Renders component correctly', () => {
    const tree = shallow(<MetaTag text={'Warning'} action={'close'} to={'#'} color={'warning'} />);
    expect(tree).toMatchSnapshot();
  });
});
