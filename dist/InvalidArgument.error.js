"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var InvalidArgument = (function (_super) {
    __extends(InvalidArgument, _super);
    function InvalidArgument() {
        return _super.apply(this, arguments) || this;
    }
    return InvalidArgument;
}(Error));
exports.InvalidArgument = InvalidArgument;
