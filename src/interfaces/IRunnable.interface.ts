import {ISetupFunction} from './ISetup.interface';

export interface IRunnable {
    run(setup?: ISetupFunction[]): void;
}
