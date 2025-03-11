"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const React = require("react");
const _interopDefault = (e) => e && e.__esModule ? e : { default: e };
const React__default = /* @__PURE__ */ _interopDefault(React);
const ArrayTextInput = ({ name, value = [], onChange }) => {
  return /* @__PURE__ */ React__default.default.createElement("input", { name, value: value.join("\n") });
};
exports.default = ArrayTextInput;
//# sourceMappingURL=ArrayTextInput-hqsR2Y2e.js.map
