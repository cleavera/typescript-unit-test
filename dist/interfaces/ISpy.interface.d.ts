export interface ISpy {
    calls: any[];
    fakeFn: Function;
    retValue: any;
    callFake(fn: Function): ISpy;
    whenCalledWith(...args: any[]): ISpy;
    reset(): ISpy;
    returnValue(value: any): ISpy;
}
