import {ISpy} from './interfaces/ISpy.interface';

export function Spy(label: string): ISpy {
    let retValue: any,
        fakeFn: Function,
        childSpies: { args: any[], spies: any[] } = {
            args: [],
            spies: []
        };

    let spy: any = (...args: any[]): void => {
        spy.calls.push(args);

        if (args.length && childSpies.args.length) {
            childSpies.args.forEach((params: any[], spyIndex: number) => {
                let success: boolean = true;

                args.forEach((arg: any, index: number) => {
                    /* tslint:disable triple-equals */
                    if (arg != params[index]) {
                        /* tslint:enable triple-equal */
                        success = false;
                    }
                });

                if (success) {
                    return childSpies.spies[spyIndex](...args);
                }
            });
        }

        if (retValue) {
            return retValue;
        }

        if (fakeFn) {
            return fakeFn(...args);
        }
    };

    spy.callFake = (fn: Function): ISpy => {
        fakeFn = fn;

        return spy;
    };

    spy.returnValue = (value: any): ISpy => {
        retValue = value;

        return spy;
    };

    spy.whenCalledWith = (...args: any[]): ISpy => {
        let child: ISpy = Spy(label);

        childSpies.args.push(args);
        childSpies.spies.push(child);

        return child;
    };

    spy.calls = [];

    spy.reset = (): ISpy => {
        spy.calls = [];

        return spy;
    };

    spy.toString = (): string => {
        return label;
    };

    return spy;
}

export function SpyObject(label: string, methods: string[]): {[key: string]: ISpy} {
    let out: {[key: string]: ISpy} = {};

    methods.forEach((method: string) => {
        out[method] = Spy(`${label}.${method}`);
    });

    return out;
}
