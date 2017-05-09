'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MetaAlert = function (_Component) {
  _inherits(MetaAlert, _Component);

  function MetaAlert() {
    _classCallCheck(this, MetaAlert);

    return _possibleConstructorReturn(this, (MetaAlert.__proto__ || Object.getPrototypeOf(MetaAlert)).apply(this, arguments));
  }

  _createClass(MetaAlert, [{
    key: 'render',
    value: function render() {
      var alertParentClasses = 'alert ' + (this.props.color ? 'alert--' + this.props.color : '');
      var strongText = _react2.default.createElement(
        'strong',
        null,
        this.props.strongText
      );

      return _react2.default.createElement(
        'div',
        { className: alertParentClasses },
        this.props.strongText ? strongText : '',
        ' ',
        this.props.text,
        _react2.default.createElement(
          'a',
          { href: this.props.to, className: 'alert__close', 'data-alert-close': true },
          '\xD7'
        )
      );
    }
  }]);

  return MetaAlert;
}(_react.Component);

MetaAlert.defaultProps = {
  color: '',
  strongText: '',
  text: '',
  to: '#'
};

MetaAlert.propTypes = {
  color: _react2.default.PropTypes.oneOf(['info', 'success', 'warning', 'danger']),
  strongText: _react2.default.PropTypes.string,
  text: _react2.default.PropTypes.string.isRequired,
  to: _react2.default.PropTypes.string
};

exports.default = MetaAlert;