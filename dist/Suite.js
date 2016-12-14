"use strict";
var Test_1 = require("./Test");
var Suite = (function () {
    function Suite(description) {
        this.description = description;
        this.setup = [];
        this.suites = [];
        this.tests = [];
    }
    Suite.prototype.addSetup = function (setup) {
        this.setup.push(setup);
        return this;
    };
    Suite.prototype.addSuite = function (suite) {
        this.suites.push(suite);
        return this;
    };
    Suite.prototype.addTest = function (description, fn) {
        this.tests.push(new Test_1.Test(description, fn));
        return this;
    };
    Suite.prototype.run = function (setup, description) {
        if (setup === void 0) { setup = []; }
        if (description === void 0) { description = []; }
        setup = setup.concat(this.setup);
        description = description.slice(0);
        description.push(this.description);
        this.tests.forEach(function (test) {
            test.run(setup, description);
        });
        this.suites.forEach(function (suite) {
            suite.run(setup, description);
        });
    };
    return Suite;
}());
exports.Suite = Suite;
