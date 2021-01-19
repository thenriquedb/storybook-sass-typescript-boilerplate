"use strict";
exports.__esModule = true;
exports.Small = exports.Large = exports.Secondary = exports.Primary = void 0;
var react_1 = require("react");
var src_1 = require("../src");
var button_module_scss_1 = require("../src/button.module.scss");
console.log("styles", button_module_scss_1["default"]);
exports["default"] = {
    title: "Example/Button",
    component: src_1.Button,
    argTypes: {
        backgroundColor: { control: "color" }
    }
};
var Template = function (args) { return <src_1.Button {...args}/>; };
exports.Primary = Template.bind({});
exports.Primary.args = {
    primary: true,
    label: "Button"
};
exports.Secondary = Template.bind({});
exports.Secondary.args = {
    label: "Button"
};
exports.Large = Template.bind({});
exports.Large.args = {
    size: "large",
    label: "Button"
};
exports.Small = Template.bind({});
exports.Small.args = {
    size: "small",
    label: "Button"
};
