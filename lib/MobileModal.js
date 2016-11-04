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

var isYpoint = 0;

var MobileModal = function (_Component) {
  _inherits(MobileModal, _Component);

  function MobileModal() {
    _classCallCheck(this, MobileModal);

    return _possibleConstructorReturn(this, (MobileModal.__proto__ || Object.getPrototypeOf(MobileModal)).apply(this, arguments));
  }

  _createClass(MobileModal, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      isYpoint = window.scrollY;
      var isHeight = window.innerHeight;
      var isWidth = window.innerWidth;
      window.scrollTo(0, 1);
      document.body.style.height = isHeight + 70 + 'px';
      document.body.style.overflow = 'hidden';
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      window.removeEventListener('wheel', this.prevaentSroll);
      window.removeEventListener('touchmove', this.prevaentSroll);
      document.body.removeAttribute("style");
      window.scrollTo(0, isYpoint);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        {
          style: {
            position: 'fixed',
            width: '100%',
            height: window.innerHeight,
            zIndex: 5500,
            left: 0,
            top: 0,
            backgroundColor: this.props.bgColor
          }
        },
        this.props.children
      );
    }
  }]);

  return MobileModal;
}(_react.Component);

exports.default = MobileModal;