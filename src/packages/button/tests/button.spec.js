"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_2 = require("@testing-library/react");
// import styles from "../src/button.module.scss"
var src_1 = require("../src");
describe("<Button />", function () {
    it("should label is render", function () {
        var label = "Label";
        var getAllByText = react_2.render(<src_1.Button label={label}/>).getAllByText;
        expect(getAllByText(label)).toBeTruthy();
    });
    it("should call onClick prop when clicked", function () {
        var label = "Label";
        var onClick = jest.fn();
        var getByRole = react_2.render(<src_1.Button onClick={onClick} label={label}/>).getByRole;
        var button = getByRole("button");
        react_2.fireEvent.click(button);
        expect(onClick).toHaveBeenCalledTimes(1);
    });
    it("should loading prop ", function () {
        var label = "Label";
        var getByText = react_2.render(<src_1.Button loading label={label}/>).getByText;
        expect(getByText("Loading"));
    });
    it("should not click when button is loading", function () {
        var onClick = jest.fn();
        var getByText = react_2.render(<src_1.Button loading onClick={onClick} label="Loading"/>).getByText;
        react_2.fireEvent.click(getByText("Loading"));
        expect(onClick).not.toBeCalled();
    });
});
