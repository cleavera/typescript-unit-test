import { IRunnable } from './interfaces/IRunnable.interface';
import { ISetupFunction } from './interfaces/ISetup.interface';
import { Test } from './Test';
export declare class Suite implements IRunnable {
    description: string;
    setup: ISetupFunction[];
    suites: Suite[];
    tests: Test[];
    constructor(description: string);
    addSetup(setup: () => void): void;
    addSuite(suite: Suite): void;
    addTest(description: string, fn: () => void): void;
    run(setup?: ISetupFunction[]): void;
}
