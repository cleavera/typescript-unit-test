import {IRunnable} from './interfaces/IRunnable.interface';
import {ISetupFunction} from './interfaces/ISetup.interface';
import {Test} from './Test';

export class Suite implements IRunnable {
    public description: string;
    public setup: ISetupFunction[];
    public suites: Suite[];
    public tests: Test[];

    constructor(description: string) {
        this.description = description;
    }

    public addSetup(setup: () => void): void {
        this.setup.push(setup);
    }

    public addSuite(suite: Suite): void {
        this.suites.push(suite);
    }

    public addTest(description: string, fn: () => void): void {
        this.tests.push(new Test(description, fn));
    }

    public run(setup: ISetupFunction[] = []): void {
        setup = setup.concat(this.setup);

        this.tests.forEach((test: Test) => {
            test.run(setup);
        });

        this.suites.forEach((suite: Suite) => {
            suite.run(setup);
        });
    }
}
