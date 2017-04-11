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

var MetaColumn = function (_Component) {
  _inherits(MetaColumn, _Component);

  function MetaColumn() {
    _classCallCheck(this, MetaColumn);

    return _possibleConstructorReturn(this, (MetaColumn.__proto__ || Object.getPrototypeOf(MetaColumn)).apply(this, arguments));
  }

  _createClass(MetaColumn, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: '\'col-' + this.props.size + '-\'' + this.props.value },
        this.props.children
      );
    }
  }]);

  return MetaColumn;
}(_react.Component);

MetaColumn.defaultProps = {
  children: {},
  size: 'sm',
  value: '12'
};

MetaColumn.propTypes = {
  children: _react2.default.PropTypes.node.isRequired,
  size: _react2.default.PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
  value: _react2.default.PropTypes.oneOf(['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'])
};

exports.default = MetaColumn;