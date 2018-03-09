import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
import shortid from 'shortid';
import WebHeader from '../../src/components/web/Header';

configure({ adapter: new Adapter() });

describe('WebHeader', () => {
  it('Should be defined', () => {
    expect(WebHeader).toBeDefined();
  });

  it('Renders component correctly', () => {
    const secondaryWordmark = {
      title: 'Information \nTechnology',
      to: '/it',
    };

    const tertiaryWordmark = {
      to: 'https://www.csun.edu/it',
      title: 'AI',
    };

    const menuItems = [
      {
        title: 'About IT',
        to: 'https://www.csun.edu/it/about',
        external: true,
      },
      {
        title: 'IT',
        to: 'it',
        external: true,
      },
      {
        title: 'Giving',
        to: 'giving',
        external: true,
      },
    ];

    shortid.generate = jest.fn(() => 0);

    const tree = shallow(
      <WebHeader
        secondaryWordmark={secondaryWordmark}
        tertiaryWordmark={tertiaryWordmark}
        menuItems={menuItems}
      />,
    );
    expect(tree).toMatchSnapshot();
  });
});
