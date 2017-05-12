import React, { Component } from 'react';
import { generate as shortIdGenerate } from 'shortid';
import MetaColumn from './Column';
import { strEnum } from '../../helpers/tsHelpers';

const InputTypes = strEnum([
  'input', 'textarea', 'select', 'datepicker'
]);

type InputTypes = keyof typeof InputTypes;

interface MyProps {
  field: {
    inputType: InputTypes[]
  }
}

const buildInput = (field) => {
  switch (field.inputType) {
    case 'input':
      return <input type={field.type} id={field.id} name={field.id} placeholder={field.placeholder} />;
    case 'textarea':
      return <textarea id={field.id} name={field.id} placeholder={field.placeholder} />;
    case 'select':
      return (<select name={field.id} id={field.id}>
        {field.selectOptions.map(option => <option value={option.value} key={shortIdGenerate()}>{option.text}</option>)}
      </select>);
    case 'datepicker':
      return <input type={field.type} id={field.id} name={field.id} placeholder={field.placeholder} className="datepicker" />;
    default:
      return null;
  }
};

class MetaFormField extends Component<MyProps, undefined> {
  render() {
    const label = <label htmlFor={this.props.field.id}>{this.props.field.labelText}</label>;
    const input = buildInput(this.props.field);

    return (
      <MetaColumn size={this.props.size} value={this.props.value}>
        {label}
        {input}
      </MetaColumn>
    );
  }
}

MetaFormField.defaultProps = {
  field: {},
  size: 'sm',
  value: '12',
};

MetaFormField.propTypes = {
  field: React.PropTypes.shape({
    inputType: React.PropTypes.oneOf(['input', 'textarea', 'select', 'datepicker']).isRequired,
    selectOptions: React.PropTypes.arrayOf(React.PropTypes.shape({
      value: React.PropTypes.string.isRequired,
      text: React.PropTypes.string.isRequired,
    })),
    id: React.PropTypes.string.isRequired,
    labelText: React.PropTypes.string,
    type: React.PropTypes.string,
    placeholder: React.PropTypes.string,
  }),
  size: React.PropTypes.string.isRequired,
  value: React.PropTypes.string.isRequired,
};

export default MetaFormField;
