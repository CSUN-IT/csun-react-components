'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

var _shortid = require('shortid');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MetaPrimaryNav = function (_Component) {
  _inherits(MetaPrimaryNav, _Component);

  function MetaPrimaryNav() {
    _classCallCheck(this, MetaPrimaryNav);

    return _possibleConstructorReturn(this, (MetaPrimaryNav.__proto__ || Object.getPrototypeOf(MetaPrimaryNav)).apply(this, arguments));
  }

  _createClass(MetaPrimaryNav, [{
    key: 'render',
    value: function render() {
      var navLinks = this.props.menuItems.map(function (link) {
        return _react2.default.createElement(
          'li',
          { key: (0, _shortid.generate)() },
          _react2.default.createElement(
            _reactRouterDom.NavLink,
            { exact: link.exact ? link.exact : false, className: 'primary-nav__link', to: link.to },
            link.title
          )
        );
      });

      return _react2.default.createElement(
        'nav',
        { className: 'primary-nav primary-nav' + (this.props.navColor ? '--' + this.props.navColor : '') + ' ' },
        _react2.default.createElement(
          'div',
          { className: 'container' },
          _react2.default.createElement(
            'div',
            { className: 'primary-nav__mobile' },
            _react2.default.createElement(
              'div',
              { className: 'primary-nav__btn' },
              _react2.default.createElement('div', { className: 'bar' }),
              _react2.default.createElement('div', { className: 'bar' }),
              _react2.default.createElement('div', { className: 'bar' })
            ),
            _react2.default.createElement(
              'a',
              { href: 'https://www.csun.edu', className: 'primary-nav__brand' },
              _react2.default.createElement(
                'span',
                { className: 'sr-only' },
                'California State University, Northridge (CSUN)'
              )
            ),
            this.props.subBrand ? _react2.default.createElement(
              _reactRouterDom.Link,
              { to: this.props.subBrand.to, className: 'primary-nav__sub-brand' },
              this.props.subBrand.title
            ) : ''
          ),
          _react2.default.createElement(
            'ul',
            { className: 'primary-nav__links' },
            navLinks
          )
        )
      );
    }
  }]);

  return MetaPrimaryNav;
}(_react.Component);

MetaPrimaryNav.defaultProps = {
  menuItems: [{}],
  navColor: '',
  subBrand: undefined
};

MetaPrimaryNav.propTypes = {
  menuItems: _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.shape({
    title: _react2.default.PropTypes.string.isRequired,
    to: _react2.default.PropTypes.string.isRequired,
    exact: _react2.default.PropTypes.bool
  })),
  navColor: _react2.default.PropTypes.string,
  subBrand: _react2.default.PropTypes.shape({
    to: _react2.default.PropTypes.string.isRequired,
    title: _react2.default.PropTypes.string.isRequired
  })
};

exports.default = MetaPrimaryNav;