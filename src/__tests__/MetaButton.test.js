import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
import renderer from 'react-test-renderer';
import MetaButton from '../../src/components/meta/Button';

configure({ adapter: new Adapter() });

describe('MetaButton', () => {
  it('Should be defined', () => {
    expect(MetaButton).toBeDefined();
  });

  it('Renders component correctly', () => {
    const tree = renderer
      .create(<MetaButton text={'Button'} color={'default'} size={'sm'} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Should call mock function when button is clicked', () => {
    const mockFn = jest.fn();
    const tree = shallow(<MetaButton onClick={mockFn} />);
    tree.simulate('click');
    expect(mockFn).toHaveBeenCalled();
  });
});
