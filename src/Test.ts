import {IRunnable} from './interfaces/IRunnable.interface';
import {ISetupFunction} from './interfaces/ISetup.interface';

export class Test implements IRunnable {
    public description: string;
    private fn: () => void;

    constructor(description: string, fn: () => void) {
        this.description = description;
        this.fn = fn;
    }

    public run(setup: ISetupFunction[], description: string[] = []): void {
        setup.forEach((fn: () => void) => {
            fn();
        });

        description = description.slice(0);
        description.push(this.description);

        try {
            this.fn();
        } catch (e) {
            console.error(description.join(' ') + '\n', e);
        }
    }
}
