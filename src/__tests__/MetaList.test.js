import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
import shortid from 'shortid';
import MetaList from '../../src/components/meta/List';

configure({ adapter: new Adapter() });

describe('MetaList', () => {
  it('Should be defined', () => {
    expect(MetaList).toBeDefined();
  });

  it('Renders component correctly', () => {
    const listItems = [
      {
        text: 'Side Nav Link',
        to: '#',
      },
      {
        text: 'Side Nav Link',
        to: '#',
      },
      {
        text: 'Side Nav Link',
        to: '#',
      },
    ];

    shortid.generate = jest.fn(() => 0);

    const tree = shallow(
      <MetaList className={'test'} listItems={listItems} modifiers={['arrows', 'hover']} />,
    );
    expect(tree).toMatchSnapshot();
  });
});
