import React from 'react';
import { shallow, mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
import MetaPanel from '../../src/components/meta/Panel';

configure({ adapter: new Adapter() });

describe('MetaPanel', () => {
  it('Should be defined', () => {
    expect(MetaPanel).toBeDefined();
  });

  it('Renders component correctly', () => {
    const tree = shallow(
      <MetaPanel
        panelHeader={{ text: 'Panel' }}
        panelContent={{ text: 'This is a panel w/ a header' }}
      />,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Renders children correctly', () => {
    const tree = mount(
      <MetaPanel
        panelHeader={{ text: 'Panel' }}
        panelContent={{ text: 'This is a panel w/ a header' }}
      />,
    );
    expect(tree.find(MetaPanel)).toHaveLength(1);
  });
});
