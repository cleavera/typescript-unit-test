import {ExpectationFailure} from './ExpectationFailure.error';
import {IExpectation} from './interfaces/IExpectation.interface';
import {InvalidArgument} from './InvalidArgument.error';

function isObjectLike(item: any): boolean {
    return Object.prototype.toString.apply(item) === '[object Object]';
}

function equivalance(value: any, comparison: any): boolean {
    if (value === comparison) {
        return true;
    }

    if (isObjectLike(value) && isObjectLike(comparison)) {
        let props: string[] = Object.keys(value);

        for (let prop in props) {
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

export function Expect(value: any): IExpectation {
    let api: IExpectation = {
        toBe(comparison: any): void {
            if (value !== comparison) {
                throw new ExpectationFailure(`Expected ${value} to be ${comparison}`);
            }
        },
        toBeTruthy(): void {
            if (!value) {
                throw new ExpectationFailure(`Expected ${value} to be truthy`);
            }
        },
        toBeFalsy(): void {
            if (!!value) {
                throw new ExpectationFailure(`Expected ${value} to be falsy`);
            }
        },
        toEqual(comparison: any): void {
            if (!equivalance(value, comparison)) {
                throw new ExpectationFailure(`Expected ${value} to equal ${comparison}`);
            }
        },
        toThrow(): void {
            try {
                value();
                /* tslint:disable typedef */
            } catch (e) {
                /* tslint:enable typedef */
                return;
            }

            throw new ExpectationFailure(`Expected ${value} to throw an error`);
        },
        toHaveBeenCalled(): void {
            if (!('calls' in value)) {
                throw new InvalidArgument(`Expected ${value} to be a spy`);
            }

            if (!value.calls.length) {
                throw new ExpectationFailure(`Expected ${value} to have been called but it was never called`);
            }
        },
        toHaveBeenCalledWith(...args: any[]): void {
            if (!('calls' in value)) {
                throw new InvalidArgument(`Expected ${value} to be a spy`);
            }

            if (!value.calls.length) {
                throw new ExpectationFailure(`Expected ${value} to have been called but it was never called`);
            }

            let success: boolean;

            value.calls.forEach((call: any) => {
                if (!success) {
                    success = true;

                    args.forEach((arg: any, index: number) => {
                        /* tslint:disable triple-equals */
                        if (arg != call[index]) {
                            /* tslint:enable triple-equal */
                            success = false;
                        }
                    });
                }
            });

            if (!success) {
                throw new ExpectationFailure(`Expected ${value} to have been called with ${args} but it was instead called with ${JSON.stringify(value.calls)}`);
            }
        }
    };

    api.not = {
        toBe(comparison: any): void {
            try {
                api.toBe(comparison);
                /* tslint:disable typedef */
            } catch (e) {
                /* tslint:enable typedef */
                return;
            }

            throw new ExpectationFailure(`Expected ${value} not to be ${comparison}`);
        },
        toBeTruthy(): void {
            try {
                api.toBeTruthy();
                /* tslint:disable typedef */
            } catch (e) {
                /* tslint:enable typedef */
                return;
            }

            throw new ExpectationFailure(`Expected ${value} not to be truthy`);
        },
        toBeFalsy(): void {
            try {
                api.toBeFalsy();
                /* tslint:disable typedef */
            } catch (e) {
                /* tslint:enable typedef */
                return;
            }

            throw new ExpectationFailure(`Expected ${value} not to be falsy`);
        },
        toEqual(comparison: any): void {
            try {
                api.toEqual(comparison);
                /* tslint:disable typedef */
            } catch (e) {
                /* tslint:enable typedef */
                return;
            }

            throw new ExpectationFailure(`Expected ${value} not to equal ${comparison}`);
        },
        toThrow(): void {
            try {
                value();
                /* tslint:disable typedef */
            } catch (e) {
                /* tslint:enable typedef */
                throw new ExpectationFailure(`Expected ${value} not to throw an error but it threw ${e}`);
            }
        },
        toHaveBeenCalled(): void {
            try {
                api.toHaveBeenCalled();
                /* tslint:disable typedef */
            } catch (e) {
                /* tslint:enable typedef */
                return;
            }

            throw new ExpectationFailure(`Expected ${value} not to have been called but it was called with ${JSON.stringify(value.calls)}`);
        },
        toHaveBeenCalledWith(...args: any[]): void {
            try {
                api.toHaveBeenCalledWith(...args);
                /* tslint:disable typedef */
            } catch (e) {
                /* tslint:enable typedef */
                return;
            }

            throw new ExpectationFailure(`Expected ${value} not to have been called with ${args}`);
        }
    };

    return api;
}
