"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ExpectationFailure = (function (_super) {
    __extends(ExpectationFailure, _super);
    function ExpectationFailure() {
        return _super.apply(this, arguments) || this;
    }
    return ExpectationFailure;
}(Error));
exports.ExpectationFailure = ExpectationFailure;
