import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
import MetaSubNav from '../../src/components/meta/SubNav';

configure({ adapter: new Adapter() });

describe('MetaSubNav', () => {
  it('Should be defined', () => {
    expect(MetaSubNav).toBeDefined();
  });

  it('Renders component correctly', () => {
    const tree = shallow(<MetaSubNav />);
    expect(tree).toMatchSnapshot();
  });
});
