import { IRunnable } from './interfaces/IRunnable.interface';
import { ISetupFunction } from './interfaces/ISetup.interface';
export declare class Test implements IRunnable {
    description: string;
    private fn;
    constructor(description: string, fn: () => void);
    run(setup: ISetupFunction[], description?: string[]): void;
}
