"use strict";
var Test_1 = require("./Test");
var Suite = (function () {
    function Suite(description) {
        this.description = description;
    }
    Suite.prototype.addSetup = function (setup) {
        this.setup.push(setup);
    };
    Suite.prototype.addSuite = function (suite) {
        this.suites.push(suite);
    };
    Suite.prototype.addTest = function (description, fn) {
        this.tests.push(new Test_1.Test(description, fn));
    };
    Suite.prototype.run = function (setup) {
        if (setup === void 0) { setup = []; }
        setup = setup.concat(this.setup);
        this.tests.forEach(function (test) {
            test.run(setup);
        });
        this.suites.forEach(function (suite) {
            suite.run(setup);
        });
    };
    return Suite;
}());
exports.Suite = Suite;
