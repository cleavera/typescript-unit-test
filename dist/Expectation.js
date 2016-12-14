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
function Expect(value) {
    return {
        toBe: function (comparison) {
            if (value !== comparison) {
                throw new ExpectationFailure("Expected " + value + " to be " + comparison);
            }
        },
        toEqual: function (comparison) {
            if (value != comparison) {
                throw new ExpectationFailure("Expected " + value + " to equal " + comparison);
            }
        }
    };
}
exports.Expect = Expect;
