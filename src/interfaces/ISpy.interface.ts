export interface ISpy {
    calls: any[];
    fakeFn: Function;
    retValue: any;
    callFake(fn: Function): ISpy;
    reset(): ISpy;
    returnValue(value: any): ISpy;
}
