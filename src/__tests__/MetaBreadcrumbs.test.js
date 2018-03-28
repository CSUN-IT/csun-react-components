import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
import shortid from 'shortid';
import MetaBreadcrumbs from '../../src/components/meta/Breadcrumbs';

configure({ adapter: new Adapter() });

describe('MetaBreadcrumbs', () => {
  it('Should be defined', () => {
    expect(MetaBreadcrumbs).toBeDefined();
  });

  it('Renders component correctly', () => {
    const breadcrumbs = [
      {
        title: 'Home',
        to: '',
        home: true,
      },
      {
        title: 'IT',
        to: 'it',
      },
      {
        title: 'Giving',
      },
    ];

    shortid.generate = jest.fn(() => 0);

    const tree = shallow(
      <MetaBreadcrumbs className={'test'} breadcrumbItems={breadcrumbs} typecColor={'red'} />,
    );
    expect(tree).toMatchSnapshot();
  });
});
