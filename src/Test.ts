import {ISetupFunction} from './interfaces/ISetup.interface';
import {IRunnable} from './interfaces/IRunnable.interface';

export class Test implements IRunnable {
    private fn: () => void;
    description: string;

    constructor(description: string, fn: () => void) {
        this.description = description;
        this.fn = fn;
    }

    run(setup: ISetupFunction[]) {
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