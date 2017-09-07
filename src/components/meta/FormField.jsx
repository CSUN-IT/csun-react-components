import React from 'react';
import { generate as shortIdGenerate } from 'shortid';
import PropTypes from 'prop-types';
import MetaColumn from './Column';

const MetaFormField = (props) => {
  const buildInput = (field, changeFunction, value) => {
    switch (field.inputType) {
      case 'input':
        return (
          <input
            type={field.type}
            id={field.id}
            name={field.id}
            placeholder={field.placeholder}
            value={value}
            onChange={changeFunction}
          />
        );
      case 'textarea':
        return <textarea id={field.id} name={field.id} placeholder={field.placeholder} />;
      case 'select':
        return (
          <select name={field.id} id={field.id}>
            {field.selectOptions.map(option => (
              <option value={option.value} key={shortIdGenerate()}>
                {option.text}
              </option>
            ))}
          </select>
        );
      case 'datepicker':
        return (
          <input
            type={field.type}
            id={field.id}
            name={field.id}
            placeholder={field.placeholder}
            className="datepicker"
          />
        );
      default:
        return null;
    }
  };

  const label = <label htmlFor={props.field.id}>{props.field.labelText}</label>;
  const input = buildInput(props.field, props.changeFunction, props.value);

  return (
    <MetaColumn size={props.size}>
      {label}
      {input}
    </MetaColumn>
  );
};

MetaFormField.defaultProps = {
  field: {},
  size: 'sm',
  value: '12',
  changeFunction: () => {},
};

MetaFormField.propTypes = {
  field: PropTypes.shape({
    inputType: PropTypes.oneOf(['input', 'textarea', 'select', 'datepicker']).isRequired,
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
  }),
  size: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  changeFunction: PropTypes.func,
};

export default MetaFormField;
