'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MetaTag = function (_Component) {
  _inherits(MetaTag, _Component);

  function MetaTag() {
    _classCallCheck(this, MetaTag);

    return _possibleConstructorReturn(this, (MetaTag.__proto__ || Object.getPrototypeOf(MetaTag)).apply(this, arguments));
  }

  _createClass(MetaTag, [{
    key: 'render',
    value: function render() {
      var tagStatus = '' + (this.props.color ? 'tag--' + this.props.color : '');
      var tagAction = '' + (this.props.action ? 'tag--' + this.props.action : '');
      var tagClasses = 'tag ' + tagStatus + ' ' + tagAction;
      return _react2.default.createElement(
        _reactRouterDom.Link,
        { to: this.props.to, className: tagClasses },
        this.props.text
      );
    }
  }]);

  return MetaTag;
}(_react.Component);

MetaTag.defaultProps = {
  color: '',
  action: '',
  text: 'Tag',
  to: ''
};

MetaTag.propTypes = {
  text: _react2.default.PropTypes.string,
  color: _react2.default.PropTypes.oneOf(['success', 'warning', 'danger', '']),
  action: _react2.default.PropTypes.oneOf(['close', '']),
  to: _react2.default.PropTypes.string.isRequired
};

exports.default = MetaTag;