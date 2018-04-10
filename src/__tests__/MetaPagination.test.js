import React from 'react';
import { shallow, mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
import MetaPagination from '../../src/components/meta/Pagination';

configure({ adapter: new Adapter() });

describe('MetaPagination', () => {
  it('Should be defined', () => {
    expect(MetaPagination).toBeDefined();
  });

  it('Renders component correctly', () => {
    const startRange = {
      start: 1,
      end: 2,
    };
    const tree = shallow(<MetaPagination startRange={startRange} activeNumber={2} />);
    expect(tree).toMatchSnapshot();
  });
});
