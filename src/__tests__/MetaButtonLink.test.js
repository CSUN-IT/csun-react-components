import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
import MetaButtonLink from '../../src/components/meta/ButtonLink';

configure({ adapter: new Adapter() });

describe('MetaButtonLink', () => {
  it('Should be defined', () => {
    expect(MetaButtonLink).toBeDefined();
  });

  it('Renders component correctly', () => {
    const mockLink = '/docs';
    const tree = shallow(
      <MetaButtonLink text={'Button'} color={'default'} size={'sm'} to={mockLink} />,
    );
    expect(tree).toMatchSnapshot();
  });
});
