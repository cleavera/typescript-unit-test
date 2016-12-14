class ExpectationFailure extends Error {}

export let Expect = function(value: any) {
    return {
        toBe(comparison: any) {
            if (value !== comparison) {
                throw new ExpectationFailure(`Expected ${value} to be ${comparison}`);
            }
        },
        toEqual(comparison: any) {
            if (value != comparison) {
                throw new ExpectationFailure(`Expected ${value} to equal ${comparison}`);
            }
        }
    }
};

