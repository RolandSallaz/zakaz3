"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const design_system_1 = require("@strapi/design-system");
const ArrayTextInput = ({ name, value = [], onChange }) => {
    const handleChange = (e) => {
        const value = e.target.value;
        const lines = value.split('\n').filter((line) => line.trim() !== '');
        onChange({ target: { name, value: lines } });
    };
    return (react_1.default.createElement(design_system_1.Textarea, { name: name, value: value.join('\n'), onChange: handleChange }));
};
exports.default = ArrayTextInput;
