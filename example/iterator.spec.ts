import {Expect, Spy, Suite} from '../dist/index';
import {iterator} from './iterator';

let testSuite: Suite = new Suite('Function: iterator');
let cb: any,
    cb2: any;

testSuite.addSetup(() => {
    cb = Spy('Callback');
    cb2 = Spy('Unused callback');
    iterator(cb);
    iterator(cb);
    iterator(cb);
});

testSuite.addTest('it should call the callback with an incrementing number', () => {
    Expect(cb).toHaveBeenCalled();
    Expect(cb).toHaveBeenCalledWith(1);
    Expect(cb).toHaveBeenCalledWith(2);
    Expect(cb).toHaveBeenCalledWith(3);
    Expect(cb).not.toHaveBeenCalledWith(4);
});

testSuite.addTest('it should exist', () => {
    Expect(iterator).toBeTruthy();
    Expect(iterator).not.toBeFalsy();
});

testSuite.addTest('it should not call the unused callback', () => {
    Expect(cb2).not.toHaveBeenCalled();
});

testSuite.addTest('it should call the callback once per call', () => {
    Expect(cb.calls.length).toBe(3);
});

testSuite.run();
