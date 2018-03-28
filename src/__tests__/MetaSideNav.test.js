import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
import MetaSideNav from '../../src/components/meta/SideNav';

configure({ adapter: new Adapter() });

describe('MetaSideNav', () => {
  it('Should be defined', () => {
    expect(MetaSideNav).toBeDefined();
  });

  it('Renders component correctly', () => {
    const tree = shallow(<MetaSideNav />);
    expect(tree).toMatchSnapshot();
  });
});
