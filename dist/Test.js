"use strict";
var Test = (function () {
    function Test(description, fn) {
        this.description = description;
        this.fn = fn;
    }
    Test.prototype.run = function (setup, description) {
        if (description === void 0) { description = []; }
        setup.forEach(function (fn) {
            fn();
        });
        description = description.slice(0);
        description.push(this.description);
        try {
            this.fn();
        }
        catch (e) {
            console.error(description.join(' ') + '\n', e);
        }
    };
    return Test;
}());
exports.Test = Test;
