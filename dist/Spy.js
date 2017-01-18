"use strict";
function Spy(label) {
    var retValue, fakeFn, childSpies = {
        args: [],
        spies: []
    };
    var spy = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        spy.calls.push(args);
        if (args.length && childSpies.args.length) {
            childSpies.args.forEach(function (params, spyIndex) {
                var success = true;
                args.forEach(function (arg, index) {
                    /* tslint:disable triple-equals */
                    if (arg != params[index]) {
                        /* tslint:enable triple-equal */
                        success = false;
                    }
                });
                if (success) {
                    return (_a = childSpies.spies)[spyIndex].apply(_a, args);
                }
                var _a;
            });
        }
        if (retValue) {
            return retValue;
        }
        if (fakeFn) {
            return fakeFn.apply(void 0, args);
        }
    };
    spy.callFake = function (fn) {
        fakeFn = fn;
        return spy;
    };
    spy.returnValue = function (value) {
        retValue = value;
        return spy;
    };
    spy.whenCalledWith = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var child = Spy(label);
        childSpies.args.push(args);
        childSpies.spies.push(child);
        return child;
    };
    spy.calls = [];
    spy.reset = function () {
        spy.calls = [];
        return spy;
    };
    spy.toString = function () {
        return label;
    };
    return spy;
}
exports.Spy = Spy;
