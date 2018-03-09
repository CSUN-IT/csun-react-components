import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
import MetaAlert from '../../src/components/meta/Alert';

configure({ adapter: new Adapter() });

describe('MetaAlert', () => {
  it('Should be defined', () => {
    expect(MetaAlert).toBeDefined();
  });

  it('Renders component correctly', () => {
    const mockFn = jest.fn();
    const tree = shallow(
      <MetaAlert
        color={'success'}
        strongText={'Pro Tip:'}
        text={'Color is success'}
        onClick={mockFn}
      />,
    );
    expect(tree).toMatchSnapshot();
  });
});
