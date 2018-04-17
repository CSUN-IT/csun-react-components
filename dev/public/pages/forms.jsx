import React from 'react';
import {
  MetaContainer,
  MetaColumn,
  MetaTable,
  MetaRow,
  MetaFormField,
  MetaFormGroup,
} from '../../../src';

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
      ariaLabel: 'input field',
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
    }}
    value={''}
  />

  //Date Picker
  <MetaFormField
    field={{
      inputType: 'datepicker',
      id: 'datepicker',
      type: 'date',
    }}
    value={''}
  />
</MetaFormGroup>
    `;

  return (
    <MetaContainer>
      <MetaRow>
        <MetaColumn sizes={['sm']} values={['9']}>
          <h1>Forms</h1>
          <hr />
          <MetaFormGroup>
            <h2>Input Field</h2>
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
            <br />
            <h2>Text Area</h2>
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
              }}
              value={''}
            />
            <br />
          </MetaFormGroup>
          <strong>Example Code</strong>
          <pre>
            <code>{code}</code>
          </pre>
          <strong>MetaFormField Prop Types</strong>
          <MetaTable
            headerCells={['Name', 'Type', 'Required', 'Additional Notes']}
            dataCells={[
              'field',
              'Shape',
              'Yes',
              'Contains additional sub prop types.',
              'className',
              'String',
              'No',
              '',
              'value',
              'String',
              'Yes',
              '',
              'changeFunction',
              'function',
              'No',
              '',
            ]}
          />

          <strong>Field Prop Types</strong>
          <MetaTable
            headerCells={['Name', 'Type', 'Required', 'Additional Notes']}
            dataCells={[
              'inputType',
              'oneOf',
              'Yes',
              'input, textarea, select, datepicker',
              'selectOptions',
              'Array/Shape',
              'No',
              "Only needs to be called when using inputType 'select'.",
              'id',
              'String',
              'Yes',
              '',
              'labelText',
              'String',
              'No',
              '',
              'type',
              'String',
              'No',
              '',
              'placeHolder',
              'String',
              'No',
              '',
              'autoComplete',
              'String',
              'No',
              '',
              'labelTextVisible',
              'Boolean',
              'Yes',
              '',
            ]}
          />

          <strong>selectOptions Prop Types</strong>
          <MetaTable
            headerCells={['Name', 'Type', 'Required', 'Additional Notes']}
            dataCells={['value', 'String', 'Yes', '', 'text', 'String', 'Yes', '']}
          />

          <strong>MetaFormGroup Prop Types</strong>
          <MetaTable
            headerCells={['Name', 'Type', 'Required', 'Additional Notes']}
            dataCells={[
              'className',
              'String',
              'No',
              '',
              'children',
              'any',
              'Yes',
              'Requires having child elements/data within it.',
              'submitFunction',
              'Function',
              'No',
              '',
            ]}
          />
        </MetaColumn>
      </MetaRow>
    </MetaContainer>
  );
};

export default DocForms;
