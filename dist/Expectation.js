"use strict";
var ExpectationFailure_error_1 = require("./ExpectationFailure.error");
var InvalidArgument_error_1 = require("./InvalidArgument.error");
function isObjectLike(item) {
    return Object.prototype.toString.apply(item) === '[object Object]';
}
function equivalance(value, comparison) {
    if (value === comparison) {
        return true;
    }
    if (isObjectLike(value) && isObjectLike(comparison)) {
        var props = Object.keys(value);
        for (var prop in props) {
            if (!equivalance(value[prop], comparison[prop])) {
                return false;
            }
        }
        return true;
    }
    /* tslint:disable triple-equals */
    return value != comparison;
    /* tslint:enable triple-equals */
}
function Expect(value) {
    var api = {
        toBe: function (comparison) {
            if (value !== comparison) {
                throw new ExpectationFailure_error_1.ExpectationFailure("Expected " + value + " to be " + comparison);
            }
        },
        toBeTruthy: function () {
            if (!value) {
                throw new ExpectationFailure_error_1.ExpectationFailure("Expected " + value + " to be truthy");
            }
        },
        toBeFalsy: function () {
            if (!!value) {
                throw new ExpectationFailure_error_1.ExpectationFailure("Expected " + value + " to be falsy");
            }
        },
        toEqual: function (comparison) {
            if (!equivalance(value, comparison)) {
                throw new ExpectationFailure_error_1.ExpectationFailure("Expected " + value + " to equal " + comparison);
            }
        },
        toThrow: function () {
            try {
                value();
            }
            catch (e) {
                /* tslint:enable typedef */
                return;
            }
            throw new ExpectationFailure_error_1.ExpectationFailure("Expected " + value + " to throw an error");
        },
        toHaveBeenCalled: function () {
            if (!('calls' in value)) {
                throw new InvalidArgument_error_1.InvalidArgument("Expected " + value + " to be a spy");
            }
            if (!value.calls.length) {
                throw new ExpectationFailure_error_1.ExpectationFailure("Expected " + value + " to have been called but it was never called");
            }
        },
        toHaveBeenCalledWith: function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            if (!('calls' in value)) {
                throw new InvalidArgument_error_1.InvalidArgument("Expected " + value + " to be a spy");
            }
            if (!value.calls.length) {
                throw new ExpectationFailure_error_1.ExpectationFailure("Expected " + value + " to have been called but it was never called");
            }
            var success;
            value.calls.forEach(function (call) {
                if (!success) {
                    success = true;
                    args.forEach(function (arg, index) {
                        /* tslint:disable triple-equals */
                        if (arg != call[index]) {
                            /* tslint:enable triple-equal */
                            success = false;
                        }
                    });
                }
            });
            if (!success) {
                throw new ExpectationFailure_error_1.ExpectationFailure("Expected " + value + " to have been called with " + args + " but it was instead called with " + JSON.stringify(value.calls));
            }
        }
    };
    api.not = {
        toBe: function (comparison) {
            try {
                api.toBe(comparison);
            }
            catch (e) {
                /* tslint:enable typedef */
                return;
            }
            throw new ExpectationFailure_error_1.ExpectationFailure("Expected " + value + " not to be " + comparison);
        },
        toBeTruthy: function () {
            try {
                api.toBeTruthy();
            }
            catch (e) {
                /* tslint:enable typedef */
                return;
            }
            throw new ExpectationFailure_error_1.ExpectationFailure("Expected " + value + " not to be truthy");
        },
        toBeFalsy: function () {
            try {
                api.toBeFalsy();
            }
            catch (e) {
                /* tslint:enable typedef */
                return;
            }
            throw new ExpectationFailure_error_1.ExpectationFailure("Expected " + value + " not to be falsy");
        },
        toEqual: function (comparison) {
            try {
                api.toEqual(comparison);
            }
            catch (e) {
                /* tslint:enable typedef */
                return;
            }
            throw new ExpectationFailure_error_1.ExpectationFailure("Expected " + value + " not to equal " + comparison);
        },
        toThrow: function () {
            try {
                value();
            }
            catch (e) {
                /* tslint:enable typedef */
                throw new ExpectationFailure_error_1.ExpectationFailure("Expected " + value + " not to throw an error but it threw " + e);
            }
        },
        toHaveBeenCalled: function () {
            try {
                api.toHaveBeenCalled();
            }
            catch (e) {
                /* tslint:enable typedef */
                return;
            }
            throw new ExpectationFailure_error_1.ExpectationFailure("Expected " + value + " not to have been called but it was called with " + JSON.stringify(value.calls));
        },
        toHaveBeenCalledWith: function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            try {
                api.toHaveBeenCalledWith.apply(api, args);
            }
            catch (e) {
                /* tslint:enable typedef */
                return;
            }
            throw new ExpectationFailure_error_1.ExpectationFailure("Expected " + value + " not to have been called with " + args);
        }
    };
    return api;
}
exports.Expect = Expect;
