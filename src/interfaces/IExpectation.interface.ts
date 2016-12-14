export interface IExpectation {
    toBe(comparison: any): void;
    toEqual(comparison: any): void;
}
