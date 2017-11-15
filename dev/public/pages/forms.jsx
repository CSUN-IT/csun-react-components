import React from 'react';
import { MetaContainer, MetaColumn, MetaRow, MetaFormField, MetaFormGroup } from '../../../src';

const DocForms = () => {
  const code = `import { MetaFormGroup, MetaFormField } from 'csun-components';
  
<MetaFormGroup>
  //Input Field
  <MetaFormField
    field={{
      inputType: 'input',
      id: 'inputFied',
      placeholder: 'Type a message...',
      type: 'text',
      autoComplete: 'off',
      labelText: 'name',
      labelTextVisible: true,
    }}
    value={''}
  />

  //Text Area
  <MetaFormField
    field={{
      inputType: 'textarea',
      id: 'textFied',
      placeholder: 'Type a message...',
      type: 'text',
      autoComplete: 'off',
      labelTextVisible: false,
    }}
    value={''}
  />

  //Select Field
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
      labelTextVisible: false,
    }}
    value={''}
  />

  //Date Picker
  <MetaFormField
    field={{
      inputType: 'datepicker',
      id: 'datepicker',
      type: 'date',
      labelTextVisible: false,
    }}
    value={''}
  />
</MetaFormGroup>
    `;

  const propTypesTitle = '// Prop Types For MetaFormField';
  const propTypes = `
  field: PropTypes.shape({
    inputType: PropTypes.oneOf(['input', 'textarea', 'select', 'datepicker']).isRequired,
    //selectOptions only needs to be called when using inputType 'select'
    selectOptions: PropTypes.arrayOf(
      PropTypes.shape({
        value: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
      }),
    ),
    id: PropTypes.string.isRequired,
    labelText: PropTypes.string,
    type: PropTypes.string,
    placeholder: PropTypes.string,
    autoComplete: PropTypes.string,
    labelTextVisible: PropTypes.bool.isRequired,
  }),
  className: PropTypes.string,
  value: PropTypes.string.isRequired,
  changeFunction: PropTypes.func,
  
  `;

  const propTypesTitleTwo = '// Prop Types For MetaFormGroup';
  const propTypesTwo = `
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  submitFunction: PropTypes.func,
  `;

  return (
    <MetaContainer>
      <MetaRow>
        <MetaColumn size={'sm'} value={'9'}>
          <MetaFormGroup>
            <h2>Input Field</h2>
            <MetaFormField
              field={{
                inputType: 'input',
                id: 'inputFied',
                placeholder: 'Type a message...',
                type: 'text',
                autoComplete: 'off',
                labelText: 'Name',
                labelTextVisible: false,
              }}
              value={''}
            />
            <br />
            <h2>Text Area</h2>
            <MetaFormField
              field={{
                inputType: 'textarea',
                id: 'textFied',
                placeholder: 'Type a message...',
                type: 'text',
                autoComplete: 'off',
                labelTextVisible: false,
              }}
              value={''}
            />
            <br />
            <h2>Select</h2>
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
                labelTextVisible: false,
              }}
              value={''}
            />
            <br />
            <h2>Date Picker</h2>
            <MetaFormField
              field={{
                inputType: 'datepicker',
                id: 'datepicker',
                type: 'date',
                labelTextVisible: false,
              }}
              value={''}
            />
            <br />
          </MetaFormGroup>
          <pre>
            <code>
              {code}
              <div className="type--dark-gray">
                <strong>{propTypesTitle}</strong>
                {propTypes}
                <strong>{propTypesTitleTwo}</strong>
                {propTypesTwo}
              </div>
            </code>
          </pre>
        </MetaColumn>
      </MetaRow>
    </MetaContainer>
  );
};

export default DocForms;
