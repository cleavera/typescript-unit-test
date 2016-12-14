import { ISetupFunction } from './interfaces/ISetup.interface';
import { IRunnable } from './interfaces/IRunnable.interface';
export declare class Test implements IRunnable {
    description: string;
    private fn;
    constructor(description: string, fn: () => void);
    run(setup: ISetupFunction[]): void;
}
