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

var MetaPagination = function (_Component) {
  _inherits(MetaPagination, _Component);

  function MetaPagination() {
    _classCallCheck(this, MetaPagination);

    return _possibleConstructorReturn(this, (MetaPagination.__proto__ || Object.getPrototypeOf(MetaPagination)).apply(this, arguments));
  }

  _createClass(MetaPagination, [{
    key: 'buildPagers',
    value: function buildPagers(start, end) {}
  }, {
    key: 'render',
    value: function render() {
      var startRange = this.props.startRange;
      var startRangeStart = startRange.start;
      var startRangeEnd = startRange.end;

      return _react2.default.createElement(
        'ul',
        { className: 'pagination' },
        _react2.default.createElement(
          'li',
          { className: 'disabled' },
          _react2.default.createElement(
            'span',
            null,
            '\xAB'
          )
        ),
        _react2.default.createElement(
          'li',
          { className: 'active' },
          _react2.default.createElement(
            'span',
            null,
            '1'
          )
        ),
        _react2.default.createElement(
          'li',
          null,
          _react2.default.createElement(
            'a',
            { href: '#' },
            '2'
          )
        ),
        _react2.default.createElement(
          'li',
          null,
          _react2.default.createElement(
            'a',
            { href: '#' },
            '3'
          )
        ),
        _react2.default.createElement(
          'li',
          null,
          _react2.default.createElement(
            'a',
            { href: '#' },
            '4'
          )
        ),
        _react2.default.createElement(
          'li',
          { className: 'disabled' },
          _react2.default.createElement(
            'span',
            null,
            '...'
          )
        ),
        _react2.default.createElement(
          'li',
          null,
          _react2.default.createElement(
            'a',
            { href: '' },
            '20'
          )
        ),
        _react2.default.createElement(
          'li',
          null,
          _react2.default.createElement(
            'a',
            { href: '#' },
            '21'
          )
        ),
        _react2.default.createElement(
          'li',
          null,
          _react2.default.createElement(
            'a',
            { href: '#', rel: 'next' },
            '\xBB'
          )
        )
      );
    }
  }]);

  return MetaPagination;
}(_react.Component);

MetaPagination.defaultProps = {
  endRange: null
};

MetaPagination.propTypes = {
  startRange: _react2.default.PropTypes.shape({
    start: _react2.default.PropTypes.number.isRequired,
    end: _react2.default.PropTypes.number.isRequired
  }).isRequired,
  endRange: _react2.default.PropTypes.shape({
    start: _react2.default.PropTypes.number.isRequired,
    end: _react2.default.PropTypes.number.isRequired
  }),
  activeNumber: _react2.default.PropTypes.number.isRequired
};

exports.default = MetaPagination;