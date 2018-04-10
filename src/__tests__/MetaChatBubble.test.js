import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
import shortid from 'shortid';
import MetaChatBubble from '../../src/components/web/ChatBubble';

configure({ adapter: new Adapter() });

describe('MetaChatBubble', () => {
  it('Should be defined', () => {
    expect(MetaChatBubble).toBeDefined();
  });

  it('Renders component correctly', () => {
    shortid.generate = jest.fn(() => 0);

    const tree = shallow(
      <MetaChatBubble
        className={'test'}
        text="Hey I'm Matty!\nHow can I help you"
        subText="This will be small"
        receiver
      />,
      <MetaChatBubble
        text="Hey I'm sending you this"
        subText="This will be small too."
        receiver={false}
      />,
    );
    expect(tree).toMatchSnapshot();
  });
});
