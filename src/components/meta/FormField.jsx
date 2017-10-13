import React from 'react';
import { generate as shortIdGenerate } from 'shortid';
import PropTypes from 'prop-types';

const MetaFormField = (props) => {
  const buildInput = (field, changeFunction, value, className) => {
    switch (field.inputType) {
      case 'input':
        return (
          <input
            className={className}
            type={field.type}
            id={field.id}
            name={field.id}
            placeholder={field.placeholder}
            value={value}
            onChange={changeFunction}
            autoComplete={field.autoComplete}
          />
        );
      case 'textarea':
        return (
          <textarea
            className={className}
            id={field.id}
            name={field.id}
            placeholder={field.placeholder}
          />
        );
      case 'select':
        return (
          <select className={className} name={field.id} id={field.id}>
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
            className={`${className} datepicker`}
          />
        );
      default:
        return null;
    }
  };

  const label = props.field.labelText ? <label htmlFor={props.field.id}>{props.field.labelText}</label> : null;
  const input = buildInput(props.field, props.changeFunction, props.value, props.className);

  return (
    <div>
      {label}
      {input}
    </div>
  );
};

MetaFormField.defaultProps = {
  field: {},
  value: '12',
  changeFunction: () => { },
  className: '',
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
    autoComplete: PropTypes.string,
  }),
  className: PropTypes.string,
  value: PropTypes.string.isRequired,
  changeFunction: PropTypes.func,
};

export default MetaFormField;
