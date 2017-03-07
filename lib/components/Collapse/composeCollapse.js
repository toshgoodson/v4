'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _theme = require('theme');

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Kopax Ltd Copyright (c) 2016.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


exports.default = function (CollapseLib) {
  return function (_React$Component) {
    _inherits(Collapse, _React$Component);

    function Collapse() {
      var _ref;

      var _temp, _this, _ret;

      _classCallCheck(this, Collapse);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Collapse.__proto__ || Object.getPrototypeOf(Collapse)).call.apply(_ref, [this].concat(args))), _this), _this.defaultProps = {
        theme: _theme2.default,
        isOpened: false
      }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Collapse, [{
      key: 'render',
      value: function render() {
        var _props = this.props,
            children = _props.children,
            theme = _props.theme,
            props = _objectWithoutProperties(_props, ['children', 'theme']);
        // extract keys for div


        var className = props.className,
            isOpened = props.isOpened,
            fixedHeight = props.fixedHeight,
            springConfig = props.springConfig,
            keepCollapsedContent = props.keepCollapsedContent,
            onRest = props.onRest,
            onHeightReady = props.onHeightReady,
            rest = _objectWithoutProperties(props, ['className', 'isOpened', 'fixedHeight', 'springConfig', 'keepCollapsedContent', 'onRest', 'onHeightReady']); // eslint-disable-line no-unused-vars


        return theme['$enable-transitions'] ? _react2.default.createElement(
          CollapseLib,
          _extends({ className: className }, props),
          children
        ) : _react2.default.createElement(
          'div',
          _extends({ className: (0, _classnames2.default)(className, { 'd-none': !isOpened }) }, rest),
          children
        );
      }
    }]);

    return Collapse;
  }(_react2.default.Component);
};