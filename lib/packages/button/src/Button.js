var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
import React from "react";
import cx from "classnames";
import styles from "./button.module.scss";
/**
 * Primary UI component for user interaction
 */
export var Button = function (_a) {
    var _b;
    var _c = _a.primary, primary = _c === void 0 ? false : _c, _d = _a.size, size = _d === void 0 ? "medium" : _d, backgroundColor = _a.backgroundColor, label = _a.label, loading = _a.loading, onClick = _a.onClick, props = __rest(_a, ["primary", "size", "backgroundColor", "label", "loading", "onClick"]);
    return (React.createElement("button", __assign({ type: "button", className: cx([
            styles.button,
            (_b = {},
                _b[styles.small] = size === "small",
                _b[styles.medium] = size === "medium",
                _b[styles.large] = size === "large",
                _b[styles.primary] = primary,
                _b[styles.secondary] = !primary,
                _b),
        ]), style: { backgroundColor: backgroundColor }, onClick: loading ? undefined : onClick }, props), loading ? "Loading" : label));
};
