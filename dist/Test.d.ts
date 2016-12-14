import { ISetupFunction } from './interfaces/ISetup.interface';
import { IRunnable } from './interfaces/IRunnable.interface';
export declare class Test implements IRunnable {
    private fn;
    description: string;
    constructor(description: string, fn: () => void);
    run(setup: ISetupFunction[]): void;
}
