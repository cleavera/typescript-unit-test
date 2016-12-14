import { IRunnable } from './interfaces/IRunnable.interface';
import { ISetupFunction } from './interfaces/ISetup.interface';
import { Test } from './Test';
export declare class Suite implements IRunnable {
    description: string;
    setup: ISetupFunction[];
    suites: Suite[];
    tests: Test[];
    constructor(description: string);
    addSetup(setup: () => void): Suite;
    addSuite(suite: Suite): Suite;
    addTest(description: string, fn: () => void): Suite;
    run(setup?: ISetupFunction[], description?: string[]): void;
}
