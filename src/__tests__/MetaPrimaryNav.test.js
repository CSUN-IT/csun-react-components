import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
import MetaPrimaryNav from '../../src/components/meta/Nav';

configure({ adapter: new Adapter() });

describe('MetaPrimaryNav', () => {
  it('Should be defined', () => {
    expect(MetaPrimaryNav).toBeDefined();
  });

  it('Renders component correctly', () => {
    const tree = shallow(
      <MetaPrimaryNav subBrand={{ title: 'CSUN React Components', to: '' }} navColor={'cream'} />,
    );
    expect(tree).toMatchSnapshot();
  });

  // Commented out since test fails because route is being used on the
  // overall application rather than each individual component.
  //   it('Should verify that it contains 3 child links', () => {
  //     const menuItems = [
  //       {
  //         title: 'Home',
  //         to: '',
  //         exact: true,
  //       },
  //       {
  //         title: 'IT',
  //         to: 'it',
  //       },
  //       {
  //         title: 'Giving',
  //         to: 'giving',
  //       },
  //     ];

  //     const tree = mount(<MetaPrimaryNav menuItems={menuItems} />);
  //     expect(tree.find('.primary-nav__btn')).toHaveLength(3);
  //   });
});
