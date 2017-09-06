import React, { Component } from 'react';
import { generate as shortIdGenerate } from 'shortid';
import MetaColumn from './Column';
import PropTypes from 'prop-types';

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

class MetaFormField extends Component {
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
  field: PropTypes.shape({
    inputType: PropTypes.oneOf(['input', 'textarea', 'select', 'datepicker']).isRequired,
    selectOptions: PropTypes.arrayOf(PropTypes.shape({
      value: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    })),
    id: PropTypes.string.isRequired,
    labelText: PropTypes.string,
    type: PropTypes.string,
    placeholder: PropTypes.string,
  }),
  size: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default MetaFormField;
