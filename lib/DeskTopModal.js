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

var DeskTopModal = function (_Component) {
  _inherits(DeskTopModal, _Component);

  function DeskTopModal(props) {
    _classCallCheck(this, DeskTopModal);

    var _this = _possibleConstructorReturn(this, (DeskTopModal.__proto__ || Object.getPrototypeOf(DeskTopModal)).call(this, props));

    _this.state = {};
    _this.isClose = _this.isClose.bind(_this);
    return _this;
  }

  _createClass(DeskTopModal, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      window.addEventListener('keydown', this.isClose);
      window.addEventListener('wheel', this.wheelpreventDefault);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      window.removeEventListener('keydown', this.isClose);
      window.removeEventListener('wheel', this.wheelpreventDefault);
    }
  }, {
    key: 'isClose',
    value: function isClose(e) {
      if (e.keyCode === 27) {
        this.props.isClose();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement('div', {
          style: {
            backgroundColor: 'rgba(0,0,0,0.5)',
            position: 'fixed',
            width: '100%',
            height: '1400px',
            left: 0,
            top: 0,
            zIndex: 5000
          }
        }),
        _react2.default.createElement(
          'div',
          {
            style: {
              position: 'fixed',
              width: this.props.isWidth,
              height: this.props.isHeight,
              zIndex: 5500,
              left: '50%',
              top: '50%',
              marginTop: -(this.props.isHeight / 2),
              marginLeft: -(this.props.isWidth / 2),
              backgroundColor: this.props.bgColor,
              boxShadow: '0 1px 2px 1px rgba(0,0,0,0.2)'
            }
          },
          this.props.children
        )
      );
    }
  }]);

  return DeskTopModal;
}(_react.Component);

exports.default = DeskTopModal;