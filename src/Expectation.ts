import {IExpectation} from './interfaces/IExpectation.interface';

class ExpectationFailure extends Error {}

export function Expect(value: any): IExpectation {
    return {
        toBe(comparison: any): void {
            if (value !== comparison) {
                throw new ExpectationFailure(`Expected ${value} to be ${comparison}`);
            }
        },
        toEqual(comparison: any): void {
            if (value != comparison) {
                throw new ExpectationFailure(`Expected ${value} to equal ${comparison}`);
            }
        }
    }
}

