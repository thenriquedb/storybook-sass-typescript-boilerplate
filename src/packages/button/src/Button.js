"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
exports.__esModule = true;
exports.Button = void 0;
var react_1 = require("react");
var classnames_1 = require("classnames");
var button_module_scss_1 = require("./button.module.scss");
/**
 * Primary UI component for user interaction
 */
var Button = function (_a) {
    var _b;
    var _c = _a.primary, primary = _c === void 0 ? false : _c, _d = _a.size, size = _d === void 0 ? "medium" : _d, backgroundColor = _a.backgroundColor, label = _a.label, loading = _a.loading, onClick = _a.onClick, props = __rest(_a, ["primary", "size", "backgroundColor", "label", "loading", "onClick"]);
    return (<button type="button" className={classnames_1["default"]([
        button_module_scss_1["default"].button,
        (_b = {},
            _b[button_module_scss_1["default"].small] = size === "small",
            _b[button_module_scss_1["default"].medium] = size === "medium",
            _b[button_module_scss_1["default"].large] = size === "large",
            _b[button_module_scss_1["default"].primary] = primary,
            _b[button_module_scss_1["default"].secondary] = !primary,
            _b),
    ])} style={{ backgroundColor: backgroundColor }} onClick={loading ? undefined : onClick} {...props}>
    {loading ? "Loading" : label}
  </button>);
};
exports.Button = Button;
