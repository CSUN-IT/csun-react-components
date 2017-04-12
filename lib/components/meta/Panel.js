"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MetaPanel = function (_Component) {
  _inherits(MetaPanel, _Component);

  function MetaPanel() {
    _classCallCheck(this, MetaPanel);

    return _possibleConstructorReturn(this, (MetaPanel.__proto__ || Object.getPrototypeOf(MetaPanel)).apply(this, arguments));
  }

  _createClass(MetaPanel, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        { className: "panel" },
        this.props.panelHeader ? _react2.default.createElement(
          "div",
          { className: "panel__header" },
          _react2.default.createElement(
            "strong",
            null,
            this.props.panelHeader.text
          )
        ) : '',
        this.props.panelImage ? _react2.default.createElement("div", { className: "panel__img", style: { backgroundImage: "url(" + this.props.panelImage.imageURL + ")" } }) : '',
        _react2.default.createElement(
          "div",
          { className: "panel__content" },
          this.props.panelContent.text
        ),
        this.props.panelFooter ? _react2.default.createElement(
          "div",
          { className: "panel__footer" },
          _react2.default.createElement(
            "strong",
            null,
            this.props.panelFooter.strongText
          ),
          this.props.panelFooter.text
        ) : ''
      );
    }
  }]);

  return MetaPanel;
}(_react.Component);

MetaPanel.defaultProps = {
  panelHeader: {},
  panelImage: {},
  panelContent: {
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam voluptatem harum cupiditate quae aliquid quia optio suscipit ex temporibus adipisci.'
  },
  panelFooter: {}
};

MetaPanel.propTypes = {
  panelHeader: _react2.default.PropTypes.shape({
    text: _react2.default.PropTypes.string.isRequired
  }),
  panelImage: _react2.default.PropTypes.shape({
    imageURL: _react2.default.PropTypes.string.isRequired
  }),
  panelContent: _react2.default.PropTypes.shape({
    text: _react2.default.PropTypes.string.isRequired
  }).isRequired,
  panelFooter: _react2.default.PropTypes.shape({
    strongText: _react2.default.PropTypes.string,
    text: _react2.default.PropTypes.string.isRequired
  })
};

exports.default = MetaPanel;