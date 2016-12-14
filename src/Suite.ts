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

        this.setup = [];
        this.suites = [];
        this.tests = [];
    }

    public addSetup(setup: () => void): Suite {
        this.setup.push(setup);

        return this;
    }

    public addSuite(suite: Suite): Suite {
        this.suites.push(suite);

        return this;
    }

    public addTest(description: string, fn: () => void): Suite {
        this.tests.push(new Test(description, fn));

        return this;
    }

    public run(setup: ISetupFunction[] = [], description: string[] = []): void {
        setup = setup.concat(this.setup);

        description = description.slice(0);
        description.push(this.description);

        this.tests.forEach((test: Test) => {
            test.run(setup, description);
        });

        this.suites.forEach((suite: Suite) => {
            suite.run(setup, description);
        });
    }
}
