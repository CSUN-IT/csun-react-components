import React from 'react';
import { shallow, mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
import shortid from 'shortid';
import MetaAccordion from '../../src/components/meta/Accordion';

configure({ adapter: new Adapter() });

describe('MetaAccordion', () => {
  it('Should be defined', () => {
    expect(MetaAccordion).toBeDefined();
  });

  it('Renders component correctly', () => {
    const bodyItems = [
      {
        heading: 'Topic #1',
        body:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci ab eveniet cumque. Laborum, eveniet autem quae hic vitae corporis voluptates odio at culpa repellendus minus! Vitae architecto optio quae. Ad?',
      },
      {
        heading: 'Topic #2',
        body:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci ab eveniet cumque. Laborum, eveniet autem quae hic vitae corporis voluptates odio at culpa repellendus minus! Vitae architecto optio quae. Ad?',
      },
      {
        heading: 'Topic #3',
        body:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci ab eveniet cumque. Laborum, eveniet autem quae hic vitae corporis voluptates odio at culpa repellendus minus! Vitae architecto optio quae. Ad?',
      },
    ];

    shortid.generate = jest.fn(() => 0);

    const tree = shallow(<MetaAccordion bodyItems={bodyItems} />);
    expect(tree).toMatchSnapshot();
  });
});
