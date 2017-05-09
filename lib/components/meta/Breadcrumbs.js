'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

var _shortid = require('shortid');

var _typographyStyles = require('./commons/typographyStyles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MetaBreadcrumbs = function (_Component) {
  _inherits(MetaBreadcrumbs, _Component);

  function MetaBreadcrumbs() {
    _classCallCheck(this, MetaBreadcrumbs);

    return _possibleConstructorReturn(this, (MetaBreadcrumbs.__proto__ || Object.getPrototypeOf(MetaBreadcrumbs)).apply(this, arguments));
  }

  _createClass(MetaBreadcrumbs, [{
    key: 'render',
    value: function render() {
      var breadcrumbs = this.props.breadcrumbItems.map(function (breadcrumb) {
        return _react2.default.createElement(
          'li',
          { key: (0, _shortid.generate)(), className: 'breadcrumb__item ' + (breadcrumb.home ? 'breadcrumb__item--home' : '') + ' ' + (breadcrumb.typeStyle ? 'type--' + breadcrumb.typeStyle : '') },
          breadcrumb.home ? _react2.default.createElement(
            _reactRouterDom.Link,
            { to: breadcrumb.to },
            _react2.default.createElement('i', { className: 'fa fa-home', 'aria-hidden': 'true' })
          ) : '',
          breadcrumb.title
        );
      });

      return _react2.default.createElement(
        'ul',
        { className: 'breadcrumbs ' + (this.props.typeColor ? 'type--' + this.props.typeColor : '') + ' ' },
        breadcrumbs
      );
    }
  }]);

  return MetaBreadcrumbs;
}(_react.Component);

MetaBreadcrumbs.defaultProps = {
  breadcrumbItems: [{
    title: 'Home',
    to: '',
    home: true
  }],
  typeStyle: '',
  typeColor: ''
};

MetaBreadcrumbs.propTypes = {
  breadcrumbItems: _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.shape({
    title: _react2.default.PropTypes.string.isRequired,
    to: _react2.default.PropTypes.string,
    home: _react2.default.PropTypes.bool,
    typeStyle: _react2.default.PropTypes.oneOf(_typographyStyles.typeStyles)
  })),
  typeColor: _react2.default.PropTypes.oneOf(_typographyStyles.typeColors)
};

exports.default = MetaBreadcrumbs;