"use strict";
var Test = (function () {
    function Test(description, fn) {
        this.description = description;
        this.fn = fn;
    }
    Test.prototype.run = function (setup) {
        setup.forEach(function (fn) {
            fn();
        });
        try {
            this.fn();
        }
        catch (e) {
            console.error(e);
        }
    };
    return Test;
}());
exports.Test = Test;
