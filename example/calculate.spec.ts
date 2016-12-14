import {Expect, Suite} from '../dist/index';
import {calculate} from './calculate';

let testSuite: Suite = new Suite('Function: Test');
let a: number,
    b: number;

testSuite.addSuite(new Suite('when a is greater than 5')
    .addSetup(() => {
        a = 6;
        b = 2;
    })
    .addTest('it should add the numbers', () => {
        Expect(calculate(a, b)).toBe(8);
    }));

testSuite.addSuite(new Suite('when b is greater than 5')
    .addSetup(() => {
        a = 4;
        b = 6;
    })
    .addTest('it should subtract b from a', () => {
        Expect(calculate(a, b)).toBe(2);
    }));

testSuite.addSuite(new Suite('when both a and b are less than 5')
    .addSetup(() => {
        a = 4;
        b = 4;
    })
    .addTest('it should multiple the numbers', () => {
        Expect(calculate(a, b)).toBe(16);
    }));

testSuite.addSuite(new Suite('when I write a failing test')
    .addSetup(() => {
        a = 3;
        b = 3;
    })
    .addTest('it should fail', () => {
        Expect(calculate(a, b)).toBe(16);
    }));

testSuite.run();
