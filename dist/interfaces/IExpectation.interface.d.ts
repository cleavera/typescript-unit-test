export interface IExpectation {
    not?: IExpectation;
    toBe(comparison: any): void;
    toBeTruthy(): void;
    toBeFalsy(): void;
    toEqual(comparison: any): void;
    toThrow(): void;
    toHaveBeenCalled(): void;
    toHaveBeenCalledWith(...args: any[]): void;
}
