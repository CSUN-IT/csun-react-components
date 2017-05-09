'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _shortid = require('shortid');

var _Column = require('./Column');

var _Column2 = _interopRequireDefault(_Column);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var buildInput = function buildInput(field) {
  switch (field.inputType) {
    case 'input':
      return _react2.default.createElement('input', { type: field.type, id: field.id, name: field.id, placeholder: field.placeholder });
    case 'textarea':
      return _react2.default.createElement('textarea', { id: field.id, name: field.id, placeholder: field.placeholder });
    case 'select':
      return _react2.default.createElement(
        'select',
        { name: field.id, id: field.id },
        field.selectOptions.map(function (option) {
          return _react2.default.createElement(
            'option',
            { value: option.value, key: (0, _shortid.generate)() },
            option.text
          );
        })
      );
    case 'datepicker':
      return _react2.default.createElement('input', { type: field.type, id: field.id, name: field.id, placeholder: field.placeholder, className: 'datepicker' });
    default:
      return null;
  }
};

var MetaFormField = function (_Component) {
  _inherits(MetaFormField, _Component);

  function MetaFormField() {
    _classCallCheck(this, MetaFormField);

    return _possibleConstructorReturn(this, (MetaFormField.__proto__ || Object.getPrototypeOf(MetaFormField)).apply(this, arguments));
  }

  _createClass(MetaFormField, [{
    key: 'render',
    value: function render() {
      var label = _react2.default.createElement(
        'label',
        { htmlFor: this.props.field.id },
        this.props.field.labelText
      );
      var input = buildInput(this.props.field);

      return _react2.default.createElement(
        _Column2.default,
        { size: this.props.size, value: this.props.value },
        label,
        input
      );
    }
  }]);

  return MetaFormField;
}(_react.Component);

MetaFormField.defaultProps = {
  field: {},
  size: 'sm',
  value: '12'
};

MetaFormField.propTypes = {
  field: _react2.default.PropTypes.shape({
    inputType: _react2.default.PropTypes.oneOf(['input', 'textarea', 'select', 'datepicker']).isRequired,
    selectOptions: _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.shape({
      value: _react2.default.PropTypes.string.isRequired,
      text: _react2.default.PropTypes.string.isRequired
    })),
    id: _react2.default.PropTypes.string.isRequired,
    labelText: _react2.default.PropTypes.string,
    type: _react2.default.PropTypes.string,
    placeholder: _react2.default.PropTypes.string
  }),
  size: _react2.default.PropTypes.string.isRequired,
  value: _react2.default.PropTypes.string.isRequired
};

exports.default = MetaFormField;