import React from 'react';
import { shallow, mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
import WebSidebar from '../../src/components/web/Sidebar';

configure({ adapter: new Adapter() });

describe('WebSidebar', () => {
  it('Should be defined', () => {
    expect(WebSidebar).toBeDefined();
  });

  it('Renders component correctly', () => {
    const tree = shallow(
      <WebSidebar>
        <h3> Test Header </h3>
        <h4> Test Title </h4>
        <p> Example paragraph for WebSidebar component. </p>
      </WebSidebar>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Renders children correctly', () => {
    const tree = mount(
      <div>
        <WebSidebar>
          <h3> Test Header </h3>
          <h3> Test Title </h3>
        </WebSidebar>
      </div>,
    );
    expect(tree.find('h3')).toHaveLength(2);
  });
});
