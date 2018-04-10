import React from 'react';
import { shallow, mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
import { MetaFormField, MetaFormGroup } from '../../src';

configure({ adapter: new Adapter() });

describe('MetaFormGroup', () => {
  it('Should be defined', () => {
    expect(MetaFormGroup).toBeDefined();
  });

  it('Should be defined', () => {
    expect(MetaFormField).toBeDefined();
  });

  it('Renders component correctly', () => {
    const mockFn = jest.fn();
    const tree = shallow(
      <MetaFormGroup onSubmit={mockFn}>
        <MetaFormField
          field={{
            inputType: 'input',
            id: 'inputFied',
            placeholder: 'Type a message...',
            type: 'text',
            autoComplete: 'off',
            ariaLabel: 'input field',
          }}
          value={''}
        />
        <MetaFormField
          field={{
            inputType: 'textarea',
            id: 'textFied',
            placeholder: 'Type a message...',
            type: 'text',
            autoComplete: 'off',
          }}
          value={''}
        />
        <br />
        <MetaFormField
          field={{
            inputType: 'select',
            id: 'selectField',
            type: 'checkbox',
            selectOptions: [
              {
                value: '1',
                text: 'Example 1',
              },
              {
                value: '2',
                text: 'Example 2',
              },
            ],
          }}
          value={''}
        />
        <br />
        <MetaFormField
          field={{
            inputType: 'datepicker',
            id: 'datepicker',
            type: 'date',
          }}
          value={''}
        />
      </MetaFormGroup>,
    );
    expect(tree).toMatchSnapshot();
  });
});
