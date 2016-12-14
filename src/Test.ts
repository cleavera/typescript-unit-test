import {ISetupFunction} from './interfaces/ISetup.interface';
import {IRunnable} from './interfaces/IRunnable.interface';

export class Test implements IRunnable {
    public description: string;
    private fn: () => void;

    constructor(description: string, fn: () => void) {
        this.description = description;
        this.fn = fn;
    }

    public run(setup: ISetupFunction[]): void {
        setup.forEach((fn: () => void) => {
            fn();
        });

        try {
            this.fn();
        } catch(e) {
            console.error(e);
        }
    }
}