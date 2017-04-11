'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _shortid = require('shortid');

var _typographyStyles = require('./commons/typographyStyles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MetaSubNav = function (_Component) {
  _inherits(MetaSubNav, _Component);

  function MetaSubNav() {
    _classCallCheck(this, MetaSubNav);

    return _possibleConstructorReturn(this, (MetaSubNav.__proto__ || Object.getPrototypeOf(MetaSubNav)).apply(this, arguments));
  }

  _createClass(MetaSubNav, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      // Generates each individual sub nav link

      var subNavLinks = this.props.menuItems.map(function (link) {
        return _react2.default.createElement(
          'li',
          { className: 'tab__list', key: (0, _shortid.generate)() },
          _react2.default.createElement(
            'a',
            { className: 'tab__link ' + (link.active ? 'tab__link--active' : '') + ' ' + (_this2.props.typeColor ? 'type--' + _this2.props.typeColor : ''), to: link.to },
            link.title
          )
        );
      });

      return _react2.default.createElement(
        'div',
        { className: 'tab-container' },
        _react2.default.createElement(
          'ul',
          { className: 'tabs cf' },
          subNavLinks
        )
      );
    }
  }]);

  return MetaSubNav;
}(_react.Component);

MetaSubNav.defaultProps = {
  menuItems: [{}],
  typeColor: ''
};

MetaSubNav.propTypes = {
  menuItems: _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.shape({
    title: _react2.default.PropTypes.string.isRequired,
    to: _react2.default.PropTypes.string.isRequired,
    active: _react2.default.PropTypes.bool.isRequired,
    typeStyle: _react2.default.PropTypes.oneOf(_typographyStyles.typeStyles)
  })),
  typeColor: _react2.default.PropTypes.oneOf(_typographyStyles.typeColors)
};

exports.default = MetaSubNav;