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

var MetaList = function (_Component) {
  _inherits(MetaList, _Component);

  function MetaList() {
    _classCallCheck(this, MetaList);

    return _possibleConstructorReturn(this, (MetaList.__proto__ || Object.getPrototypeOf(MetaList)).apply(this, arguments));
  }

  _createClass(MetaList, [{
    key: 'render',
    value: function render() {
      var listItems = this.props.listItems.map(function (listItem) {
        return _react2.default.createElement(
          'li',
          { className: 'list__item', key: (0, _shortid.generate)() },
          _react2.default.createElement(
            _reactRouterDom.Link,
            { to: listItem.to },
            listItem.text
          )
        );
      });

      var ulClassnames = 'list ' + this.props.modifiers.map(function (modifier) {
        return 'list--' + modifier + ' ';
      });

      return _react2.default.createElement(
        'ul',
        { className: ulClassnames },
        listItems
      );
    }
  }]);

  return MetaList;
}(_react.Component);

MetaList.defaultProps = {
  listItems: [{
    text: 'Insert Text',
    to: '#'
  }],
  modifiers: ['']
};

MetaList.propTypes = {
  listItems: _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.shape({
    text: _react2.default.PropTypes.string.isRequired,
    to: _react2.default.PropTypes.string.isRequired
  })),
  modifiers: _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.oneOf(['arrows', 'hover', 'underlined']))
};

exports.default = MetaList;